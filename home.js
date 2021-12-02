const express = require ('express');

const route = express.Router();



// route.get('/', function (req,res) {
//     res.send('welcome anonymous');

// });
route.get('/', function (req,res) {
    if(req.query.name) res.send(`welcome, ${req.query.name}`);
    else res.send("Welcome, Anonymous")
});


    // const name = req.params.test
    // res.send('welcome to API', req.params.test);
    // res.send("test page")


module.exports = route;