/* eslint-disable */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        //host: 'localhost',
        host: process.env.NODE_ENV !== 'production' ? 'localhost': '0.0.0.0',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);
    
    // const response = h.response({ error: false, message:  'Catatan berhasil ditambahkan'});
    // response.header('Access-Control-Allow-Origin','http://notesapp-v1.dicodingacademy.com');
    // return response;

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
    
};

init();