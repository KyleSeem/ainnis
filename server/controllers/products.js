
const mongoose = require('mongoose');
const Products = mongoose.model('Products');

module.exports = {

    // get all products
    index: (request, response)=>{
        Products.find({})
        .then(function(products){
            response.json(products);
        })
        .catch(function(error){
            response.send(error);
        })
    },

    // create new product(s)
    create: (request, response) =>{
        // console.log(request.body);
        Products.create(request.body)
        .then(function(products){
            console.log(products);
            response.json(products);
        })
        .catch(function(error){
            response.send(error);
        })
    },

    // delete all products from database
    delete: (request, response) =>{
        Products.remove({})
        .then(function(products){
            response.json(products);
        })
        .catch(function(error){
            response.send(error);
        })
    },


}; // close controller
