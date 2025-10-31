const express = require('express')
const path = require('path')
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

const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send(`<p>Respondiendo desde puerto ${port}`)
    //res.render('index.ejs',{url: _url})
})




app.listen(port, ()=>{console.log(`Escuchando en puerto ${port}`)})
