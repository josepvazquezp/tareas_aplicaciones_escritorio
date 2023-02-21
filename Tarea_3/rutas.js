const path = require('path');
const express = require('express');

function cargarHome(req, res) {
    console.log('inicio');
    res.sendFile(path.join(__dirname, 'views', 'inicio.html'));
}

module.exports = function(app) {
    app.use('/assets', express.static(path.join(__dirname, 'assets')));

    app.get('/bandas', function(req, res) {
        console.log('bandas');
        res.sendFile(path.join(__dirname, 'views', 'bandas.html'));
    });

    app.get('/proyectos', function(req, res) {
        console.log('proyectos');
        res.sendFile(path.join(__dirname, 'views', 'proyectos.html'));
    });

    app.get('/hobbies', function(req, res) {
        console.log('hobbies');
        res.sendFile(path.join(__dirname, 'views', 'hobbies.html'));
    });

    app.get('/', cargarHome);
    
    app.get('*', function(req, res) {
        res.status(404).sendFile(path.join(__dirname, 'views', 'not_found.html'));;
    });
}