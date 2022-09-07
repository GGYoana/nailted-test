const express = require('express');
const session = require("express-session");
// initializations
const app = express();
require('dotenv').config();

require("./lib/passport");


// settings
const port = process.env.PORT || 3001;
  // motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use(express.json());
app.use(express.urlencoded({ extended: false  }));

// Middelware
//app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"))

app.use(session({
  secret: "123456",
  resave: true,
  saveUninitialized: true
}));

// Global variables


// Rutas web
app.get('/', function(req, res) { 
  res.redirect('/usuarios');
});
app.use('/usuarios', require('./router/rutasUsuarios'));

// 404 
app.use((req, res, next) => {
  res.status(404).render("404",{titulo:'404',descripcion:'No se encontró el sitio'})
})


//Public

//Starting the server
app.listen(port, () => {
  console.log(`La aplicación está escuchando en la url: http://localhost:${port}`)
})

