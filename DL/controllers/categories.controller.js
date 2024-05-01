const categoriesModel = require('../models/categories.model.js')

// CRUD
const create = async (data) => {
  return await categoriesModel.create(data)
}
const read = async (filter) => {
  return await categoriesModel.find(filter)
}
const readOne = async (filter) => {
  return await categoriesModel.findOne(filter)
}
const update = async (id, newMsg) => {

};
const del = async (id) => {

}

module.exports = { create, read, readOne, update, del }