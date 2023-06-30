const express = require('express');
const app = express();
const { engine } = require('express-handlebars');

const PORT = 3000;

// Motor de plantillas
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Middlewares
app.use(express.static("./www"));
app.use('/bootstrap/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/bootstrap/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));

// Rutas
app.get("/", function (req, res) {
    res.render("home",{ 
            usuario: 'Sixto Guerra', 
            productos: [
                {nombre: 'Banana', file: 'banana.png'},
                {nombre: 'Cebolla', file: 'cebollas.png'},
                {nombre: 'Lechuga', file: 'lechuga.png'},
                {nombre: 'Papa', file: 'papas.png'},
                {nombre: 'Pimenton', file: 'pimenton.png'},
                {nombre: 'Tomate', file: 'tomate.png'}
            ]
        }
    );
});
app.listen(PORT, () => console.log(`Iniciando en el puerto ${PORT}`));
