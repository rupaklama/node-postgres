const pool = require('../db/index');
const { response } = require('express');

module.exports = app => {
    app.get('/monsters', (req, res, next) => {
        // from monsters table, order by id & display in ascending order
        pool.query('SELECT * FROM monsters ORDER BY id ASC', (error, response) => {
    
            // if (error) return error(error)
    
            // next - pass it on to the error handler middleware
            if (error) return next(error)
            res.json(response.rows)
        });
    });
    
    // query by id
    app.get('/monsters/:id', (req, res, next) => {
        // id is store in the req object, specifically in the params field
        const { id } = req.params;
    
        // Parameters passed to functions are named with the identifiers/query strings $1, $2, etc.
        // $1 and $2 are not variables. They are being used as placeholders in the string.
        // $1 references the first parameter passed to the function, $2 would refer to the second and so on.
        // Passing our id into array, now our id variable since it's first param, it's going to be inserted as 
        // $1 into our query string
        pool.query('SELECT * FROM monsters WHERE id = $1', 
            [id], (error, response) => {
            if (error) return next(error)
            res.json(response.rows)
        });
    })

    // post method
    app.post('/', (req, res, next) => {
        const {name, personality } = req.body;

        // adding data in monsters table
        // since our values are store in two variables, will use placeholders for both
        pool.query(
            'INSERT INTO monsters(name, personality) VALUES($1, $2)',
            [name, personality],
            (error, response) => {
              if (error) return next(error);
        
              res.redirect('/monsters');
            }
          );
    });

    // put method
    app.put('/monsters/:id', (req, res, next) => {
        const { id } = req.params;
        const { name, personality } = req.body;

        // patch method to update fields
        const keys = ['name', 'personality'];
        const fields = [];
        
        // check to see if the key exists in body
        keys.forEach(key => {
            if (req.body[key]) fields.push(key)
        });

        fields.forEach((field, index) => {
            pool.query(
                // updating for patch method also
                // 'UPDATE monsters SET name=($1), personality=($2) WHERE id=($3)',
                `UPDATE monsters SET ${field}=($1) WHERE id=($2)`,
                // [name, personality, id],
                [req.body[field], id],
                (error, response) => {
                    if (error) return next(error);
                    if (index === fields.length - 1) res.redirect('/monsters');
                }
            )
        });
    })


    // delete method
    app.delete('/monsters/:id', (req, res, next) => {
        const { id } = req.params;
      
        pool.query('DELETE FROM monsters WHERE id=($1)', [id], (err, response) => {
          if (err) return next(err);
      
          res.redirect('/monsters');
        });
      });


}
          
            