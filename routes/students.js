const {Router} = require('express')
const router = Router()
const faker = require('faker')
const Course = require('../models/course')

router.get('/', async (req,res) => {
    const courses = await Course.getAll()
    res.render('students', {
        title: 'Yangiliklar',
        isStudents: true,
        courses
    })
})

module.exports = router