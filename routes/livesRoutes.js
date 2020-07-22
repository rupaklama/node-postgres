const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/', (request, response, next) => {
  pool.query('SELECT * FROM lives', (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});

// A foreign key relationship could be one-to-one (a record in one table is linked to one and only one record in another table) 
// or one-to-many (a record in one table is linked to multiple records in another table).
// one to one, monster can live only in one habitat
router.get('/conditions', (request, response, next) => {
  pool.query(
      // Joining two tables together
    'SELECT * FROM lives JOIN habitats ON habitats.name = lives.habitat',
    (err, res) => {
      if (err) return next(err);

      response.json(res.rows);
    }
  )
});

module.exports = router;