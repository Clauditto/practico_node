const express = require("express");
const app = express();
const { engine } = require("express-handlebars");

const PORT = 3000;

// Motor de plantillas
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Middlewares
//Disponibiliza todas las archivos y carpetas de la carpeta WWW
app.use(express.static("./www"));

app.use(
  "/bootstrap/css",
  express.static(__dirname + "/node_modules/bootstrap/dist/css")
);
app.use(
  "/bootstrap/js",
  express.static(__dirname + "/node_modules/bootstrap/dist/js")
);
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));

// Rutas
app.get('/', function (req, res) {
    res.render("home");
})

//Renderizamos la vista home y le pasamos un objeto con una llave Usuario y una llave Producto
app.get("/:usuario", function (req, res) {
  res.render("home", {
    usuario: req.params.usuario,
    productos: [
      { nombre: "Banana", file: "banana.png" },
      { nombre: "Cebolla", file: "cebollas.png" },
      { nombre: "Lechuga", file: "lechuga.png" },
      { nombre: "Papa", file: "papas.png" },
      { nombre: "Pimenton", file: "pimenton.png" },
      { nombre: "Tomate", file: "tomate.png" },
    ],
  });
});

app.get("*", (req, res) => {
  res
    .status(404)
    .send("<center><h1>Sorry, aquí no hay nada :/ </h1> </center>");
});

app.listen(PORT, () => console.log(`Iniciando en el puerto ${PORT}`));
