const path = require('path')    // 引入path模块
const htmlWebpackPlugin = require('html-webpack-plugin')    // 配置生成预览也的配置项

const htmlPlugin = new htmlWebpackPlugin({  // 创建一个在内存中生成html页面的插件，生成实例对象
    template: path.join(__dirname, './src/index.html'), // 指定模板文件路径
    filename: 'index.html' // 指定生成文件的名称，该文件存在内存中，不在目录中显示
})

module.exports = {
    mode: 'development', // mode 用来指定构建模式
    entry: path.join(__dirname, './src/index.js'), // 指定入口文件
    output: {
        path: path.join(__dirname, './dist'), // 指定输出路径
        filename: 'bundle.js' // 指定输出文件名
    },
    plugins: [htmlPlugin]    // plugin 用来配置 webpack 打包时会用到的一些插件
}

