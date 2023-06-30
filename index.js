const express = require('express');
const app = express();
const { engine } = require('express-handlebars');

const PORT = 3000;

// DATOS DE ENTRADA

const productos = [
    {nombre: 'Banana', file: 'banana.png'},
    {nombre: 'Cebolla', file: 'cebolla.png'},
    {nombre: 'Lechuga', file: 'lechuga.png'},
    {nombre: 'Papa', file: 'papas.png'},
    {nombre: 'Pimenton', file: 'pimenton.png'},
    {nombre: 'Tomate', file: 'tomate.png'}
];

function list_products() {
    return productos;
};

// 


// Motor de plantillas
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Middlewares
app.use('/bootstrap/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/bootstrap/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
// Jquery
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));



// Rutas
app.get("/", function (req, res) {
    res.render("home");
});
app.listen(PORT, () => console.log(`Iniciando en el puerto ${PORT}`));


console.log(list_products())