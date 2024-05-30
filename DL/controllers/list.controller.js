const listsModel = require('../models/lists.model.js');

// CRUD
const create = async (data, isPopulate) => {
    return await listsModel.create(data);
}
const read = async (filter) => {
    return await listsModel.find(filter);
}
const readOne = async (filter) => {
    return await listsModel.findOne(filter);
}
const update = async (filter, data) => {
    return await listsModel.findOneAndUpdate(filter, data);
};
const del = async (filter) => {
    return await listsModel.findOneAndDelete(filter);
}

module.exports = { create, read, readOne, update, del };