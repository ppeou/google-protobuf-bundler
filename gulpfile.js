const {src, dest, series, parallel} = require('gulp');
const cssMinify = require('gulp-csso');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const rev = require('gulp-rev');
const revRewrite = require('gulp-rev-rewrite');
const revDel = require('gulp-rev-delete-original');
const htmlMinify = require('gulp-htmlmin');
const del = require('del');
const shell = require('gulp-shell');
const {spawn, exec} = require('child_process');

function cleanup() {
  return del(['dist/**']);
}

function setup() {
  return src('gulpfile.js', {read: false})
    .pipe(dest('dist/java'))
    .pipe(dest('dist/commonjs'));
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
  return _files.map(c => `dist/commonjs/proto/${c}_pb.js`);
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
  getSpawn(`${cmd.protoc} --java_out=dist/java ${protoFilesFlat}`).on('close', cb);
}

function commonjs(cb) {
  getSpawn(`${cmd.protoc} --js_out=binary,import_style=commonjs:dist/commonjs  ${protoFilesFlat}`).on('close', cb);
}

function browserify(cb) {
  exec(`${cmd.browserify} node_modules/google-protobuf/google-protobuf.js ${pbFilesFlat} > dist/commonjs/bundle.js`).on('close', cb);
}

exports.default = series(cleanup, setup, parallel(java, commonjs), browserify);
