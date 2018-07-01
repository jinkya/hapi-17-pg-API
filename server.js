'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const { Pool, Client } = require('pg');

const Routes = require('./routes/dog.routes');
const ENV = require('./env/env');

const connectionString = ENV.pgURL;

const pool = new Pool({ connectionString: connectionString })

const server = new Hapi.Server({
  port: ENV.SERVERCONFIG.SERVERPORT,
  host: ENV.SERVERCONFIG.SERVERHOST
});

const swaggerOptions = { info: { title: 'Hapiv17 node postgres API Documentation'}};

const init = async() => {
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

  server.route(Routes);

  await server.start();

  pool.on('error', (err, client) => {
     console.error('Unexpected error on idle client', err)
     process.exit(-1)
  });
  console.log('Postgres running on '+connectionString);

  return server;

};

init().then(server => {
  console.log('Server running at:', server.info.uri);
}).catch(err => {
  console.log(err);
});