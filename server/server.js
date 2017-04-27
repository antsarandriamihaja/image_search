const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const config = require('../config');
const getJSON = require('get-json');
const {generateAPI_URL, generateList} = require('./utils.js');
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
    var URL = generateAPI_URL(query);
    var list = generateList(URL, (list) => {
        console.log(list);
        res.send(list);
    });
})

app.listen(port, ()=>{
    console.log(`Server listening on ${port}`);
})