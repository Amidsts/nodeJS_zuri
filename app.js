const express = require('express') ;
const ejs = require('ejs') ;
const bodyParser = require('body-parser') ;
const app = express() ;

app.set('view engine', 'ejs') ;
app.use(express.static('public')) ;
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

const info =  {
    name: 'Ameedat',
    country: 'Nigeria',
    hobby: 'Reading' ,
}

app.get("/", (req, res) => {
    res.render('index') ;
}) ;
app.get('/json', (req, res) => {
    res.render('partials/json')
}) ;
app.listen(3000, () => {
    console.log('server is up and running') ;
}) ;