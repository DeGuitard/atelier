var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();

app.use(express.static('../client/public'));
app.use(expressLayouts);

app.set('views', '../client/views');
app.set('view engine', 'ejs');

// Registering views
app.get('/',                        function(req, res) { res.render('index',                    { page: 'index', title: 'Le gîte à Landévennec' }); });
app.get('/le-gite',                 function(req, res) { res.render('le-gite',                  { page: 'gite', title: 'Le gîte à Landévennec' }); });
app.get('/landevennec',             function(req, res) { res.render('landevennec',              { page: 'land', title: 'Landévennec' }); });
app.get('/presqu-ile-crozon',       function(req, res) { res.render('presqu-ile-crozon',        { page: 'pres', title: 'La Presqu\'île de Crozon' }); });
app.get('/naissance-cabane',        function(req, res) { res.render('naissance-cabane',         { page: 'caba', title: 'Naissance d\'une cabane' }); });
app.get('/calendrier-reservation',  function(req, res) { res.render('calendrier-reservation',   { page: 'cale', title: 'Calendrier des réservations' }); });
app.get('/reserver',                function(req, res) { res.render('reserver',                 { page: 'book', title: 'Réserver' }); });
app.get('/contact',                 function(req, res) { res.render('contact',                  { page: 'cont', title: 'Contact' }); });

app.listen(6700, function () {
    console.log('Listening on port 6700.');
});