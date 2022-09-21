const Product = require("../models/products");

exports.getProducts = (req,res,next)=>{
    const products = Product.getAll();
    console.log(products),
    res.render("admin/products",{
            title: "Admin Products",
            products: products,
            path:"/admin/products",
    });
}

exports.getAddProduct = (req,res,next)=>{
    res.render("admin/add-product",{
            title: "Add a new Product",
            path:"/admin/add-product",
    });
}

exports.postAddProduct = (req,res,next)=>{
    const product = new Product(req.body.name,req.body.price,req.body.description);
    product.saveProduct();
    console.log(req.body);
    res.redirect("/");
}

exports.getEditProduct = (req,res,next)=>{
    const product = Product.getById(req.params.productid);

    res.render("admin/edit-product",{
            title: "Edit Product",
            product: product,
            path:"/admin/products",
    });
}

exports.postEditProduct = (req,res,next)=>{
    const product = Product.getById(req.body.id);
    product.name = req.body.name;
    product.price = req.body.price;
    product.description = req.body.description;

    Product.update(product);
    res.redirect("/admin/products");
}