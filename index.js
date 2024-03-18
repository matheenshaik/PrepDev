const express = require('express')
const router = require('./routes/route')
const app = express()
const mongoose = require('mongoose')

const port = process.env.port || 5000

app.use(express.json())

//DB
mongoose.connect("mongodb+srv://matheenahamad:9TNGWEhzUB0Ttemi@matheen.vtdepfw.mongodb.net/pre-data")
.then(()=> console.log('Db conncted'))
.catch((err) => console.log(err))

app.use("/", router)


app.listen(port, ()=> {console.log(`server running on ${port}`)})


//https://www.overleaf.com/project/65f818fbffe075f5d5cb7b36