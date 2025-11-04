const express = require('express')
const path = require('path')
const Seguridad =  require('./seguridad.js')
const Modelo = require('./modelo.js')
const Controlador = require('./controlador.js');

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static('public'))
app.set('view engine','ejs');

// Agregado para direccionar el servidor---------------
var estaUrl = path.join(__dirname);

let produccion = false
if(estaUrl[0] == "C" && estaUrl[1] == ":"){
    produccion = false;
}else{
    produccion = true;
}

if(produccion){
    _url = "https://"+process.env.RAILWAY_PUBLIC_DOMAIN+"/";
}else{
    _url = "http://localhost:3000/";
}
console.log("produccion")
console.log(produccion)
console.log("_url")
console.log(_url)

//-------------------------------------------------------

const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    //res.send(`<p>Respondiendo desde puerto ${port}`)
    res.render('index.ejs',{url: _url})
})

//------------------------MENU----------------------------
app.post('/menu', (req, res) => {
  const { user, pass } = req.body;

  if (Seguridad.validacionUser({ user, pass }).success) {
    // Si el usuario es admin, va a su propio menú
    if (user === "admin") {
      res.render('menuAdmin.ejs', { url: _url });
    } else {
      res.render('menu.ejs', { url: _url });
    }
  } else {
    res.send(`
      <h2>Usuario o contraseña incorrectos</h2>
      <a href='${_url}'>Volver al login</a>
    `);
  }
});
app.get('/menuadmin', (req, res) => {
  res.render('menuAdmin.ejs', { url: _url });
});


//-------------------------------------------------------
// NUEVO USUARIO
//-------------------------------------------------------

app.get('/nuevousuario', (req, res) => {
  const token = Seguridad.getToken(); // genera el token
  res.render('nuevousuario.ejs', { url: _url, token });
});
app.post('/nuevousuario', (req, res) => {
  Controlador.nuevoUsuario(req, res);
});



app.listen(port, ()=>{console.log(`Escuchando en puerto ${port}`)})
