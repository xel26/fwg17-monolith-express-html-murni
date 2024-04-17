const router = require('express').Router()

router.get('/', (req, res)=>{
    return res.render('index', {title:null})
})

router.use('/users', require('./users.router'))

router.get('/about-us', (req, res)=>{
    return res.render('about-us', {title: "About Us"})
})

module.exports = router