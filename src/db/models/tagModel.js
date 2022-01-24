export default (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    'Tag',
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
    {
      tableName: 'tags',
    },
  )
  // Tag.associate = (models) => {
  //   Tag.hasMany(models.Pet, { foreignKey: 'tag', as: 'pets' })
  // }

  return Tag
}
