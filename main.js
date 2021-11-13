require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')
//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
//importing routes
const postsRouter = require('./routes/fruits')
app.use('/fruits', postsRouter)

//routes
app.get('/', (req,res)=>{
    res.send("homepage")
})

//connecting to DB
mongoose.connect('mongodb://localhost/fruits', ()=>console.log('connected to DB'))


app.listen(PORT, ()=>console.log("server running at port 5000"))