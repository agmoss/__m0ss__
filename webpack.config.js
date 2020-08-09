const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const APP_PATH = path.resolve(__dirname, "src");
const PUBLIC_PATH = path.resolve(__dirname, "public");

module.exports = {
    entry:
        APP_PATH,

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        compress: true,
        hot: true,
        historyApiFallback: true,
        stats: { colors: true },
        contentBase: path.join(__dirname, '/dist'),
        disableHostCheck: true,
        host: 'localhost',
        overlay: true,
        watchContentBase: true,
        writeToDisk: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ["file-loader?name=[name].[ext]"],
            },
        ],
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(PUBLIC_PATH, "index.html"),
        }),
        new CopyPlugin({
            patterns: [{ from: PUBLIC_PATH, to: "" }],
        }),
        new ForkTsCheckerWebpackPlugin(),
    ],
};
