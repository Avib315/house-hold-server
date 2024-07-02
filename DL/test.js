const catagoriesController = require("../DL/controllers/categories.controller")
const catModel = require("../DL/models/categories.model.js")
const userModels = require("../DL/models/users.model.js")
const itemController = require("../DL/controllers/item.controller.js")
const userController = require("../DL/controllers/users.controller.js")
require("dotenv").config()
require("./db.js").connect()
const beginTransData = async () => {
    try {
        catModel.db.dropCollection("categories")
        console.log("_________________________ TEST BEGIN ___________________________");
        const catArr = [
            {
                name: "ירקות",
                categoryIcon: "vegetables"
            },
            {
                name: "מקרר",
                categoryIcon: "friger"
            },
            {
                name: "קיטניות",
                categoryIcon: "legumes"
            },
            {
                name: "מקפיא",
                categoryIcon: "freezer"
            },
            {
                name: "ניקיון והגיינה",
                categoryIcon: "clean"
            },
            {
                name: "שתיה",
                categoryIcon: "drinks"
            },
            {
                name: "שימורים",
                categoryIcon: "canning"
            },
            {
                name: "תבלינים",
                categoryIcon: "spice"
            },
            {
                name: "חד פעמי",
                categoryIcon: "disposable"
            },
        ]
        catArr.forEach(async (e) => {
            let res = await catagoriesController.create(e)
            console.log(res);
        })
    } catch (error) {
        console.error("error: ", error);
    }
}
const createUser = async () => {
    console.log("______ start _______");
    // let user = await userController.readOne({ _id: "" })
    const items = await itemController.read({})
    console.log(items);
    const res = await userController.update({_id:"6679c346191dc00e108d3e66"}, {items:[...items]})
    // user.items.forEach(async (item , i) => {
    //     const newItem = {categoryId:item.categoryId , displayName:item.displayName}
    //     console.log("create:",i)
    // })
    console.log("______ finish _______");

}
createUser()
// beginTransData()