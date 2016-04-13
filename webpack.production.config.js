/**
 * Created by Administrator on 2016/3/29.
 */
// NodeJS中的Path对象，用于处理目录的对象，提高开发效率。
var webpack=require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var TEM_PATH = path.resolve(ROOT_PATH, 'templates');
module.exports = {
    // 入口文件地址，不需要写完，会自动查找
    entry: {
        vendors:['./lib/vue.min','vue-router'],
        app:'./src/main'
    },
    // 输出
    output: {
        path: path.join(__dirname, './dist'),
        // 文件地址，使用绝对路径形式
        filename: '[name].[hash].js'
        //[name]这里是webpack提供的根据路口文件自动生成的名字
        //publicPath: '/dist/'
        // 公共文件生成的地址
    },
    // 加载器
    module: {
        // 加载器
        loaders: [
            // 解析.vue文件
            {
                test: /\.vue$/, 
                loader: 'vue'
            },
            // 转化ES6的语法
            {
                test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/,
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            },
            // 编译css并自动添加css前缀
            {
                test: /\.css$/, 
                loader: 'style!css!autoprefixer'},
            //.scss 文件想要编译，scss就需要这些东西！来编译处理
            //install css-loader style-loader sass-loader node-sass --save-dev
            {
                test: /\.less$/, 
                loader: 'style!css!less?sourceMap'},
            // 图片转化，小于8K自动转化为base64的编码
            {
                test: /\.(png|jpg|gif)$/, 
                loader: 'url-loader?limit=8192'},
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            },
            //html模板编译？
            {test: /\.(html|tpl)$/, loader: 'html-loader'}
        ]
    },
    plugins: [
        //这个使用uglifyJs压缩你的js代码
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        //把入口文件里面的数组打包成verdors.js
        new webpack.optimize.CommonsChunkPlugin({
            name:['vendors'],
            minChunks:Infinity
        }),
        new HtmlwebpackPlugin({
            title: 'QianKun Blog Demo',
            template: path.resolve(TEM_PATH, 'index.html'),
            filename: 'index.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['app', 'vendors'],
            //要把script插入到标签里
            inject: 'body'
        })
    ],
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    }
};