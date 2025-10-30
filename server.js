const express = require('express')
const path = require('path')
const Seguridad =  require('./seguridad.js')
//const Modelo = require('./modelo.js')

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



app.get('/', (req, res)=>{
    //res.send(`<p>Respondiendo desde puerto ${PORT}`)
    res.render('index.ejs',{url: _url})
})

//------------------------MENU----------------------------
app.post('/menu', (req, res)=>{
    const {user, pass} = req.body;

    if (Seguridad.validacionUser({user, pass}).success) {
        res.render('menu.ejs', {
            url: "http://localhost:3000"
        });
    } else {
        res.send(`
            <h2>Usuario, contraseña incorrectos</h2>
            <a href="/">Volver al login</a>
        `);
    }
})



const PORT = 3000;
app.listen(PORT, ()=>{console.log(`Escuchando en puerto ${3000}`)})