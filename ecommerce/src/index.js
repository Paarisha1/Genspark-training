"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import Functions from Modules
var product_1 = require("./products/product");
var customer_1 = require("./customers/customer");
var order_1 = require("./orders/order");
// Sample Data for Demonstration
(0, product_1.addProduct)({ id: 1, name: "Laptop", price: 1200, category: "Electronics" });
(0, product_1.addProduct)({ id: 2, name: "Headphones", price: 150, category: "Electronics" });
(0, customer_1.addCustomer)({ id: 1, name: "Alice", email: "alice@example.com" });
(0, customer_1.addCustomer)({ id: 2, name: "Bob", email: "bob@example.com" });
// Update Product Price (Task 1)
(0, product_1.updateProductPrice)(2, 200); // Updating the price of Headphones
// Creating an Order (Task 3)
var customer = (0, customer_1.listCustomers)()[0];
var productSelection = (0, product_1.listProducts)();
(0, order_1.createOrder)(customer, productSelection); // Apply 10% discount if order total is over 1000
// List all Entries
console.log("Products:", (0, product_1.listProducts)());
console.log("Customers:", (0, customer_1.listCustomers)());
console.log("Orders:", (0, order_1.listOrders)());
console.log((0, product_1.updateProductPrice)(2, 200));
