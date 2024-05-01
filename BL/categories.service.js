const categoriesControler = require("../DL/controllers/categories.controller");

async function getCategories (){
    const categories = await categoriesControler.read({})
    return categories
}  
module.exports = {getCategories}