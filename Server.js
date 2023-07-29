const express = require('express');
const app  =  express();
const PORT  =  8765;
const Routes  =  require('./Routes/Routes')
const bodyParser  = require('body-parser')
const db =  require('./DB/db')



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended  : true}))
app.use('/' ,  Routes)




app.listen( PORT ,  ()=>{
    console.log(`Server is Running on PORT : ${PORT}`)
})








