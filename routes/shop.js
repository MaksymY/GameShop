const express = require('express');
const router = express.Router();

const Allproducts = require('./admin');

router.get('/', (req, res) => {
    const products = Allproducts.products;
    res.render('index.ejs', {TitlePage: 'Shop', prods: products})
})

module.exports = router;