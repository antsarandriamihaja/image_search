const express = require('express');
const path = require('path');
var app = express();
var port = process.env.PORT || 3000;

//config app
app.use(express.static(path.join(__dirname, '../public')));

// app.get('/', (req,res)=>{
//     res.render()
// })

app.listen(port, ()=>{
    console.log(`Server listening on ${port}`);
})