// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;

let quantity = 0;

// Exercise 1

// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cartList array
function buy(id) {
    for (const item of products) {
        if (item.id === id) {
            console.log(item);
            cartList.push(item);
            console.log(cartList);
            document.getElementById('count_product').textContent = (quantity += 1);
            return cartList
        }
    }
}

// Exercise 2
function cleanCart() {
    cartList = [];
    console.log(cartList);
    return cartList;
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total = 0;

    for (const item of cartList) {
        console.log('Precio producto', item.price);
        total += item.price;
    }
    console.log('Total', total);
    return total;
}

// Exercise 4

// Using the "cartlist" array that contains all the items in the shopping cart, 
// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

function generateCart() {
    for (const cartItem of cartList) {
        let existingItem = cart.find(item => item.id === cartItem.id);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            const product = {
                id: cartItem.id,
                name: cartItem.name,
                price: cartItem.price,
                type: cartItem.type,
                quantity: 1
            };
            cart.push(product);
        }
    }
}

// Exercise 5
// Apply promotions to each item in the array "cart"
function applyPromotionsCart() {
    for (const cartItem of cart) {
        const subtotal = parseFloat(cartItem.price * cartItem.quantity);

        if (cartItem.offer) {
            if (cartItem.quantity >= cartItem.offer.number) {
                const discountAmount = parseFloat(subtotal * (cartItem.offer.percent / 100));
                const subtotalWithDiscount = parseFloat(subtotal - discountAmount);

                cartItem.subtotal = parseFloat(subtotal.toFixed(2));
                cartItem.subtotalWithDiscount = parseFloat(subtotalWithDiscount.toFixed(2)); // Con descuento
            } 

        } else {
            cartItem.subtotal = parseFloat(subtotal.toFixed(2));
            cartItem.subtotalWithDiscount = parseFloat(subtotal.toFixed(2)); // Sin descuento
        }
        
        console.log("Subtotal:", cartItem.subtotal);
        console.log("Subtotal con descuento:", cartItem.subtotalWithDiscount !== cartItem.subtotal ? cartItem.subtotalWithDiscount : "No aplica descuento");
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    document.getElementById('total_price').innerHTML = total;

}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {

}

function open_modal() {
    console.log("Open Modal");
    calculateTotal();
    generateCart();
    applyPromotionsCart();
    console.log('CART', cart);
    printCart();
}