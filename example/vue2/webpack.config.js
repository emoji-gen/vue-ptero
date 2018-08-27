module.exports = {
  mode: 'production',
  context: __dirname,
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
}
