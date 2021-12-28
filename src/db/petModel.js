import * as Sequelize from 'sequelize'

import db from '../utils/database'

const Pet = db.define('pet', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  category: {
    type: Sequelize.JSONB,
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
    type: Sequelize.JSONB,
  },
  tags: {
    type: Sequelize.JSONB,
  },
  status: {
    type: Sequelize.ENUM,
    values: ['available', 'pending', 'sold'],
  },

})

export default Pet
