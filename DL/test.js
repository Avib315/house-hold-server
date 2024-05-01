const categoriesControler = require("../DL/controllers/categories.controller")
require("dotenv").config()
require("./db.js").connect()
const beginTransData = async () => {
    try {

console.log("_________________________ TEST BEGGIN ___________________________");
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
                name: "ניקיון והגיינה",
                categoryIcon: "clean"
            },
            {
                name: "מקפיא",
                categoryIcon: "freezer"
            },
            {
                name: "קיטניות",
                categoryIcon: "legumes"
            },
            {
                name: "תבלינים",
                categoryIcon: "spice"
            },
            {
                name: "חד פעמי",
                categoryIcon: "disposable"
            },
            {
                name: "שתיה",
                categoryIcon: "drinks"
            },
            {
                name: "שימורים",
                categoryIcon: "canning"
            },
        ]
        catArr.forEach(async (e) => {
            let res = await categoriesControler.create(e)
            console.log(res);
        })
    } catch (error) {
        console.log("error: ", error);
    }
}
// beginTransData()