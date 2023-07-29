const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/MyCart',  {useNewUrlParser : true})
mongoose.connect('mongodb://localhost:27017/MyCart',  {useNewUrlParser : true})


const db  =  mongoose.connection;

db.on('error'  , ()=>{
    console.log("Something went worng during DB connection")
})

db.once('open' , ()=>{
    console.log("Successfully Connected with Mongo DB")
})

module.exports =  db;

