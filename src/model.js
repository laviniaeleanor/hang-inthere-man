const Sequelize = require('sequelize')
const sequelize = require('../db')

const Product = sequelize.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: Sequelize.STRING
}, {
  tableName: 'products',
  timestamps: false
})


module.exports = Product


// var Sequelize = require('sequelize')
// var sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres')
