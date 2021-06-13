const express = require('express')
const ejs = require('ejs')
const _ = require('lodash')

const app = express()

//////////////////////////////////////////////

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

//////////////////////////////////////////////

app.get('/', (req, res) => {
    res.render('index.ejs', {root: __dirname})
})

app.get('/create', (req, res) => {
    res.render('create.ejs', {root: __dirname})
})

app.get('/request', (req, res) => {
    res.render('request.ejs', {root: __dirname})
})

app.get('/sign_in', (req, res) => {
    res.render('sign_in.ejs', {root: __dirname})
})

app.get('/quotes', (req, res) => {
    res.render('quotes.ejs', {root: __dirname})
})

app.listen(8000, () => {
    console.log('Listening on port 8000')
})