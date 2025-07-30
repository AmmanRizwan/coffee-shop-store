import { sequelize } from '../config/db';
import { DataTypes } from 'sequelize';

const Order = sequelize.define(
  'Orders',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    customer_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'id',
      },
    },
    employee_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'employees',
        key: 'id',
      },
    },
    order_data: {
      type: DataTypes.DATE,
      defaultValue: () => new Date(),
      allowNull: false,
    },
    total_amount: {
      type: DataTypes.DECIMAL(7, 2),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: 'orders',
  }
);

export { Order };
