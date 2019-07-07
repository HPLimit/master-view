const path = require("path");
const outputName = "dist";
const outputPath = path.resolve(__dirname, outputName);
const webpack = require("webpack")

module.exports = {path, outputName, outputPath, webpack}