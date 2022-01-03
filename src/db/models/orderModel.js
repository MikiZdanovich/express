import * as Sequelize from 'sequelize'

module.exports = (db) => {
  const Order = db.define(
    'Order',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      petId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        required: true,
        foreignKey: true,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      shipDate: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.ENUM,
        values: ['placed', 'approved', 'delivered'],
      },
      complete: {
        type: Sequelize.BOOLEAN,
        default: false,
      },
    },
    {
      tableName: 'order',
    },
  )
  Order.associate = (models) => {
    Order.belongsTo(models.Pet, { foreignKey: 'id', as: 'petID' })
  }
  return Order
}
