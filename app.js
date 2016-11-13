const server = require('../expressServer/server');
let serverConfig = {
    port: 8080,
    address: 'lightControl',
    projectAddress: __dirname,
    routes: [
        {
            name: 'home',
            method: 'GET',
            address: '/',
            response: 'index.html'
        }
    ]
};
server.start(serverConfig);
