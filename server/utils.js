const config = require('../config.js');
const getJSON = require('get-json');
var generateAPI_URL = (query) =>{
     var URL = 'https://www.googleapis.com/customsearch/v1?key='+ config.api + '&cx='+config.engineID+'&searchType=image&startIndex=41&imgType=photo&q=' + query;
    return URL
}

var generateList = (url, callback) => {
    console.log(url);
    getJSON(url, (error, response) => { 
        var list = [];
        if (error) { console.log(error) };
        for (var i = 0; i < 10; i++) {
            result = {};
            result.url = (response.items[i].link);
            result.snippet = response.items[i].snippet;
            result.context = (response.items[i].image.contextLink);
            result.thumbnail = (response.items[i].image.thumbnailLink);
            list.push(result);
        } 
        callback(list)
        })
}

module.exports = {generateAPI_URL, generateList};