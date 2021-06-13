const express = require('express')
const ejs = require('ejs')
const _ = require('lodash')
const mysql = require('mysql')


const app = express()
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'myLibrary'
})
//////////////////////////////////////////////

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

//////////////////////////////////////////////
let bookEntries = []


connection.connect(function(err) {
    if (err) {
        throw err;
    }

    console.log('connected')
})



app.get('/index', (req, res) => {
    res.render('index',  {
        bookEntries: bookEntries
    })
    console.log('it worked')
})

/*app.get('/index/:entry', (req, res) => {
    let requestTitle = _.lowerCase(req.params.entry)

    bookEntries.forEach(bookEntry => {
        const storedTitle = _.lowerCase(bookEntry.bookTitle)

        if (requestTitle === storedTitle) {
            res.render('post', {
                bookTitle: bookEntry.bookTitle,
                description: bookEntry.description
            })
        }
    })
})*/

app.post('/create', (req, res) => {
    const bookEntry = {
        bookTitle: req.body.bookTitle,
        authorName: req.body.authorName,
        genre: req.body.genre,
        releaseDate: req.body.releaseDate,
        pageCount: req.body.pageCount,
        rating: req.body.rating,
        lang: req.body.lang,
        description: req.body.description
    }
    bookEntries.push(bookEntry)
    res.redirect('/index')
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