console.log('conneciton to server-side routes successful');

const path = require('path');

const bids = require('../controllers/bids.js');
const products = require('../controllers/products.js');
// const users = require('../controllers/users.js');

module.exports = function(app){
    app.get('/bids', bids.index);
    app.post('/bids', bids.create);
    app.delete('/bids', bids.delete);

    app.get('/products', products.index);
    app.post('/products', products.create);
    app.delete('/products', products.delete);


    app.all("*", (request, response, next) =>{
        response.sendFile(path.resolve("./public/index.html"))
    })

}; // close export
