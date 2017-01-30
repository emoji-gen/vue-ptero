set('-ev')
cd(__dirname)

pushd('./vue')
exec('yarn-install')
exec('npm run build')
popd()

pushd('./vue2')
exec('yarn-install')
exec('npm run build')
popd()
