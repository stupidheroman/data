const express = require('express')
const exphbs = require('express-handlebars')
const compression = require('compression')
const { v4: uuidv4 } = require('uuid')
// const path = require('path')
const app = express()

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Bosh sahifa',
        isIndex: true
    })
})

app.get('/news', (req, res) => {
    res.render('news', {
        title: 'Yangiliklar',
        isNews: true,
        link: uuidv4()
    })
})

app.get('/courses', (req, res) => {
    res.render('courses', {
        title: 'Kurslar',
        isCourses: true
    })
})

app.get('/add', (req, res) => {
    res.render('add', {
        title: 'Kurs qo\'shish',
        isAdd: true
    })
})

app.post('/add', (req, res) => {
    res.redirect('/courses')
})




// Settings Handlebars
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
app.set('view engine', 'hbs')
app.engine('hbs', hbs.engine)

app.use(compression())

// Static files
app.use(express.static('public/css'))
app.use(express.static('public/images'))

const port = 3000
app.listen(port, () => {
    console.log("Server ishga tushdi...")
})