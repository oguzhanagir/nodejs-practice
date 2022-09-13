const express = require("express");
const router = express.Router();


router.get('/add-product',(req,res,next)=>{
    res.send(`
        <html>
            <head> <title>Ürün Ekle</title>
            </head>
            <body>
                <form action="/add-product" method="POST">
                    <input type="text" name="productName">
                    
                    <input type="submit" name="Save Product">
                </form>
            </body>
        </html>
    `)
});

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;