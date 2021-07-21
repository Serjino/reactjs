// const clientConfig = require('../cfg/webpack.client.config');
const serverConfig = require('../cfg/webpack.server.config');
const clientConfigDevHot = require('../cfg/webpack.client.config.DEV');

module.exports = [
    serverConfig,
    clientConfigDevHot
]