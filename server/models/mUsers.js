console.log('Connection to back-end models successful');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please enter your email address'],
        unique: [true, 'This email address has already been registered'],
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8, 'Password must contain at least 8 characters'],
    },
    created_at: {
        type: Date,
        default: Date.now,
    },

    
});

module.exports = mongoose.model('Users', UserSchema);
