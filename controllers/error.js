exports.get404 = (req, res) => {
    res.status(404).render('404.ejs', {TitlePage: '404', path: '/404'});
}