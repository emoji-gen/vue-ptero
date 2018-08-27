set('-ev')
cd(__dirname)

pushd('./vue1')
if (which('yarn')) {
  exec('yarn')
  exec('yarn run build')
} else {
  exec('npm install')
  exec('npm run build')
}
popd()

pushd('./vue2')
if (which('yarn')) {
  exec('yarn')
  exec('yarn run build')
} else {
  exec('npm install')
  exec('npm run build')
}
popd()
