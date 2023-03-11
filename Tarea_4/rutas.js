const path = require('path');
const express = require('express');
const axios = require('axios');

module.exports = function(app) {
    app.use('/assets', express.static(path.join(__dirname, 'assets')));

    app.get('/', function(req, res) {
       res.render('home'); 
    });

    app.get('/search', function(req, res) {
        let url = 'https://newsapi.org/v2/everything?' +
                  'q=' + req.query.input + '&' +
                  'apiKey=8577319d61894cbd934b74fc1978f12f';
                  
        axios.get(url)
        .then(function(results) {
            res.render('noticia', {
                article: results.data.articles});
        })
        .catch();
        
    });
    
    app.get('*', function(req, res) {
        res.status(404);
    });
}