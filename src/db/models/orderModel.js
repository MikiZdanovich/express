export default (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      petId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        required: true,
        foreignKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      shipDate: {
        type: DataTypes.DATE,
      },
      status: {
        type: DataTypes.ENUM,
        values: ['placed', 'approved', 'delivered'],
      },
      complete: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
    },
  )
  // Order.associate = (models) => {
  //   Order.belongsTo(models.Pet, { foreignKey: 'id', as: 'petID' })
  // }
  return Order
}
