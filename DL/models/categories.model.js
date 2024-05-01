const mongoose = require('mongoose')

const categoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    categoryIcon: String

})

const categoriesMoedls = mongoose.model('categories', categoriesSchema)

module.exports = categoriesMoedls