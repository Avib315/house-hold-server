const categoriesModel = require('../models/categories.model.js')

const create = async (data) => {
  return await categoriesModel.create(data)
}
const read = async (filter) => {
  return await categoriesModel.find(filter)
}
const readOne = async (filter) => {
  return await categoriesModel.findOne(filter)
}
const update = async (id) => {
  return await categoriesModel.findOneAndUpdate(filter)
  
};
const del = async (id) => {
  return await categoriesModel.findOneAndDelete(filter)

}

module.exports = { create, read, readOne, update, del }