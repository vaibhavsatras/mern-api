const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    title:{

        type: String,
        required: true
    },

    description:{

        type: String,
        required: true
    },
    productImg:{
        type: String
    },
    price:{
        type: String,
        required: true
    },
    

},{timestamps: true})

const productModel = mongoose.model('products',productSchema)

module.exports = productModel