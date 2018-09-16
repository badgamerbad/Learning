// webpack.config.js
module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
      filename: 'index.js',
      publicPath: 'dist'
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.html$/,
          loader: "raw-loader"
        },
        {
          test: /\.css$/,
          loader: "raw-loader"
        }
      ]
    }
  };