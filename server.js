const express = require('express')//commmonjs
//import exress from 'express' /es module
const app = express()//app express
const port = 3000//port

//khai baos route
app.get('/', (req, res) => {
    res.send('Hello World voi node js')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})