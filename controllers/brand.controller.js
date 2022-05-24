module.exports.brandController =  {

getBrands:(req, res) => {
 res.json('/brands выполнено');
},

postBrands: (req, res) => {
    res.json ('/brands (пост 2) выполнено');
},

deleteBrands: (req, res) => {
    res.json('/brands удалено');
},


}