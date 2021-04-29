
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema to be use
const reviewSchema = new Schema({
    
    name:{
        type: String,
        required: true
    },

    choice:{
        type: String,
        required: true
    },

    body:{
        type: String,
        required: true
    }

}, { timestamps: true });

// model to me use
const Review = mongoose.model('Review', reviewSchema)

// export module  to be use in another  file 
module.exports = Review;

