import { Customer } from './customer';
import { Employee } from './employee';
import { Order } from './order';
import { Inventory } from './inventory';
import { MenuItem } from './menu-item';
import { OrderItem } from './order-item';
import { Otp } from './otp';

// Order belongs to on Customer but Customer can have many Orders

Order.belongsTo(Customer, { foreignKey: 'customer_id', onDelete: 'CASCADE' });
Customer.hasMany(Order, { foreignKey: 'customer_id', onDelete: 'CASCADE' });

// Order belongs to on Employee but Employee can have many Orders

Order.belongsTo(Employee, { foreignKey: 'employee_id', onDelete: 'CASCADE' });
Employee.hasMany(Order, { foreignKey: 'employee_id', onDelete: 'CASCADE' });

// OrderItem belongs to Order but Order can have many OrderItems

OrderItem.belongsTo(Order, { foreignKey: 'order_id', onDelete: 'CASCADE' });
Order.hasMany(OrderItem, { foreignKey: 'order_id', onDelete: 'CASCADE' });

// OrderItem belongs to MenuItem but MenuItem can have many OrderItems

OrderItem.belongsTo(MenuItem, {
  foreignKey: 'menu_item_id',
  onDelete: 'CASCADE',
});
MenuItem.hasMany(OrderItem, {
  foreignKey: 'menu_item_id',
  onDelete: 'CASCADE',
});

export { Customer, Employee, Order, Inventory, MenuItem, OrderItem, Otp };
