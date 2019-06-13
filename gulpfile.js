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
const {spawn} = require('child_process');

function cleanup() {
  return del(['dist/**']);
}

function setup() {
  return src(protoFiles, {cwd: 'proto/', read: false})
    .pipe(dest('dist/java'))
    .pipe(dest('dist/commonjs'));
}

const cmd = {
  protoc: 'compiler/protoc.exe',
  browserify: 'node_modules/.bin/browserify.cmd',
};

const protoFiles = ['person.proto'];

function exec(command) {
  const args = command.split(' ');
  const cmd = args.shift();
  return spawn(cmd, args.filter(c => !!c));
}

//compiler\protoc.exe --java_out=dest\java proto\person.proto
function java(cb) {
  exec(`${cmd.protoc} --java_out=dist/java proto/person.proto`).on('close', cb);
}

function commonjs(cb) {
  exec(`${cmd.protoc} --js_out=binary,import_style=commonjs:dist/commonjs  proto/person.proto`).on('close', cb);
}

function browserify(cb) {
  exec(`${cmd.browserify} node_modules/google-protobuf/google-protobuf.js commonjs:dist/commonjs/proto/person_pb.js > dist/commonjs/bundle.js`).on('close', cb);
}

//node_modules/google-protobuf/google-protobuf.js
//browserify google-protobuf.js person_pb.js > abc.js

exports.default = series(cleanup, setup, parallel(java, commonjs), browserify);
