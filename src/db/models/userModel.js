module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        required: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        required: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        required: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        required: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        required: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        required: false,
      },
      userStatus: {
        type: DataTypes.INTEGER,
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
