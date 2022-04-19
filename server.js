const express = require("express");
const app = express();
const port = 9000;
app.use(express.static(__dirname + '/public'))
app.set('views', './views')
app.set('view engine', 'ejs')
app.get('/',((req, res) => {
    res.render(__dirname+'/index.ejs')
}))
app.get('/shop',((req, res) => {
    res.render(__dirname+'/shop.ejs')
}))
app.get('/singleProduct',((req, res) => {
    res.render(__dirname+'/single-product.ejs')
}))
app.get('/checkout',((req, res) => {
    res.render(__dirname+'/checkout.ejs')
}))
app.get('/cart',((req, res) => {
    res.render(__dirname+'/cart.ejs')
}))
app.get('/index',((req, res) => {
    res.render(__dirname+'/index.ejs')
}))
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`))
/*app.get('/',((req, res) => {
    res.sendFile(__dirname+'/index.ejs')
}))
app.get('/shop',((req, res) => {
    res.sendFile(__dirname+'/shop.ejs')
}))
app.get('/singleProduct',((req, res) => {
    res.sendFile(__dirname+'/single-product.ejs')
}))
app.get('/checkout',((req, res) => {
    res.sendFile(__dirname+'/checkout.ejs')
}))
app.get('/cart',((req, res) => {
    res.sendFile(__dirname+'/cart.ejs')
}))
app.get('/index',((req, res) => {
    res.sendFile(__dirname+'/index.ejs')
}))*/

