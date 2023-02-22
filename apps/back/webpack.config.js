const path = require('path')
const Dotenv = require('dotenv-webpack')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')

module.exports = (env) => {
  return {
    entry: {
      server: './src/index.ts',
    },
    target: 'node',
    node: {
      // Need this when working with express, otherwise the build fails
      __dirname: false, // if you don't put this is, __dirname
      __filename: false, // and __filename return blank or /
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'esbuild-loader',
          options: {
            loader: 'tsx',
            target: 'es2015',
          },
          exclude: /node_modules/,
        },
        { test: /\.(sass|css|scss)$/, use: ['style-loader', 'css-loader'] },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                limit: 10000,
              },
            },
          ],
        },
        {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false,
          },
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      mainFields: ['es2019', 'browser', 'module', 'main'],
      modules: ['node_modules', '../../node_modules'],
      fallback: {
        fs: false,
        os: false,
        tls: false,
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new Dotenv({
        path: `./.env`,
      }),
    ],
    output: {
      publicPath: '/',
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    }, // chrome will look for files under dist/* folder
  }
}
