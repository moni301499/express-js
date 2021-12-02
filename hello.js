const express = require ('express');

const route = express.Router();

route.get('/', function (req,res) {
    if (req.query.name){
        res.send(`hai ${req.query.name}`);
    }else {
        res.send('welcomee')
    }
});

module.exports=route;
    