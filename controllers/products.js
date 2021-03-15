const Product = require('../models/product');

exports.getAdmin = (req, res) => {
    res.render('admin.ejs', {
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
    const products = Product.fetchAll();
    res.render('index.ejs', {
        TitlePage: 'Shop',
        prods: products,
        path: "/"
    });
}