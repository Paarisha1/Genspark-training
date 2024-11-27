"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = addProduct;
exports.listProducts = listProducts;
exports.updateProductPrice = updateProductPrice;
var products = [];

function addProduct(product) {
    products.push(product);
}
function listProducts() {
    return products;
}

function updateProductPrice(productId, newPrice) {
    var product = products.find(function (p) { return p.id === productId; });
    if (product) {
        product.price = newPrice;
    }
    else {
        console.log("Product with ID ".concat(productId, " not found."));
    }
}
