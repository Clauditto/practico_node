const express = require('express');
const app = express();
const { engine } = require('express-handlebars');

const PORT = 3000;

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
app.listen(PORT, () => console.log(`Inicindo en el puerto ${PORT}`));