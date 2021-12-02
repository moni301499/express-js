const express = require ('express')

const route = express.Router();

route.post('/new-post', function(req,res) {
    const body = req.body;
    console.log(body);
    res.json({
        status: 'post created',
        caption: body.caption,
        content: body.content,
    })
});

route.post('/sign-up', function(req,res) {
    const body = req.body;
    console.log(body);
    res.json({
        status: 'post created',
        email: body.email,
        password: body.password,
    })
})

module.exports = route;