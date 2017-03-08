const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const node_path = path.join(__dirname, 'node_modules');

const css_loader = ExtractTextPlugin.extract('style', 'css?sourceMap');
const less_loader = ExtractTextPlugin.extract('style', 'css?sourceMap!less?sourceMap=source-map-less-inline');
const handlebars_helpers = path.join(__dirname, 'js', 'templates', 'helpers');
const hbs_loader = `handlebars?helperDirs[]=${handlebars_helpers}`;

const languages = ['en', 'es', 'fr'];

module.exports = {
    entry: {
        admin: './js/admin.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: 'chunks/[id].[hash].js'
    },
    resolve: {
        root: [
            __dirname,
            path.join(__dirname, 'js'),
        ],
        alias: {
            'jquery-slimscroll': path.join(node_path, 'jquery-slimscroll/jquery.slimscroll'),
            'handlebars': 'handlebars/runtime',
            'swaggerui': 'swagger-ui/dist',
        }
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {test: /\.(jpg|jpeg|png|gif|svg)$/, loader: 'file-loader'},
            {test: /\.css$/, loader: css_loader},
            {test: /\.less$/, loader: less_loader},
            {test: /\.vue$/, loader: 'vue-loader'},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.hbs$/, loader: hbs_loader},
            {test: /\.(woff|svg|ttf|eot|otf)([\?]?.*)$/, exclude: /img/, loader: 'file-loader?name=[name].[ext]'},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        ]
    },
    vue: {
        loaders: {
            css: css_loader,
            less: less_loader,
            js: 'babel-loader'
        }
    },
    babel: {
        presets: ['es2015'],
        comments: false,
        plugins: ['transform-runtime']
    },
    // Store initial values for easier inheritance
    defaults: {
        hbs_loader,
        languages,
    },
    plugins: [
        // Fix AdminLTE packaging
        new webpack.NormalModuleReplacementPlugin(
            /admin-lte\/build\/img\/boxed-bg\.jpg$/,
            'admin-lte/dist/img/boxed-bg.jpg'
        ),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',  // Required by bootstrap.js
            'window.jQuery': 'jquery',  // Required by swagger.js jquery client
        }),
        new ExtractTextPlugin('[name].css'),
        // Only include needed translations
        new webpack.ContextReplacementPlugin(/moment\/locale$/, new RegExp('^' + languages.join('|') + '$')),
        new webpack.ContextReplacementPlugin(/locales$/, new RegExp(languages.join('|'))),
    ]
};
