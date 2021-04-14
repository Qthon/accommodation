const path = require('path')
// 获取绝对路径
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            // set第一个参数：设置的别名，第二个参数：设置的路径 [store 和 router 没必要配置]
            .set('@', resolve('./src'))
    },
    devServer: {
        port: 8010 // 此处修改你想要的端口号

    }
}