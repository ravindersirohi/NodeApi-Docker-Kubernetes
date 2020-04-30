const { Product } = require('../models/shared');

const foodProducts = [
    new Product(1, 'Orange', 4),
    new Product(2, 'Banana', 2),
    new Product(3, 'Pear', 3),
    new Product(4, 'Apple', 5)
];

module.exports = {
    productTypes() {
        let products = foodProducts.filter(p => p.price > 2).sort((a, b) =>  a.name > b.name ? -1 : (a.name < b.name ? 1 : 0));
        return products;
    },
    totalPrice() {
        let total = foodProducts.map(p => p.price).reduce((total, price) => total + price);
        return total;
    }
};