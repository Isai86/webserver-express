const express = require('express');
const app = express();

var hbs = require('hbs');
require('./hbs/helpers');


app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {


    res.render('home.hbs', {
        nombre: 'Isai',
    });
});
app.get('/about', (req, res) => {


    res.render('about.hbs', {});
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});