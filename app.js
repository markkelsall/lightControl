const server = require('../expressServer/server');
let serverConfig = {
    port: 8080,
    address: 'lightControl'
};
server.start(serverConfig);
