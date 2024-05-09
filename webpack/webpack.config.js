const path = require('path')    // 引入path模块

module.exports = {
    mode: 'development', // mode 用来指定构建模式
    entry: path.join(__dirname, './src/index.js'), // 指定入口文件
    output: {
        path: path.resolve(__dirname, './dist'), // 指定输出路径
        filename: 'bundle.js' // 指定输出文件名
    }
}