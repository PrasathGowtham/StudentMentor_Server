const mongoose = require("mongoose")


const studentschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true
    }, department: {
        type: String,
        required: true,
        trim: true
    }, mentor: {
        type: String,
        required: true,
        trim: true
    }

});

module.exports =mongoose.model('mentor',studentschema);