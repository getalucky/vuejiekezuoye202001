
module.exports = {

    // 已省略其他配置项

    devServer: {

        proxy: {
            '/xinwen': {                                // 要代理的接口名
                target: 'http://v.juhe.cn/toutiao/index',   // 要代理的接口地址
                changeOrigin: true,                            // 允许跨域
                pathRewrite: { '^/xinwen': '' }            // 接口名重写
            },
            '/youjia': {                                // 要代理的接口名
                target: 'http://apis.juhe.cn/gnyj/query',   // 要代理的接口地址
                changeOrigin: true,                            // 允许跨域
                pathRewrite: { '^/youjia': '' }            // 接口名重写
            },
            '/tianqi': {                                // 要代理的接口名
                target: 'http://apis.juhe.cn/simpleWeather/query',   // 要代理的接口地址
                changeOrigin: true,                            // 允许跨域
                pathRewrite: { '^/tianqi': '' }            // 接口名重写
            }

        }

    }



}