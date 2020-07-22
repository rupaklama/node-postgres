const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// setup body parser middleware 
// anytime incoming requests occurs, 
// this middleware parse the body & assigns the json data to the req.body property 
// before sending to the request handlers
app.use(bodyParser.json());  // note - it needs to be before routes

// First set of () here is the require statement which returns a function 
// Second set of () added in to immediately invoke that function,
// which calls with app object here

// import monsters routes
// monsters file which returns a function
require('./routes/monsterRoutes') (app);

// use it after app.get methods ( after requiring routes) 
// error handling with middleware
// next func - sending data around through middleware, pass it on to next step
app.use((err, req, res, next) => {
    res.json(err)
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));