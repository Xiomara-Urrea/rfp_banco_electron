const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require("autoprefixer")();

// > Root App
const APP_FOLDER = path.resolve(__dirname, './app');

// > Dist
const DIST_FOLDER = path.resolve(APP_FOLDER, './dist');
const DIST_FOLDER_STYLE = path.resolve(DIST_FOLDER, './style');

const DIST_FILE_JS_BUNDLE = 'js/bundle.js';
const DIST_FILE_CSS_BUNDLE_NAME = 'bundle.css';
const DIST_FILE_CSS_BUNDLE = `style/${DIST_FILE_CSS_BUNDLE_NAME}`;
// > Src
const SRC_FOLDER = path.resolve(APP_FOLDER, './src');
const SRC_FILE_JS_APP = path.resolve(SRC_FOLDER, './js/index');

const settings = {
    distPath: DIST_FOLDER,
    srcPath: APP_FOLDER
};

function srcPathExtend(subpath) {
    return path.join(settings.srcPath, subpath)
}

module.exports = (env, options) => {
    const isDevMode = options.mode === "development";
    return {
        devtool: isDevMode ? "source-map" : false,
        mode: options.mode,
        entry: ['babel-polyfill', SRC_FILE_JS_APP],
        output: {
            path: DIST_FOLDER,
            filename: DIST_FILE_JS_BUNDLE,
            sourceMapFilename: 'sourcemaps/[file].map',
        },
        resolve: {
            extensions: [".jsx", ".js"],
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)?$/,
                    loader: 'babel-loader',
                    exclude: /(node_modules|bower_components)/,
                    query: {
                        presets: ['es2015', 'react', 'stage-2'],
                    },
                },
                {
                    test: /\.(css|scss)?$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader/url!file-loader',
                        use: [
                            {
                                loader: "css-loader",
                                options: {
                                    sourceMap: isDevMode
                                }
                            },
                            {
                                loader: "sass-loader",
                                options: {
                                    sourceMap: isDevMode
                                }
                            },
                            {
                                loader: "postcss-loader",
                                options: {
                                    plugins: [
                                        autoprefixer
                                    ],
                                    sourceMap: isDevMode
                                }
                            }
                        ],
                        publicPath: DIST_FOLDER_STYLE,
                    }),

                },
                {
                    test: /\.(ttf|eot|woff|woff2)$/,
                    use: {
                        loader: "file-loader",
                        options: {
                            name: "fonts/[name].[ext]",
                        },
                    },
                },
                {
                    test: /\.(jpe?g|png|gif|svg|ico)$/i,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "assets/"
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin([settings.distPath], {
                verbose: true
            }),
            new HtmlWebpackPlugin({
                template: srcPathExtend("index.html")
            }),
            new ExtractTextPlugin({
                filename: DIST_FILE_CSS_BUNDLE,
                disable: false,
                allChunks: true,
            }),
        ],
        devServer: {
            historyApiFallback: true,
            port: 4000,
        }
    };
};