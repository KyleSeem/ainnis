console.log('conneciton to server-side controllers successful');

const mongoose = require('mongoose');
const Users = mongoose.model('Users');

module.exports = {
    // find all users
    index: (request, response) =>{
        Users.find({})
        .then(function(users){
            response.json(users);
        })
        .catch(function(error){
            response.send(error);
        })
    },

    // create new user
    create: (request, response) =>{
        console.log(request.body);
        Users.create(request.body)
        .then(function(user){
            response.json(user);
        })
        .catch(function(error){
            response.send(error);
        })
    },

    // find single user
    find: (request, response) =>{
        console.log(request.body);
        Users.findOne({ email: request.body.email })
        .then(function(user){
            if (!user){
                response.send({ alert: "The email entered is either incorrect or has not been registered"});
            }
            else if (request.body.password != user.password){
                console.log(request.body.password, user.password);
                response.send({ alert: "The password entered is incorrect"});
            }
            else{
                response.json(user);
            }
        })
        .catch(function(error){
            response.send(error);
        })
    },

    // show single user
    show: (request, response) =>{
        Users.findById(request.params.id)
        .then(function(user){
            response.json(user);
        })
        .catch(function(error){
            response.send(error);
        })
    },

    // delete user bu id
    delete: (request, response) =>{
        console.log(request.params.id);
        Users.findByIdAndRemove(request.params.id)
        .then(function(users){
            response.json(users);
        })
        .catch(function(error){
            console.log(error);
        })
    },





}; // close export
