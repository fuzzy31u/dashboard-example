const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');
const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, '..', 'server', 'dist');

console.log('!!!',src);

module.exports = {
    entry: path.join(src, "index.tsx"),
    output: {
        filename: "bundle.js",
        path: dist
    },
    devtool: "source-map",
    resolve: {
        extensions: [
            ".ts",
            ".tsx",
            ".js",
            ".json"
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: "/\.js$/",
                loader: "source-map-loader"
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                "from": "index.html",
                "to": dist
            },
            {
                "from": path.join(__dirname, "node_modules", "react", "dist", "react.js"),
                "to": dist
            },
            {
                "from": path.join(__dirname, "node_modules", "react-dom", "dist", "react-dom.js"),
                "to": dist
            }            
        ])
    ]
};