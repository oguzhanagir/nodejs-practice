const products = [{id:15245,name:"test", price:1500,description:"deneme"}];

module.exports = class Product{
    constructor(name,price,description) {
        this.id = (Math.floor(Math.random()*99999)+1).toString();
        this.name = name;
        this.price = price;
        this.description = description;
    }
    saveProduct(){
        products.push(this);
    }

    static getAll(){
        return products;
    }

    static getById(id){  
        const product = products.find(i=>i.id == id);
        return product;
    }

    static product(product){
        const index = products.findIndex(x=>x.id == product.id);
        
        products[index].name = product.name;
        products[index].description = product.description;
        products[index].price = product.price;
    }

}



