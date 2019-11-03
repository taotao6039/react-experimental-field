const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodeModulesPath = path.resolve(__dirname, 'node_modules')

module.exports = {
    entry: path.resolve(__dirname + "/src/index.tsx"),
    output: {
        filename: "bundle.js",
        // chunkFilename: "[name]-[contenthash:10].chunk.js",
        path: path.resolve(__dirname + "/dist"), // 指定的输出路径
        publicPath: "/public/" // 打包时生成的静态文件所在的位置 && index.html文件里面引用资源的前缀
    },

    mode: 'development',

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    // Dev server options
    devServer: {
        port: 3000,
        // contentBase: path.join(__dirname + "/dist"), // 查找index.html文件的位置
        publicPath: "/public/", // 打包时生成的静态文件所在的位置，优先级高。默认是“/”
    },

    resolve: {
        alias: {},
        extensions: [".js", ".json", ".ts", ".tsx"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                exclude : [/node_modules/]
            },

            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: [/node_modules/, nodeModulesPath]
            },

            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },

            {
                test: /\.html$/,
                loader: "html-loader"
            },

            {
                test: [/\.scss$/],
                use: [
                    'style-loader',
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            namedExport: true,
                            camelCase: true,
                            sass: true
                        }
                    },
                    'sass-loader'
                ],
                exclude: [/node_modules/],// 这里去排除node_modules，防止css modules影响到node_modules
            },

            // 当图片大小小于限制时会自动转成 base64
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader?limit=8192&name=images/[name].[hash:8].[ext]'
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',//这个是基于devserver中的contentBase目录
            template: path.resolve(__dirname + "/src/index.html")
        }),
        new webpack.WatchIgnorePlugin([/scss\.d\.ts$/])
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }
};