const express = require('express');
const app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors');
var cons = require('consolidate');
var path = require('path');

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

//Connecting to pages
app.use(express.static(__dirname + '/public/'));
app.use(cors());

app.get('/', (req, res) => {
    res.render('login', {
        title: 'LogIn'
    });
});

app.get('/index', (req, res) => {
    res.render('index.html', {
        title: 'Index'
    });
});

app.get('/create_question', (req, res) => {
    res.render('create_question.html', {
        title: 'Create Question'
    });
});

app.get('/create_survey', (req, res) => {
    res.render('create_survey.html', {
        title: 'Create Survey'
    });
});

app.get('/fill_survey', (req, res) => {
    res.render('fill_survey.html', {
        title: 'Fill Survey'
    });
});

app.get('/fill_select', (req, res) => {
    res.render('fill_select.html', {
        title: 'Fill Select'
    });
});

app.get('/view_surveys', (req, res) => {
    res.render('view_surveys.html', {
        title: 'View Survey'
    });
});

app.get('/view_records', (req, res) => {
    res.render('view_records.html', {
        title: 'View Records'
    });
});

app.get('/admin_space', (req, res) => {
    res.render('admin_space.html', {
        title: 'Admin Space'
    });
});

app.get('/homepage', (req, res) => {
    res.render('homepage.html', {
        title: 'Home Page'
    });
});

app.get('/help', (req, res) => {
    res.render('help.html', {
        title: 'Help Page'
    });
});

app.get('/about', (req, res) => {
    res.render('about.html', {
        title: 'About Us'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact.html', {
        title: 'Contact Us'
    });
});


const server = app.listen(5000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
