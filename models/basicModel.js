const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    courseName: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    name: {
        type: String,
        // required: true,
    },
    mobile: {
        type: String,
        // required: true
    },
    profession: {
        type: String,
        // required: true
    },
    intend: {
        type: String,
        // required: true
    },

    // courseName: "AI for Education",
    // email: $('#email').val(),
    // name: $('#name').val(),
    // mobile: $('#mobile').val(),
    // profession: $('#profession').val(),
    // intend: $('#intend').val()
});

module.exports = mongoose.model('register', registerSchema);








