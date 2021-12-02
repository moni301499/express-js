const express = require ('express')

const route = express.Router();

// route.get('/:from',function(req,res){
//     const yoga = req.params.from;
//         res.json({
//             location: yoga,
            
//         });
// })

// route.get('/:from-:to',function(req,res){
//     const city1 = req.params.from;
//     const city2 = req.params.to;

//         res.json({
//             start: city1,
//             end: city2,
            
//         });
// })

// route.get('/',function(req,res){
//     const from = req.query.from;
//     const to = req.query.to
//     if(from){
//         res.json({
//             starting: from,
//             destination: to,
            
//         });
//     } else{
//         res.status(404).json({
//             error: 'enter starting or destination city'
//         })
//     }
// })


route.get('/:user', function (req,res) {
    const user = req.params.user;
    res.send(user + 'travel');

})

route.get('./:user1-:user2', function (req,res) {
    const user1 = req.params.user1;
    const user2= req.params.user2;
    res.send(user1 + '  ' + user2 + 'travel');
})

route.post('/create-post', function(req,res) {
    const body = req.body;
    console.log(body);
    res.json({
        status: 'post created',
        title: body.title,
        content: body.content,
    })
})






module.exports = route;