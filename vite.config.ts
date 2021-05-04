import { defineConfig } from 'vite'
import * as path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImport from 'vite-plugin-babel-import'
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@api': path.resolve(__dirname, './src/api'),
      '@components': path.resolve(__dirname, './src/components'),
      '@style': path.resolve(__dirname, './src/style'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@page': path.resolve(__dirname, './src/page'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@store': path.resolve(__dirname, './src/store'),
      '@routes': path.resolve(__dirname, './src/routes'),
    },
  },
  plugins: [
    reactRefresh(),
    vitePluginImport([
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style(name) {
          return `antd/lib/${name}/style/index.css`
        },
      },
    ]),
    styleImport({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: name => {
            return `antd/es/${name}/style/index`
          },
        },
      ],
    }),
  ],
})
