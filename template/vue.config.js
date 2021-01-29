const pxtorem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');
module.exports = {
    outputDir: 'dist',
    publicPath: process.env.NODE_ENV === 'production' ? '/sample/' : '/',
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 37.5,
                        propList: ['*']
                    })
                ]
            }
        }
    }
};
