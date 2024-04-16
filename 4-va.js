function calculateTotalPrice(items) {
    let totalPrice = 0;

    for (let i = 0; i < items.length; i++) {
        let itemPrice = items[i].price;
        let tax = itemPrice * 0.06;
        let totalItemPrice = itemPrice + tax;

        totalPrice += totalItemPrice;
    }

    return totalPrice;
}

let purchasedItems = [
    { name: "Television", price: 5000 },
    { name: "Laptop", price: 8000 },
    { name: "Phone", price: 3000 }
];

let total = calculateTotalPrice(purchasedItems);
console.log("Jami narx:", total);
