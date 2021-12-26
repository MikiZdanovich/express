import * as Sequelize from 'sequelize'
// eslint-disable-next-line import/no-unresolved
import Category from 'categoryMode.js'
// eslint-disable-next-line import/no-unresolved
import Tags from 'tagModel.js'
import db from '../utils/database'

const Pet = db.define('pet', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  category: {
    type: Category, // CHECK HOW TO PASS OBJECT
    unique: false,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
    required: true,
  },
  photoUrls: {
    type: Sequelize.JSON, // same check how to pass orderedMap
  },
  tags: {
    type: Tags,
  },
  status: {
    type: Sequelize.ENUM,
    values: ['available', 'pending', 'sold'],
  },

})
