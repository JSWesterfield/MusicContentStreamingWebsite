var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});

// set the weather page route
app.get('/weather', function(req, res) {

    //ejs render automatically looks in the views folder for the weather page
    res.render('weather');
});

// set the weather page route
app.get('/billboard', function(req, res) {

    //ejs render automatically looks in the views folder for the top Billboard 100 page
    res.render('billboard');
});

// set the weather page route
app.get('/blog', function(req, res) {

    //ejs render automatically looks in the views folder for the blog page
    res.render('blog');
});

// set the weather page route
app.get('/flight', function(req, res) {

    //ejs render automatically looks in the views folder for the flight page
    res.render('flight');
});

// set the weather page route
app.get('/contact', function(req, res) {

    //ejs render automatically looks in the views folder for the contact page
    res.render('contact');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port + ' ' + 'press Ctrl + C, to exit/terminate ');
});


