import * as Sequelize from 'sequelize'

module.exports = (db) => {
  const Tag = db.define(
    'Tag',
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
      tableName: 'tags',
    },
  )
  Tag.associate = (models) => {
    Tag.hasMany(models.Pet, { foreignKey: 'tag', as: 'pets' })
  }

  return Tag
}
