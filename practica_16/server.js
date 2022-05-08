var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send(`<html><head><link href=assets/style.css type=text/css rel=stylesheet></head><body><h1>Hello world!</h1></body></html>`);
});

app.get('/person/:id', (req, res) => {
    res.render('person', {ID: req.params.id, Message: req.query.message, Times: req.query.times});
});

app.get('/student', (req, res) => {
    res.render('index');
});

app.post('/student', express.urlencoded({extended: false}) , (req, res) => {
    res.send(`<b>Firs Name es:</b> ${req.body.fname}, <b>Last Name es:</b> ${req.body.lname}`);
});

app.post('/personjson', express.json({type: '*/*'}), (req, res) => { // Del objeto recibido, se toman los datos necesarios y se imprimen en la consola.
    console.log('El objeto contiene: ', (req.body));
    console.log('Nombre: ', req.body.firstname);
    console.log('Apellido: ', req.body.lastname);
});

app.listen(PORT);