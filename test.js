const modelo = require('./modelo');
const Controlador = require('./controlador.js');
const Seguridad = require('./seguridad.js');
const express = require('express');
const path = require('path');

console.log(modelo.getUsuarios());