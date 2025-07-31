// Product Inventory Validator

/* You are given an array of product objects. Each product has the following properties: name, price, and inStock. */

const products = [
  { name: "Keyboard", price: 1499, inStock: true },
  { name: "Mouse", price: 899, inStock: true },
  { name: "Monitor", price: 10499, inStock: false },
  { name: "Webcam", price: 2499, inStock: true },
  { name: "Speaker", price: 1999, inStock: false },
  { name: "USB Cable", price: 299, inStock: true },
];

// 1. sort the prodexts in descending order of price.
const sortedProducts = products.sort((a, b) => b.price - a.price);
console.log("Products sorted by price (descending): ");
console.log(sortedProducts);

// 2. Check if some products are out od stock.
const isOutOfStock = products.some(product => !product.inStock);

// 3. Check if all products are in stock.
const isAllInStock = products.every(product => product.inStock);

const stockStatus = isOutOfStock ? "⚠️ Some products are out of stock." : "✅ All products are in stock.";
console.log(stockStatus);

// Get the names of top 3 expensive products.
const top3ExpesiveProducts = sortedProducts.slice(0, 3).map(product => product.name);
console.log("Top 3 expensive products: ", top3ExpesiveProducts);