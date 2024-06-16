const userModel = require('../models/users.model.js')

// CRUD
const create = async (data) => {
    return await userModel.create(data)
}
const read = async (filter) => {
    return await userModel.find(filter)
}
const readOne = async (filter) => {
    return await userModel.findOne(filter)
}
const update = async (filter, data) => {
    return await userModel.findOneAndUpdate(filter, data)
};
const del = async (filter) => {
    return await update(filter, { isActive: false })
}

module.exports = { create, read, readOne, update, del }