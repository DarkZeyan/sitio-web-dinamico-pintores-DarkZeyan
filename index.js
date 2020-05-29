//Se importan las librerias requeridas
const express = require('express');
const hbs = require('hbs');
//Se crea la app
const app = express();

//Emplear modelo Vista controlador
app.set('view engine','hbs');
//Generar partials
hbs.registerPartials(__dirname + '/views/partials/');

//Generar sitio estatico
app.use(express.static(__dirname + '/public'));
//Configurar rutas
app.get('/', (req, res)=>{
        res.render('index',
            {
                nombre : "Jorge Eduardo Escobar Bugarini",
                grupo : "4° E",
                year : new Date().getFullYear(),
                titulo : "Pagina Principal",
            });
})
app.get('/davinci', (req, res)=>{
    res.render('davinci' ,
        {
            nombre : "Jorge Eduardo Escobar Bugarini",
            grupo : "4° E",
            year : new Date().getFullYear(),
            titulo : "Leonardo da Vinci"
        });
})
app.get('/vangogh', (req, res)=>{
    res.render('vangogh' ,
        {
            nombre : "Jorge Eduardo Escobar Bugarini",
            grupo : "4° E",
            year : new Date().getFullYear(),
            titulo : "Vincent van Gogh"
        });
})
app.get('/velazquez', (req, res)=>{
    res.render('velazquez',
        {
            nombre : "Jorge Eduardo Escobar Bugarini",
            grupo : "4° E",
            year : new Date().getFullYear(),
            titulo : "Diego Velazquez"
        });
});
app.get('/picasso', (req, res)=>{
    res.render('picasso',
        {
            nombre : "Jorge Eduardo Escobar Bugarini",
            grupo : "4° E",
            year : new Date().getFullYear(),
            titulo : "Pablo Picasso"
        } )
})
app.get('/datos', (req,res)=>{
    res.render('datos',{
        nombre : "Jorge Eduardo Escobar Bugarini",
        docente: "Raul Toledo",
        grupo : "4° E",
        titulo : "Datos del Alumno",
        fecha: new Date(Date.now()),
        fechaCreacion: new Date(2020,5,29,3,40)
    })
})
//Se arranca sv web
app.listen(3000,()=>{
    console.log('Escuchando el puerto 3000');
})