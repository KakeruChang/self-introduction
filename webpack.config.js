const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: ['./src/index.tsx'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/')
  },
  resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/typescript', '@babel/preset-env']
          }
        }
      },
      {
        test: /.tsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/typescript',
              '@babel/preset-react',
              '@babel/preset-env'
            ]
          }
        }
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // {
      //   test: /\.(scss)$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: { localIdentName: '[name]__[local]___[hash:base64:5]' }
      //       }
      //     },
      //     {
      //       loader: 'sass-loader'
      //     }
      //   ]
      // }
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: './images/[name].[ext]',
              limit: 40000
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html'
    })
    // new MiniCssExtractPlugin({
    //   filename: './index.css'
    // })
  ]
}
