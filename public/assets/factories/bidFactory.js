
myApp.factory('bidFactory', ['$http', function($http){
    const factory = {};

    // get all bids
    factory.index = function(callback){
        $http.get('/bids')
        .then(function(response){
            callback(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    // place new bid
    factory.create = function(newBid, callback){
        $http.post('/bids', newBid)
        .then(function(response){
            callback(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    // delete bid info (entire existing model) from database
    factory.delete = function(callback){
        $http.delete('/bids')
    }

    return factory;
}]); // close bidFactory
