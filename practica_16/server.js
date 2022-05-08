var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false})); //Es para parsear peticiones con URLencoded payload.
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send(`<html><head><link href=assets/style.css type=text/css rel=stylesheet></head><body><h1>Hello world!</h1></body></html>`);
});

app.get('/person/:id', (req, res) => {
    res.render('person', {ID: req.params.id, Message: req.query.message, Times: req.query.times}); // Envía a person.ejs los valores de ID, Message y Times para que los use.
});

app.get('/student', (req, res) => {
    res.render('index'); //Al entrar a /student, se renderizará index.
});

app.post('/student', express.urlencoded({extended: false}) , (req, res) => {
    res.send(`<b>Firs Name es:</b> ${req.body.fname}, <b>Last Name es:</b> ${req.body.lname}`); //Para hacer el post, toma los datos del formulario y los usa para indicar el nombre y apellido.
});

app.listen(PORT);