const mongoose = require('mongoose');
const Bids = mongoose.model('Bids');
const Products = mongoose.model('Products');


module.exports = {
    // get all bids
    index: (request, response) =>{
        Bids.find({})
        .then(function(bids){
            response.json(bids);
        })
        .catch(function(error){
            response.send(error);
        })
    },

    // create new bid
    create: (request, response) =>{
        // console.log(request.body);
        Bids.create(request.body)
        .then(function(bid){
            let prodID = bid._product;
            // console.log('PRODID', prodID);

            Products.findById(prodID, function(error, product){
                console.log('returning this product', product);
                if (error) { console.log(error); }
                else{
                    bid.save(function(error){
                        product.bids.push(bid);
                        product.save(function(error){
                            if (error) { console.log(error); }
                            else{
                                response.json(product);
                            }
                        })
                    })
                }
            })
        })
        .catch(function(error){
            response.send(error);
        })
    },

    // delete all bids from database
    delete: (request, response) =>{
        Bids.remove({})
        .then(function(bids){
            console.log(bids);
            response.json(bids);
        })
        .catch(function(error){
            response.send(error);
        })
    },

}; // close bids controller
