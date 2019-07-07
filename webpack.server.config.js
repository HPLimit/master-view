const {outputPath, webpack} = require('./webpack.const');
const nodeExternals = require('webpack-node-externals');

module.exports = (env, args)=>{
    return {
        entry: "./src/index.js",
        output: {
            path: outputPath + "/server",
            filename: "index.js",
            publicPath: "/"
        },
        externals: [nodeExternals()],
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
            new webpack.DefinePlugin({
                __isBrowser__ : false
            })
        ],
        devtool: args.mode == "development" ? "source-map" : "",
        target: "node"
    }
}