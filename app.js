const express = require('express')
const homeRoute = require('./home');
const helloRoute = require('./hello');
const travelRoute = require('./travel');
const userRoute = require('./user')

// helloRoute.use(middleware)

const port=3007;

const app= express()
app.use(express.json());


function middleware( req,res, next){
    const name=req.params.name
    const day=new Date();
    const currentday=day.toString()
    console.log(`day=${currentday}`)
    console.log('LOG:' + req.originalUrl + " " + 'called by' + `${name}`);
    next();
}


app.get('/', (req,res)=> {
    res.send('welcome to my API')
})

app.use('/home', homeRoute)
app.use ('/hello/:name', middleware,helloRoute)    
app.use( '/travel', travelRoute)
app.use('/user', userRoute)


app.listen( port, () =>{
    console.log('server started on port',port)
})  

