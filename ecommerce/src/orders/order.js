"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = createOrder;
exports.listOrders = listOrders;
var orders = [];
// Function to Create an Order with Discount Calculation
function createOrder(customer, products) {
    var totalAmount = products.reduce(function (sum, product) { return sum + product.price; }, 0);
    var discount = totalAmount > 1000 ? totalAmount * 0.1 : 0;
    var finalAmount = totalAmount - discount;
    var newOrder = {
        orderId: orders.length + 1,
        customer: customer,
        products: products,
        totalAmount: finalAmount,
    };
    orders.push(newOrder);
    console.log("Order created with total amount: $".concat(finalAmount).concat(discount ? " (10% discount applied)" : ''));
}
// Function to List All Orders
function listOrders() {
    return orders;
}
