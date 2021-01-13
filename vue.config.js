
module.exports = {

    // 已省略其他配置项

    devServer: {

        proxy: {
            '/xinwen': {                                // 要代理的接口名
                target: 'http://v.juhe.cn/toutiao/index',   // 要代理的接口地址
                changeOrigin: true,                            // 允许跨域
                pathRewrite: { '^/xinwen': '' }            // 接口名重写
            }

        }

    }



}