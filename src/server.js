const express = require('express')//commmonjs
//import exress from 'express' /es module
//const path = require('path');
const app = express()//app express
const port = 8082//port

//config template engine
//app.set('views', './src/views') dòng bên dưới không dùng /src vì file serverjs khong nằm 
//ngoài thư mục backend mà đã chuyển vào trong thư mục con của backend là TM src
app.set('views', './src/views');
app.set('view engine', 'ejs')

//khai báo route
app.get('/', (req, res) => {
    res.send('node js trong server js !')
})
app.get('/Ai', (req, res) => {
    //res.send('check abc !')
    res.render('sample.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})