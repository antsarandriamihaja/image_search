const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const hbs = require('hbs');
var app = express();
var port = process.env.PORT || 3000;

//config app
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'hbs');

app.get('/', (req,res)=>{
    console.log('get running');
    res.render(path.join(__dirname, '../index.hbs'));
});

app.post('/api/imagesearch', (req, res) =>{
    var query = req.body.url;
    res.send({"query":query});
})


app.listen(port, ()=>{
    console.log(`Server listening on ${port}`);
})