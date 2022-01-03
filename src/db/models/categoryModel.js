import * as Sequelize from 'sequelize'

module.exports = (db) => {
  const Category = db.define(
    'Category',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        required: true,
      },
    },
    {
      tableName: 'category',
    },
  )
  Category.associate = (models) => {
    Category.hasMany(models.Pet, { foreignKey: 'category', as: 'name' })
  }
  return Category
}
