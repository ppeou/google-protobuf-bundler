const {src, dest, series, parallel} = require('gulp');
const del = require('del');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const {spawn, exec} = require('child_process');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
var fs = require('fs');

const entryFolder = './proto';

const getFilesFromFolder = (folder) => {
  return fs.readdirSync(folder).filter(f => f.indexOf('.proto') > -1).map(name => {
    return name.replace('.proto', '');
  });
};

const filesInfo = {
  files: '',
  protoFilesArr: '',
  protoFilesFlat: '',
  pbFilesArr: '',
  pbFilesFlat: '',
};

function getPathToProtoFiles(files) {
  return files.map(c => `proto/${c}.proto`);
  //return files.map(c => `${c}.proto`);
}

function getPathToPBFiles(files) {
  return ['google-protobuf', ...files].map(c => `dist/proto/${c}_pb.js`);
}

const cmd = {
  protoc: 'compiler/protoc.exe',
  //protoc: './protoc.exe',
  browserify: 'browserify',
};

function getSpawn(command) {
  const args = command.split(' ');
  const cmd = args.shift();
  return spawn(cmd, args.filter(c => !!c), {cwd: '.'});
}

function preCleanup() {
  return del(['dist/**']);
}

function setupProtoCompiler() {
  return src('compiler/protoc.exe')
    .pipe(dest('proto'));
}

function setupDistributeFolder() {
  return src('gulpfile.js', {read: false})
    .pipe(dest('dist/java'))
    .pipe(dest('dist/proto'))
    .pipe(dest('dist/js'));
}

function getProtoFileName(cb) {
  const files = getFilesFromFolder(entryFolder);
  protoFilesArr = getPathToProtoFiles(files);
  protoFilesFlat = protoFilesArr.join(' ');
  pbFilesArr = getPathToPBFiles(files);
  pbFilesFlat = pbFilesArr.join(' ');
  Object.assign(filesInfo, {files, protoFilesArr, protoFilesFlat, pbFilesArr, pbFilesFlat});
  cb();
}

function protoToJavaClass(cb) {
  const _cmd = `${cmd.protoc} --proto_path=proto --java_out=dist/java ${protoFilesFlat}`;
  console.log(_cmd);
  getSpawn(_cmd).on('close', cb);
}

function protoToCommonJs(cb) {
  const _cmd = `${cmd.protoc} --proto_path=proto --js_out=binary,import_style=commonjs:dist/proto  ${protoFilesFlat}`;
  console.log(_cmd);
  getSpawn(_cmd).on('close', cb);
}

function bundleCommonJsFiles() {
  return browserify(['dist/proto/google-protobuf_pb.js', ...pbFilesArr], {bundleExternal: true})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(dest('dist/js'));
}

function importGoogleProtobuf() {
  return src('node_modules/google-protobuf/google-protobuf.js')
    .pipe(rename("google-protobuf_pb.js"))
    .pipe(dest('dist/proto'));
}

function updateGoogleRef() {
  return src(['dist/proto/*.js', '!dist/proto/google-protobuf_pb.js'])
    .pipe(
      replace(
        `var jspb = require('google-protobuf');`,
        `var jspb = require('./google-protobuf_pb.js');`))
    .pipe(dest('dist/proto'));
}

function createEntryFile(cb) {
  const exportableNames = [];
  const files = filesInfo.files.map(f => {
    const newName = f.replace(/\-/g, '_');
    exportableNames.push(`...${newName}`);
    return `const ${newName} = require('./${f}_pb.js');`;
  });

  files.push(`const items = { ${exportableNames.join(', ')} };`);
  files.push(`module.exports = items;`);

  fs.writeFile('dist/proto/all_pb.js', files.join('\n'), cb);
}

function doRollup(cb) {
  const _cmd = `rollup -c`;
  console.log(_cmd);
  exec(_cmd).on('close', cb);
}

exports.default = series(
  preCleanup,
  setupDistributeFolder,
  getProtoFileName,
  setupProtoCompiler,
  parallel(protoToJavaClass, protoToCommonJs),
  importGoogleProtobuf,
  updateGoogleRef,
  createEntryFile,
  parallel(bundleCommonJsFiles, doRollup)
);
