const categoriesController = require("../DL/controllers/categories.controller");

async function getCategories (){
    const categories = await categoriesController.read({})
    return categories
}  
module.exports = {getCategories}