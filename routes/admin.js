const express = require('express');
const router = express.Router();

router.get('/admin', (req, res) => {
    res.render('admin.ejs', {TitlePage: 'Admin'});
})

router.post('/admin', (req, res) => {
    res.redirect("/")
})

module.exports = router;