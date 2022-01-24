export default (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        required: true,
      },
    },
  )
  // Category.associate = (models) => {
  //   Category.hasMany(models.Pet, { foreignKey: 'category', as: 'name' })
  // }
  return Category
}
