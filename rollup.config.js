import commonjs from 'rollup-plugin-commonjs';
const _files = ['google-protobuf', 'person', 'search'];

function getPBFiles() {
  return _files.map(c => `dist/proto/${c}_pb.js`);
}

function getRollupConfig(files) {
  const plugins = [commonjs({})];
  return files.map(f => {
    const newName = f.split('/').pop().replace('_pb', '-esm');
    return {
      input: f,
      output: {
        file: `dist/js/${newName}`,
        format: 'esm'
      },
      plugins,
    };
  });
}


module.exports = getRollupConfig(['dist/proto/all_pb.js']);
//module.exports = getRollupConfig(['dist/proto/all_pb.js', ...getPBFiles()]);

/*//'node_modules/google-protobuf/google-protobuf.js',
module.exports = getRollupConfig([
  ...getPBFiles()]);*/

/*module.exports = [
  {
    input: 'node_modules/google-protobuf/google-protobuf.js',
    output: {
      file: 'dist/js/google-protobuf_esm.js',
      format: 'esm'
    },
    plugins: [commonjs({})],
  },
  {
  input: 'dist/proto/search_pb.js',
  output: {
    file: 'dist/js/search_esm.js',
    format: 'esm'
  },
  plugins: [commonjs({})],
}];*/
