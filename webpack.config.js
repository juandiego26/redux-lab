const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = (env) => {
  const plugins = [
    new MiniCssExtractPlugin({
      filename: './css/[name].[hash].css'
    }),
  ]

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], {root: __dirname})
    )
  }

  return {
    mode: 'production',
    entry: {
      "home": path.resolve(__dirname, 'src/entries/home.js'),
      "redux": path.resolve(__dirname, 'src/entries/redux.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].[hash].js',
      publicPath: path.resolve(__dirname, 'dist') + "/",
      chunkFilename: 'js/[id].[chunkhash].js',
    },
    devServer: {
      port: 9000,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-proposal-class-properties'
              ]
            }
          }
        },
        {
          test: /\.css$/,
          //use: ['style-loader', 'css-loader']
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            }
          ]
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 100000,
                fallback: 'file-loader',
                name: 'images/[name].[hash].[ext]',
              }
            }
          ]
        },
      ]
    },
    plugins
  }
}