const mongoose = require('mongoose')

const UrlSchema = new mongoose.Schema({
    expire_at: {type: Date, default: Date.now, expires: 7200},
    url: {
        type: String,
        required: false,
    },
    NewUrl: {
        type: String,
        required: false,
    },
    _id: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

mongoose.model('urls', UrlSchema)