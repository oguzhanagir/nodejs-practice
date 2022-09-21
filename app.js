const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorController = require("./controllers/error")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404Page);



app.listen(3000, () => {
    console.log('listening on port 3000');
});