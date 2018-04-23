const path = require('path');
// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './frontend/entry.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'wpk.js'
  },
  resolve: {
   extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
  //     {
  //       test: /\.html$/,
  //       use: [
  //         {
  //           loader: "html-loader",
  //           options: { minimize: true }
  //         }
  //       ]
  //     },
  //     {
  //       test: /\.css$/,
  //       use: [MiniCssExtractPlugin.loader, "css-loader"]
  //     }
  //   ]
  // }
  // plugins: [
  //   new HtmlWebPackPlugin({
  //     template: "./app/views/layouts/application.html.erb",
  //     filename: "./index.html"
  //   }),
  //   new MiniCssExtractPlugin({
  //     filename: "[name].css",
  //     chunkFilename: "[id].css"
  //   })
  // ]

// template: "./frontend/index.html",
