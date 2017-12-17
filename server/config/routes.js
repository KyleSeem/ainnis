console.log('conneciton to server-side routes successful');

const path = require('path');

const users = require('../controllers/users.js');

module.exports = function(app){
    app.get('/users', users.index);
    app.post('/register', users.create);
    app.post('/login', users.find);
    app.get('/users/:id', users.show);
    app.delete('/users/:id', users.delete);

    app.all("*", (request, response, next) =>{
        response.sendFile(path.resolve("./public/index.html"))
    })

}; // close export
