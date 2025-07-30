import { sequelize } from '../config/db';
import { DataTypes } from 'sequelize';

const Inventory = sequelize.define(
  'Inventory',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    quantity_stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    reorder_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: 'inventory',
  }
);

export { Inventory };
