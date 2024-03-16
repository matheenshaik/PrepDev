const express = require('express')

const app = express()

const port = process.env.port || 5000

//TEST API - get

app.get('/', (req, res)=>{
    res.send('response done')

})


app.listen(port, ()=> {console.log(`server running on ${port}`)})