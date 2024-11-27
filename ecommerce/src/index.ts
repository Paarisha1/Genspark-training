
import { addProduct, listProducts, updateProductPrice } from "./products/product";
import { addCustomer, listCustomers } from "./customers/customer";
import { createOrder, listOrders } from "./orders/order";


addProduct({ id: 1, name: "Laptop", price: 1200, category: "Electronics" });
addProduct({ id: 2, name: "Headphones", price: 150, category: "Electronics" });

addCustomer({ id: 1, name: "Alice", email: "alice@example.com" });
addCustomer({ id: 2, name: "Bob", email: "bob@example.com" });

updateProductPrice(2, 200); 

const customer = listCustomers()[0];
const productSelection = listProducts();
createOrder(customer, productSelection); 

console.log("Products:", listProducts());
console.log("Customers:", listCustomers());
console.log("Orders:", listOrders());

