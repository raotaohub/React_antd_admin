const path = require('path')
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra')

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' }
  }),

  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname,'src/components'),
    '@api': path.resolve(__dirname,'src/api'),
    '@style': path.resolve(__dirname,'src/style'),
    '@utils': path.resolve(__dirname,'src/utils'),
    '@page': path.resolve(__dirname,'src/page'),
    '@assets': path.resolve(__dirname,'src/assets'),
    '@store': path.resolve(__dirname,'src/store'),
    '@routes': path.resolve(__dirname,'.src/routes')
  })
)

// "@css/*": ["assets/css/*"],
// "@assets/*": ["assets/*"],
// "@constants/*": ["constants/*"],
// "@services/*": ["services/*"],
// "@api": ["api/index"],
// "@view/*": ["view/*"],
// "@components/*": ["components/*"],
// "@utils/*": ["utils/*"],
// "@typings/*": ["typings/*"],
// "@router/*": ["router/*"],
// "@store/*": ["store/*"]
