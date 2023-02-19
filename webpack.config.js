const { resolve } = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv").config({ path: __dirname + "/.env" });
console.log(__dirname);
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const isDevelopment = process.env.NODE_ENV !== "production";

const tsRule = {
  test: /\.ts(x?)$/,
  exclude: /node_modules/,
  use: "ts-loader",
};

const plugins = [
  new HTMLWebpackPlugin({
    template: "src/index.html",
    filename: "index.html",
    chunks: ["app"],
  }),
  new CopyWebpackPlugin({
    patterns: [{ from: "public", to: "." }],
  }),
  new CleanWebpackPlugin(),
  new webpack.DefinePlugin({
    "process.env": JSON.stringify(dotenv.parsed),
    "process.env.NODE_ENV": JSON.stringify(
      isDevelopment ? "development" : "production"
    ),
  }),
].filter(Boolean);

module.exports = {
  mode: "production",
  devtool: "cheap-module-source-map",
  entry: {
    app: "./src/app.tsx",
    feature: "./src/utils/feature.ts",
    reply: "./src/utils/reply.ts",
  },
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      os: false,
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
      async_hooks: false,
    },
  },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "dist"),
  },
  module: {
    rules: [tsRule],
  },
  plugins,
};
