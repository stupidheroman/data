const {Router} = require('express')
const router = Router()
const Course = require('../models/course')

router.get('/', (req, res) => {
    res.render('addStudent', {
        title: 'O\'quvchi qo\'shish',
        isAddStudent: true
    })
})

router.post('/', (req, res) => {
    const course = new Course(req.body.fullname, req.body.age, req.body.job)
    course.save()
    res.redirect('/students')
})

module.exports = router