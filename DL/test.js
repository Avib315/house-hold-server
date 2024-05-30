const catagoriesController = require("../DL/controllers/categories.controller")
const catModel = require("../DL/models/categories.model.js")
const userModels = require("../DL/models/users.model.js")
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
        console.log("error: ", error);
    }
}
const createUser = async () => {
    userModels.db.dropCollection("Users")
   let user = await userController.create({
        name: "אבי בראשי",
        email: "a@a",
        password: "a123",
        phone: "0545454545",
        items: [
            { displayName: "עגבניות", categoryId: "66308284e85b8c8aadeea128" },
            { displayName: "בשר טחון", categoryId: "66308284e85b8c8aadeea12b" },
            { displayName: "פיתות", categoryId: "66308284e85b8c8aadeea12c" },
            { displayName: "חמגשיות", categoryId: "66308284e85b8c8aadeea12e" },
            { displayName: "משחת שיניים", categoryId: "66308284e85b8c8aadeea12a" },
            { displayName: "חלב", categoryId: "66308284e85b8c8aadeea129" },
            { displayName: "סודה", categoryId: "66308284e85b8c8aadeea12f" },
            { displayName: "טונה", categoryId: "66308284e85b8c8aadeea130" },
            { displayName: "נס קפה", categoryId: "66308284e85b8c8aadeea12d" },
        ]
    })
    
}
// createUser()
beginTransData()