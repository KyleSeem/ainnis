// this file makes mongoose and desired mongodb available for use

const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const models_path = path.resolve('server', 'models');

mongoose.connect('mongodb://localhost/ainnis_db', { useMongoClient: true });

mongoose.connection.on('connected', function(){
    console.log('Connection to mongoose successful');
});

fs.readdirSync(models_path).forEach(function(file){
    if (file.indexOf('.js') >= 0){
        require(path.join(models_path, file));
    }
});
