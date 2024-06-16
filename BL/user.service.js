const userController = require("../DL/controllers/users.controller");
const itemController = require("../DL/controllers/item.controller");
const bcrypt = require('bcrypt');
const { loginAuth } = require("../middleware/auth.js")
async function login(userInput) {
    const failedLogin = { login: false, message: 'אחד הפרטים שהזנת שגויים' };

    const user = await userController.readOne({ email: userInput.email });
    if (!user) return failedLogin;

    const passwordMatch = await bcrypt.compare(userInput.password, user?.password);
    if (!passwordMatch) return failedLogin;

    const token = loginAuth({ id: user._id });
    const result = { login: true, user: { email: user.email, name: user.name, items: user.items, lists: user.lists } };
    return { result, token };
}
async function register(userInput) {
    userInput.password = await bcrypt.hash(userInput.password, 10)
    const user = await userController.create(userInput);
    const items = await itemController.read();
    await userController.createItems(user._id, items);
    if (!user) return false;
    const result = { register: true, message: "נוסף בהצלחה", user: { email: user.email, name: user.name, items: user.items, lists: user.lists } };
    return result;
}
async function getUser(userId){
    const user = await userController.readOne({ _id: userId });
    return user;
}
module.exports = { login, register, getUser };