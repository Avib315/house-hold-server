const userController = require("../DL/controllers/users.controller");

async function getUserItems(userId, categoryId, itemsId, itemName) {
    const user = await userController.readOne({ _id: userId });
    if (categoryId) {
        user.items = user.items.filter(item => item.categoryId == categoryId);
    }
    console.log(itemsId);
    if (itemsId) {
        console.log("_______ start________ ");
        user.items = user.items.filter(item=> itemsId.includes(String(item._id)));
        console.log("_______end  ________ ");
        
    }
    if (itemName) {
        user.items = user.items.filter(item => item.displayName.includes(itemName));
    }
    user.items.sort((a, b) => String(a.categoryId).localeCompare(String(b.categoryId)));
    console.log("hello ", user.items);
    return user.items;
}
async function addToUserItem(userId, item) {
    const user = await userController.readOne({ _id: userId })
    if (!item.categoryId || !item.displayName) {
        return null
    }

    user.items.push(item)
    const res = await userController.update({ _id: userId }, user)
    return res
}
module.exports = { getUserItems, addToUserItem }