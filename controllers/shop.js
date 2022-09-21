const Product = require("../models/products");

exports.getIndex = (req,res,next)=>{
    const products = Product.getAll();
    res.render("shop/index",{
            title: "Mağaza",
            products: products,
            path:"/",
    });
};

exports.getProducts = (req,res,next)=>{
    const products = Product.getAll();
    res.render("shop/products",{
            title: "Products",
            products: products,
            path:"/products",
    });
};

exports.getProduct = (req,res,next)=>{
    const product = Product.getById(req.params.productid);
    res.render("shop/product-detail",{
        title: product.name,
        product: product,
        path:"/products"
    });
};


exports.getProductDetails = (req,res,next)=>{
    res.render("shop/details",{
            title: "Product Details",
            path:"/details",
    });
};


exports.getCart = (req,res,next)=>{
    res.render("shop/cart",{
            title: "Cart",
            path:"/cart",
    });
};

exports.getOrders = (req,res,next)=>{
    res.render("shop/orders",{
            title: "Orders",
            path:"/orders",
    });
}