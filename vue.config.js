
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                'utils': '@/utils',
                'icons': '@/icons'
            }
        }
    },
    devServer: {
        proxy: 'http://localhost:3000',
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
        // },
        // hotOnly:false,
        // disableHostCheck: true
    }
}
// module.exports = {
//     //publicPath:'./',
//     devServer: {
//         proxy: 'http://localhost:3000'
//     }
//     // devServer: {
//     //     proxy: {
//     //       '/api': {
//     //         target: 'http://172.17.7.229',
//     //         changeOrigin: true,
//     //         pathRewrite:{
//     //             '^/api':''
//     //         }
//     //       }
//     //     }
//     //   }
// }