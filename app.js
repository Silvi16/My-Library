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

app.listen(8000, () => {
    console.log('Listening on port 8000')
})