const mongoose = require('mongoose')

const AnimalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true,
        default: 'https://www.worldsbestcatlitter.com/wp-content/uploads/2023/03/main-img_orange-tabby-cats_blog.jpg'
    },
    age: {
        type: Number,
        required: true
    },
    description: String
})

module.exports = mongoose.model('Animal', AnimalSchema)

