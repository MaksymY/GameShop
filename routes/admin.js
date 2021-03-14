const express = require('express');
const router = express.Router();

const products = [] 

router.get('/admin', (req, res) => {
    res.render('admin.ejs', {TitlePage: 'Admin'});
})

router.post('/admin', (req, res) => {
    products.push({ game: req.body.game, price: req.body.price });
    res.redirect("/");
})

exports.routes = router;
exports.products = products