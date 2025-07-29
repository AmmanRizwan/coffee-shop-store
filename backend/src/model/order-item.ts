import { sequelize  } from "../config/db";
import { DataTypes } from "sequelize";

const OrderItem = sequelize.define(
    "OrderItems",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        order_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'orders',
                key: 'id'
            }
        },
        item_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'menuitems',
                key: 'id'
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sub_total: {
            type: DataTypes.DECIMAL(7, 2),
            allowNull: false,
        }
    },
    {
        timestamps: true,
        tableName: "orderitems"
    }
)

export { OrderItem };