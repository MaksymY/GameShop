const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorControler = require('./controllers/error');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);
app.use(adminRoutes);

app.use(errorControler.get404);

app.listen(port);
