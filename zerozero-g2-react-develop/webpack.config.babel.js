import path from 'path'
import webpack from 'webpack'
import AssetsPlugin from 'assets-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
//import iltorb from 'iltorb'
const HtmlWebpackPlugin = require('html-webpack-plugin');
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const DIST_PATH = path.resolve(__dirname, 'public/')
const production = process.env.NODE_ENV === 'production'
const staging = process.env.NODE_ENV === 'staging'
const development =
    !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

console.log('process.env.NODE_ENV:', process.env.NODE_ENV);

module.exports = {
    context: path.resolve(__dirname, 'src/client'),
    entry: [
        ...(development
            ? [
                'react-hot-loader/patch',
                'webpack-dev-server/client?http://localhost:8080',
                'webpack/hot/only-dev-server',
            ]
            : []),
        './main.js',
    ],
    output: {
        path: DIST_PATH,  
        filename: development? '[name].js' : '[name]-bundle-[hash].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.json'],
        modules: ['node_modules', 'src'],
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                    publicPath: "/public"
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: 'css-loader!postcss-loader!sass-loader',
                    publicPath: "/"
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[hash].[ext]',
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: "/"
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            'react',
                            [
                                'env',
                                {
                                    modules: false,
                                    loose: false,
                                    targets: {
                                        uglify: production,
                                        browsers: ['> 0.25%', 'last 2 versions', 'ie >= 11']
                                    },
                                },
                            ]
                        ],
                        plugins: [
                            'syntax-dynamic-import',
                            'transform-object-rest-spread',
                            'transform-class-properties',
                            ['lodash', { id: 'recompact' }],
                            'loadable-components/babel',
                            'babel-plugin-dynamic-import-node',
                            [
                                'styled-components',
                                {
                                    ssr: true,
                                },
                            ],
                            ...(development ? ['react-hot-loader/babel'] : []),
                        ],
                    },
                },
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Tether: 'tether',
        }),
        new webpack.DefinePlugin({
            // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new ExtractTextPlugin({
            filename: "css/[name].[hash].css",
            disable: false,
            allChunks: true
        }),
        ...(development
            ? [
                new HtmlWebpackPlugin({
                    template: __dirname + "/static/index.tmpl.html"
                }),
                new webpack.HotModuleReplacementPlugin(),
                new webpack.NamedModulesPlugin(),
            ]
            : [
                new webpack.LoaderOptionsPlugin({minimize: true}),
                new AssetsPlugin({path: DIST_PATH}),
                /*new webpack.optimize.UglifyJsPlugin(),*/
                new CompressionPlugin({
                    algorithm: 'gzip',
                    asset: '[path].gz[query]',
                    test: /\.js$/,
                    threshold: 10240,
                    minRatio: 0.8,
                }),
            ]),
    ],
    ...(development
        ? {
            devServer: {
                historyApiFallback: true,
                hot: true,
                contentBase: DIST_PATH,
                publicPath: '/',
                // allowedHosts: ['www.artkernel.net'],
                // proxy: {
                //   '*': {
                //     target: 'http://localhost:8000',
                //   },
                // },
            },
        }
        : {}),
}
