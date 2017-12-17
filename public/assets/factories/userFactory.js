// user factory

myApp.factory('userFactory', ['$http', function($http){
    const factory = {};
    alerts = [];

    // get all users
    factory.index = function(callback){
        $http.get('/users')
        .then(function(response){
            callback(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    // create new user
    factory.create = function(user, callback){
        $http.post('/register', user)
        .then(function(response){
            console.log(response);
            alerts = [];
            if (response.data.errors){
                var err = response.data.errors;
                for (var msg in err){
                    var alert = (err[msg].message);
                    alerts.push(alert);
                }
                callback({alerts:alerts});
            }
            else if (response.data.code === 11000){
                alerts.push('This email has aleady been registered');
                callback({alerts:alerts});
            }
            else{
                console.log('new user created:', response.data);
                callback(response.data);
            }
        })
        .catch(function(error){
            console.log(error);
        })
    }

    // find user (login)
    factory.find = function(user, callback){
        alerts = [];
        $http.post('/login', user)
        .then(function(response){
            callback(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }


    // show user by id
    factory.show = function(id, callback){
        $http.get('/users/' + id)
        .then(function(response){
            console.log(response.data);
            callback(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    // delete user by id
    factory.delete = function(id, callback){
        $http.delete('/users/' + id)
        .then(function(response){
            callback(response.data);
        })
    }


    return factory;
}]); // close userFactory
