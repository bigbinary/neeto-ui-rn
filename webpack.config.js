const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const appDirectory = path.resolve(__dirname);

const babelLoaderConfiguration = {
  test: /\.js/,
  include: [
    path.resolve(__dirname, "index.web.js"),
    path.resolve(__dirname, "App.web.js"),
    path.resolve(__dirname, "lib"),
    path.resolve(__dirname, "./storybook/stories"),
    path.resolve(__dirname, "./.storybook/preview.js"),
    path.resolve(__dirname, "./node_modules/react-native-modal-selector"),
    path.resolve(__dirname, "./node_modules/react-native-swipe-gestures"),
    // ...compileNodeModules,
  ],
  use: {
    loader: "babel-loader",
    options: {
      cacheDirectory: true,
      presets: [
        "@babel/env",
        "@babel/preset-react",
        "module:metro-react-native-babel-preset",
      ],
      plugins: ["react-native-web", "@babel/plugin-proposal-class-properties"],
    },
  },
};

const ttfLoaderConfiguration = {
  test: /\.ttf$/,
  use: {
    loader: "url-loader",
  },
  include: [path.resolve(appDirectory, "./assets")],
};

const svgLoaderConfiguration = {
  test: /\.svg$/,
  use: [
    {
      loader: "@svgr/webpack",
    },
  ],
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png)$/,
  use: {
    loader: "url-loader",
    options: {
      name: "[name].[ext]",
    },
  },
};

module.exports = {
  entry: {
    app: path.join(__dirname, "index.web.js"),
  },
  output: {
    path: path.resolve(appDirectory, "dist"),
    publicPath: "/",
    filename: "rnw.bundle.js",
  },
  resolve: {
    extensions: [".web.tsx", ".web.ts", ".tsx", ".ts", ".web.js", ".js"],
    alias: {
      "react-native$": "react-native-web",
      // "@storybook/react-native$": "@storybook/react",
    },
  },
  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration,
      svgLoaderConfiguration,
      ttfLoaderConfiguration,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      // See: https://github.com/necolas/react-native-web/issues/349
      __DEV__: JSON.stringify(true),
    }),
  ],
  devServer: {
    open: true,
  },
};
