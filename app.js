const path = require('path')
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index.ejs', {TitlePage: 'Shop'});
})
app.get('/admin', (req, res) => {
    res.render('admin.ejs', {TitlePage: 'Admin'});
})
app.use((req, res) => {
    res.render('404.ejs', {TitlePage: '404'})
})

app.listen('3000');