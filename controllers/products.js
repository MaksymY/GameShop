const Product = require('../models/product');

exports.getAdmin = (req, res) => {
    res.render('admin', {
        TitlePage: 'Admin',
        path:"/admin"
    });
}

exports.postAdmin = (req, res) => {
    const product = new Product(req.body.game, req.body.price);
    product.save();
    res.redirect("/");
}

exports.getProducts = (req, res) => {
    Product.fetchAll(products => {
        res.render('index', {
            prods: products,
            TitlePage: 'Shop',
            path: '/',
        });
    });
}