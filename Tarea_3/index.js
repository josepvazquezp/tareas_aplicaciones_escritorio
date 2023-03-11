const express = require('express');
const rutas = require('./rutas');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

const port = 3000;

rutas(app);

app.listen(port, function() {
    console.log('app is running in port ' + port);
});