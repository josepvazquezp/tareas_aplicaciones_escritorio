const path = require('path');
const express = require('express');

function cargarHome(req, res) {
    console.log('inicio');
    res.render('inicio', {
        titulo: 'Presentación'
    });
}

module.exports = function(app) {
    app.use('/assets', express.static(path.join(__dirname, 'assets')));

    app.get('/bandas', function(req, res) {
        console.log('bandas');
        res.render('bandas', {
            titulo: 'Bandas'
        });
    });

    app.get('/proyectos', function(req, res) {
        console.log('proyectos');
        res.render('proyectos', {
            titulo: 'Proyectos'
        });
    });

    app.get('/hobbies', function(req, res) {
        console.log('hobbies');
        res.render('hobbies', {
            titulo: 'Hobbies'
        });
    });

    app.get('/', cargarHome);
    
    app.get('*', function(req, res) {
        res.status(404).sendFile(path.join(__dirname, 'src','views', 'not_found.html'));
    });
}