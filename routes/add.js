const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Kurs qo\'shish',
        isAdd: true
    })
})


// app.post('/add', (req, res) => {
//     res.redirect('/courses')
// })

module.exports = router