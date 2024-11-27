import { Product } from "../products/product";
import { Customer } from "../customers/customer";

export interface Order {
  orderId: number;
  customer: Customer;
  products: Product[];
  totalAmount: number;
}

const orders: Order[] = [];

export function createOrder(customer: Customer, products: Product[]): void {
  const totalAmount = products.reduce((sum, product) => sum + product.price, 0);
  const discount = totalAmount > 1000 ? totalAmount * 0.1 : 0;
  const finalAmount = totalAmount - discount;
  const newOrder: Order = {
    orderId: orders.length + 1,
    customer,
    products,
    totalAmount: finalAmount,
  };
  orders.push(newOrder);
  console.log(`Order created with total amount: $${finalAmount}${discount ? ` (10% discount applied)` : ''}`);
}

// Function to List All Orders
export function listOrders(): Order[] {
  return orders;
}
