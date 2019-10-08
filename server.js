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

const server = app.listen(5000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
