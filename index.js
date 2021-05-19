const express = require('express')
const exphbs = require('express-handlebars')
const compression = require('compression')
// const { v4: uuidv4 } = require('uuid')
// const path = require('path')
const app = express()

app.use(express.urlencoded({extended: true}))
// Routes
const homeRoutes = require('./routes/home')
const studentsRoutes = require('./routes/students')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/courses')
const addStudentRoutes = require('./routes/addStudent')
app.use('/', homeRoutes)
app.use('/students', studentsRoutes)
app.use('/add', addRoutes)
app.use('/courses', coursesRoutes)
app.use('/addStudent', addStudentRoutes)



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