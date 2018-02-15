
myApp.factory('productFactory', ['$http', function($http){
    const factory = {};

    // use this to predefine products for new auction creation
    const products = [
        { product : 'Product 1' },
        { product : 'Product 2' },
        { product : 'Product 3' },
    ];

    alerts = [];


    // get all products from database
    factory.index = function(callback){
        $http.get('/products')
        .then(function(response){
            callback(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }


    // creates new products model using predefined const above
    factory.create = function(callback){
        $http.post('/products', products)
        .then(function(response){
            callback(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }


    // delete product info from database
    factory.delete = function(callback){
        $http.delete('/products')
    }


    return factory;
}]); // close productFactory
