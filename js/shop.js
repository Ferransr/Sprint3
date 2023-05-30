// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;

let quantity = 0;

let productsTable = document.querySelector("#cart_list");

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
    cart = [];
    totalPrice = 0;
    totalItems = 0;
    console.log(cartList);
    document.getElementById('count_product').textContent = (quantity = 0);
    document.getElementById('total_price').innerHTML = (total = 0);

    _emptyCartTable();
}

// Exercise 3
function calculateTotal() {
    total = 0;

    for (const item of cart) {

        total += item.subtotalWithDiscount;

        console.log('Precio producto', item.subtotalWithDiscount);
    }
    console.log('Total', total);
}

// Exercise 4

// Using the "cartlist" array that contains all the items in the shopping cart, 
// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

function generateCart() {
    for (const cartItem of cartList) {

        if (cart.find(item => item.id === cartItem.id)) {
            cartItem.quantity++;
        } else {
            cartItem.quantity = 1;
            cart.push(cartItem);
        }
    }
}

// Exercise 5
// Apply promotions to each item in the array "cart"
function applyPromotionsCart() {
    for (const cartItem of cart) {
        const subtotal = parseFloat((cartItem.price * cartItem.quantity).toFixed(2));

        if (cartItem.offer && cartItem.quantity >= cartItem.offer.number) {
            const discountAmount = parseFloat(subtotal * (cartItem.offer.percent / 100));
            const subtotalWithDiscount = parseFloat((subtotal - discountAmount).toFixed(2));

            console.log(typeof subtotalWithDiscount);

            cartItem.subtotalWithDiscount = subtotalWithDiscount; // Con descuento
        } else {
            cartItem.subtotalWithDiscount = subtotal; // Sin descuento
        }

        cartItem.subtotal = subtotal;

        console.log("Subtotal:", cartItem.subtotal);
        console.log(
            "Subtotal con descuento:",
            cartItem.subtotalWithDiscount !== cartItem.subtotal ?
            cartItem.subtotalWithDiscount :
            "No aplica descuento"
        );
    }
}

// Exercise 6
// function printCart sin botones de incremento/decremento.
// function printCart() {
//     // Clean the existing content of the table
//     productsTable.innerHTML = '';

//     // Fill the shopping cart modal manipulating the shopping cart dom
//     document.getElementById('total_price').innerHTML = total.toFixed(2);

//     cart.forEach((product) => {
//         let newProductRow = productsTable.insertRow(-1);
//         newProductRow.setAttribute('id', 'tr-product' + product.id);
//         newProductRow.insertCell(0).innerHTML = product.name;
//         newProductRow.insertCell(1).innerHTML = product.price;
//         newProductRow.insertCell(2).innerHTML = product.quantity;
//         newProductRow.insertCell(3).innerHTML = product.subtotalWithDiscount;
//         newProductRow.insertCell(4).innerHTML = `<button onclick='removeFromCart(${product.id})'>Delete</button>`;
//     });
// }
function printCart() {
    productsTable.innerHTML = ''; // Clean the existing content of the table

    // Fill the shopping cart modal manipulating the shopping cart dom
    document.getElementById('total_price').innerHTML = total.toFixed(2);

    cart.forEach((product) => {
        let newProductRow = productsTable.insertRow(-1);
        newProductRow.setAttribute('id', 'tr-product' + product.id);
        newProductRow.insertCell(0).innerHTML = product.name;
        newProductRow.insertCell(1).innerHTML = product.price;

        // Crear una celda con los botones, la cantidad y el incremento/decremento. 
        let quantityCell = newProductRow.insertCell(2);
        let quantityWrapper = document.createElement('div');
        quantityWrapper.classList.add('quantity-wrapper');
        let decrementButton = document.createElement('button');
        decrementButton.innerHTML = '-';
        decrementButton.addEventListener('click', () => {decrementQuantity(product.id);});
        let incrementButton = document.createElement('button');
        incrementButton.innerHTML = '+';
        incrementButton.addEventListener('click', () => {incrementQuantity(product.id);});
        let quantityDisplay = document.createElement('span');
        quantityDisplay.innerHTML = product.quantity;
        quantityWrapper.appendChild(decrementButton);
        quantityWrapper.appendChild(quantityDisplay);
        quantityWrapper.appendChild(incrementButton);
        quantityCell.appendChild(quantityWrapper);

        newProductRow.insertCell(3).innerHTML = product.subtotalWithDiscount;
        newProductRow.insertCell(4).innerHTML = `<button onclick='removeFromCart(${product.id})'>Delete</button>`;
    });
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
    const index = cart.findIndex(item => item.id === id); // Encuentra el índice del producto en el arreglo cart

    if (index !== -1) {

        cart.splice(index, 1); // Remueve el producto del arreglo cart

        calculateTotal(); // Actualizar el precio total
        printCart(); // Vuelve a generar la tabla del carrito
    }
}

function _emptyCartTable() {
    while (productsTable.hasChildNodes()) {
        productsTable.removeChild(productsTable.firstChild);
    }
}

function decrementQuantity(id) {
    const product = cart.find(item => item.id === id);

    if (product && product.quantity > 1) {
        product.quantity--;

        applyPromotionsCart(); // Actualizar subtotal de producto
        calculateTotal(); // Actualizar precio total
        printCart(); // Actualizar la tabla del carrito
    }
}

function incrementQuantity(id) {
    const product = cart.find(item => item.id === id);

    if (product) {
        product.quantity++;

        applyPromotionsCart(); // Actualizar subtotal de producto
        calculateTotal(); // Actualizar precio total
        printCart(); // Actualizar la tabla del carrito
    }
}

function open_modal() {
    console.log("Open Modal");
    cart = [];
    generateCart();
    applyPromotionsCart();
    calculateTotal();
    console.log('CART', cart);
    printCart();
}