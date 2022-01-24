// import * as Sequelize from 'sequelize'

export default (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    photoUrls: {
      type: DataTypes.JSONB,
    },
    tags: {
      type: DataTypes.JSONB,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['available', 'pending', 'sold'],
    },
  });
  return Pet
}

// module.exports = (db) => {
//   const Pet = db.define(
//     'Pet',
//     {
//       id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true,
//       },
//       category: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//       },
//       name: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         required: true,
//       },
//       photoUrls: {
//         type: Sequelize.JSONB,
//       },
//       tags: {
//         type: Sequelize.JSONB,
//       },
//       status: {
//         type: Sequelize.ENUM,
//         values: ['available', 'pending', 'sold'],
//       },
//     },
//     {
//       modelName: 'pet',
//     },
//   )
//   Pet.associate = (models) => {
//     Pet.belongsTo(models.Category, { foreignKey: 'category', as: 'category' })
//     Pet.belongsTo(models.Tag, { foreignKey: 'tag', as: 'tags' })
//     Pet.hasMany(models.Order, { foreignKey: 'id', as: 'petID' })
//   }
//   return Pet
// }
