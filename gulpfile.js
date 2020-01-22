const {src, dest, series, parallel} = require('gulp');
const del = require('del');
const browserify = require('browserify');
const source =  require('vinyl-source-stream');
const {spawn, exec} = require('child_process');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
var fs = require('fs');

function cleanup() {
  return del(['dist/**']);
}

function setup() {
  return src('gulpfile.js', {read: false})
    .pipe(dest('dist/java'))
    .pipe(dest('dist/js'));
}

const cmd = {
  protoc: 'compiler/protoc.exe',
  browserify: 'browserify',
};

const _files = ['person', 'search'];

function getProtoFiles() {
  return _files.map(c => `proto/${c}.proto`);
}

function getPBFiles() {
  return _files.map(c => `dist/proto/${c}_pb.js`);
}

const protoFilesArr = getProtoFiles();
const protoFilesFlat = protoFilesArr.join(' ');
const pbFilesArr = getPBFiles();
const pbFilesFlat = pbFilesArr.join(' ');

function getSpawn(command) {
  const args = command.split(' ');
  const cmd = args.shift();
  return spawn(cmd, args.filter(c => !!c), {cwd: '.'});
}

function java(cb) {
  const _cmd = `${cmd.protoc} --java_out=dist/java ${protoFilesFlat}`;
  console.log(_cmd);
  getSpawn(_cmd).on('close', cb);
}

function commonjs(cb) {
  const _cmd = `${cmd.protoc} --js_out=binary,import_style=commonjs:dist/  ${protoFilesFlat}`;
  console.log(_cmd);
  getSpawn(_cmd).on('close', cb);
}

function bundleFiles() {
  //'node_modules/google-protobuf/google-protobuf.js'
  return  browserify(['dist/proto/google-protobuf_pb.js', ...pbFilesArr], {
    bundleExternal: false
  })
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
  return src(['dist/proto/*.js', '!google-protobuf_pb.js'])
    .pipe(replace(`var jspb = require('google-protobuf');`, `var jspb = require('./google-protobuf_pb.js');`))
    .pipe(dest('dist/proto'));
}

function createAllFile(cb) {
  const exportableNames = [];
  const files = ['google-protobuf', ..._files].map(f => {
    const newName = f.replace(/\-/g, '_');
    exportableNames.push(newName);
    return `const ${newName} = require('./${f}_pb.js');`;
  });

  files.push(`\nmodule.exports = { ${exportableNames.join(', ')} };`);

  fs.writeFile('dist/proto/all_pb.js', files.join('\n'), cb);

}

exports.default = series(cleanup, setup, parallel(java, commonjs),
  importGoogleProtobuf, updateGoogleRef, createAllFile, bundleFiles);
