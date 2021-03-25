const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rentedBikes: {
        type: [],
        required: false
    }
})

module.exports = model('User', userSchema)