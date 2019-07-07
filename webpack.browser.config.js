const {outputPath, webpack} = require("./webpack.const");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, args)=>{
    return {
        entry: "./src/browser/index.js",
        output: {
            path: outputPath,
            filename: `static/js/bundle${(args.mode == "production" ? "-[hash]" : "")}.js`,
            publicPath: "/"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                            plugins:["@babel/transform-runtime"]
                        }
                    }
                }
            ]
        },
        plugins: [
            new htmlWebpackPlugin({
                filename: "index.html",
                template: "./src/index.html"
            }),
            new webpack.DefinePlugin({
                __isBrowser__ : true
            })
        ],
        devtool: args.mode == "development" ? "source-map" : ""
    }
}