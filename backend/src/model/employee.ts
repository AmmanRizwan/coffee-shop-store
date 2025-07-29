import { sequelize } from '../config/db';
import { DataTypes } from 'sequelize';
import { EMPLOYEE_ROLES } from '../constants';

const Employee = sequelize.define(
  "Employees",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM(...Object.values(EMPLOYEE_ROLES)),
      allowNull: false
    },
    hire_date: {
      type: DataTypes.DATE,
      defaultValue: () => new Date()
    },
    salary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 15000.00
    }
  },
  {
    timestamps: true,
    tableName: "employees"
  }
);

export { Employee };
