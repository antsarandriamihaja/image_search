const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const hbs = require('hbs');
var app = express();
var port = process.env.PORT || 3000;

//config app
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'hbs');

app.get('/', (req,res)=>{
    res.render(path.join(__dirname, '../index.hbs'));
});

app.post('/search/image', (req, res) =>{
    var url = req.body.url;
    res.send(url);
})


app.listen(port, ()=>{
    console.log(`Server listening on ${port}`);
})