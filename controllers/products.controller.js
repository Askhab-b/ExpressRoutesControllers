module.exports.productController = { 
getProduct: (req,res) => {
    res.json('/products выполнено');
},
getProductId: (req,res) => {
    res.json('/products/:id выполнено');
},

postProduct: (req, res) => {
    res.json('/products (пост) выполнено');
},
deleteproductId: (req, res) => {
    res.json('/products/:id удалено');
}, 

};