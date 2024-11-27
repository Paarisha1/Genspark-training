"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCustomer = addCustomer;
exports.listCustomers = listCustomers;
var customers = [];
// Function to Add a Customer with Validation
function addCustomer(customer) {
    if (customers.some(function (c) { return c.email === customer.email; })) {
        console.log("Customer with email ".concat(customer.email, " already exists."));
        return;
    }
    customers.push(customer);
}
// Function to List All Customers
function listCustomers() {
    return customers;
}
