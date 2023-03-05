const mongoose = require('mongoose')

const complaintSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    mobile: {
        type: 'number',
        required: true
    },
    address: {
        type: 'string',
        required: true
    },

    productGroup: {
        type: 'string',
        required: [true, 'please enter product group'],
    },
    product: {
        type: 'string',
        required: [true, 'please enter product name'],
    },
    problem: {
        type: 'string',
        required: [true, 'please enter issue name'],
    },
    perchasePlatform: {
        type: 'string',
        required: true,
    },
    problemDescription: {
        type: 'string',
        required: true,
    },

    imgUrl: {
        type: 'string',
        required: [true, 'please uplode file'],
    },
    perchaseDate: {
        type: 'date',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model('complaint', complaintSchema)
