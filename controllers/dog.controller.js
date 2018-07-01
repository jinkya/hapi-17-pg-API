const QRY =  require('../queries/dog.query');
const ENV = require('../env/env');

const { Pool, Client } = require('pg');
const connectionString = ENV.pgURL;
const pool = new Pool({
  connectionString: connectionString,
})

/**
 * List Dogs
 */

exports.list = (req, h) => {
  return (async () => {
                const client = await pool.connect();
                try {
                  const res = await client.query(QRY.query0);
                  console.log(res);
                  return { rowCount: res.rowCount, dogs: res.rows };
                } finally {
                  client.release();
                }
          })().catch(e => console.log(e.stack))
}

/**
 * Get Dog by ID
 */

exports.get = (req, h) => {
  return (async () => {
                const client = await pool.connect()
                try {
                  const res = await client.query(QRY.query1, [req.params.id]);
                  console.log(res);
                  return { rowCount: res.rowCount, dogs: res.rows };
                } finally {
                  client.release();
                }
          })().catch(e => console.log(e.stack))
}

/**
 * POST a Dog
 */
exports.create = (req, h) => {
  const dogData = [
    id     = req.payload.id,
    name   = req.payload.name,
    breed  = req.payload.breed,
    age    = req.payload.age,
  ];

  return (async () => {
                const client = await pool.connect()
                try {
                  const res = await client.query(QRY.query2, dogData);
                  console.log(res);
                  return res;
                } finally {
                  client.release();
                }
          })().catch(e => console.log(e.stack))
}

/**
 * PUT | Update Dog by ID
 */

exports.update = (req, h) => {
  console.log(req.params.id);

    return (async () => {
                const client = await pool.connect()
                try {
                  const res = await client.query(QRY.query4, [req.params.id]);
                  console.log(res);
                  return res;
                } finally {
                  client.release();
                }
          })().catch(e => console.log(e.stack))

}

/**
 * Delete Dog by ID
 */
exports.remove = (req, h) => {
  return (async () => {
                const client = await pool.connect()
                try {
                  const res = await client.query(QRY.query3, [req.params.id, req.payload.id, req.payload.name,req.payload.breed,req.payload.age] );
                  console.log(res);
                  return res;
                } finally {
                  client.release();
                }
          })().catch(e => console.log(e.stack))
}