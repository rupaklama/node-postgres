// Configuring pool object to make queries to postgres.
// Tt's call pool because this object has abilities to support pool of queries &
// efficiently execute in timely manner.

const { Pool } = require('pg');

// db credentials in databaseConfiguration file
const databaseConfig = require('./databaseConfig');

// making instance to connect to db
const pool = new Pool(databaseConfig);

module.exports = pool;

// just for debugging to verify the setup
// using query func of pool object to try to get data from monsters table without any errors
// query func takes two params - first, string that represents sql command to retrive/insert data
// Second - param is the callback function

// pool.query('SELECT * FROM monsters', (error, response) => {
//     if (error) return console.log('error', error)

//     console.log('response.rows', response.rows)
// });

// Using nodemon engine, to execute this file 
// run this script - node db db
