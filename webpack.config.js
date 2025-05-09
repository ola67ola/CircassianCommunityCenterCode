const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const dotenv = require('dotenv');

// Load environment variables from .dev.env file in the secret directory
dotenv.config({ path: path.resolve(__dirname, 'secret/.dev.env') });

module.exports = {
  mode: 'development', // Set the mode to 'development' for development environment
  entry: './src/frontend/index.tsx', // Correct entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Add this rule to handle CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i, // Add this rule to handle image files
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
    setupMiddlewares: (middlewares, devServer) => {
      devServer.app.use((req, res, next) => {
        try {
          decodeURIComponent(req.path);
          next();
        } catch (e) {
          res.status(400).send('Bad Request');
        }
      });
      return middlewares;
    },
  },
};
