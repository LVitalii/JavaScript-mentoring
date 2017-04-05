const path = require('path');
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry  : './init.js',
    output : {
        path     : path.resolve(__dirname, 'built'),
        filename : 'bundle.js'
    },
    resolve: {
        extensions: ['.js']
    },
    watch: false
};
