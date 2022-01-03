import * as Sequelize from 'sequelize'

module.exports = (db) => {
  const User = db.define(
    'User',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        required: true,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        required: true,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        required: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        required: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        required: true,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
        required: false,
      },
      userStatus: {
        type: Sequelize.INTEGER,
      },
    },
    {
      tableName: 'user',
    },
  )
  // User.associate = (models) => {
  //   User.belongsTo(models.Pet, { foreignKey: 'category', as: 'pets' })
  // }
  return User
}
