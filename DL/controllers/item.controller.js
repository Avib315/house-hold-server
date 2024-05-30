const { itemModels } = require("../models/item.model.js");
async function create(filters) {
    return await itemModels.create(filters)
}
async function read(filters) {
    return await itemModels.find(filters)
}
async function readOne(filters) {
    return await itemModels.findOne(filters)
}

async function update(filters) {
    return await itemModels.findOneAndUpdate(filters)
}

async function del(filters) {
    return await itemModels.findOneAndDelete(filters)
}
module.exports = { create, read, readOne, del, update }