// Function to add product to cart
function addToCart(button) {
    // Get the product details from the DOM
    const productDiv = button.parentElement;
    const name = productDiv.querySelector('h2').textContent;
    const price = parseFloat(productDiv.querySelector('.unit-price').dataset.price);
    const image = productDiv.querySelector('img').src;
    const quantity = parseInt(productDiv.querySelector('.quantity').value);

    // Retrieve the cart from localStorage
    let cart = localStorage.getItem('cart');
    if (!cart) {
        cart = [];
    } else {
        cart = JSON.parse(cart);
    }

    // Check if the product already exists in the cart
    let productExists = false;
    cart.forEach(product => {
        if (product.name === name) {
            product.quantity += quantity;
            productExists = true;
        }
    });

    // If the product does not exist, add a new entry
    if (!productExists) {
        cart.push({ name, price, image, quantity });
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();

    // Show notification
    const notification = document.getElementById('notification');
    notification.style.opacity = '1';

    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
    }, 5000);
}

// Function to change the quantity of a product on the products page
function changeProductQuantity(button, change) {
    const productDiv = button.parentElement.parentElement;
    const quantityInput = productDiv.querySelector('.quantity');
    let quantity = parseInt(quantityInput.value);
    quantity += change;

    // Ensure the quantity does not fall below 1
    if (quantity < 1) {
        quantity = 1;
    }

    quantityInput.value = quantity;

    // Update the total price for the product
    const unitPrice = parseFloat(productDiv.querySelector('.unit-price').dataset.price);
    const totalPrice = productDiv.querySelector('.total-price');
    totalPrice.textContent = `${(unitPrice * quantity).toLocaleString()}`;
}

// Function to update the quantity of a product directly via the input field
function updateProductQuantity(input) {
    const productDiv = input.parentElement.parentElement;
    let quantity = parseInt(input.value);

    // Ensure the quantity does not fall below 1
    if (isNaN(quantity) || quantity < 1) {
        quantity = 1;
    }

    input.value = quantity;

    // Update the total price for the product
    const unitPrice = parseFloat(productDiv.querySelector('.unit-price').dataset.price);
    const totalPrice = productDiv.querySelector('.total-price');
    totalPrice.textContent = `${(unitPrice * quantity).toLocaleString()}`;
}

// Function to update the cart count
function updateCartCount() {
    let cart = localStorage.getItem('cart');
    if (!cart) {
        cart = [];
    } else {
        cart = JSON.parse(cart);
    }

    let totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalCount;
}

function displayCart() {
    let cart = localStorage.getItem('cart');
    if (!cart) {
        cart = [];
    } else {
        cart = JSON.parse(cart);
    }

    const cartDiv = document.getElementById('cart-div');
    cartDiv.innerHTML = '';

    let totalAmount = 0;
    let totalPrice = 0;

    if (cart.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'В вашей корзине нету продуктов';
        cartDiv.appendChild(emptyMessage);
    } else {
        cart.forEach((item, index) => {
            totalAmount += item.quantity;
            totalPrice += item.price * item.quantity;

            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `
                <div>
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <input type="hidden" id="amount" value="${item.name}">
                        <h2>${item.name}</h2>

                        <p>${item.price} сум</p>

                        <div class="amountProduct">
                            <button onclick="changeQuantity(${index}, -1)">-</button>
                            <input type="text" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)" min="1">
                            <button onclick="changeQuantity(${index}, 1)">+</button>
                        </div>
                        <button сlass="removeButton" onclick="removeFromCart(${index})">Удалить</button>
                    </div>
                </div>
            `;
            cartDiv.prepend(itemDiv);
        });
    }

    // Update the cart summary
    const summaryDiv = document.querySelector('.cart-summary');
    summaryDiv.innerHTML = `
            <div class="cart-info">
                <h2>Ваш заказ</h2>
                ${cart.length === 0 ? '' : cart.map(item => `<p>${item.name} (кг): <span>${item.quantity}</span></p>`).join('')}
                ${cart.length === 0 ? '' : cart.map(item => `<p>${item.name} (сум): <span>${(item.price * item.quantity).toLocaleString()}</span></p>`).join('')}

                ${cart.length === 0 ? '' : cart.map(item => `
                <input type="hidden" value="${item.name}" readonly>
                 <input type="hidden" value="${item.quantity}" readonly>
                 <input type="hidden" value="${item.price}" readonly>
            `).join('')}
                <h4>Итого: <span>${cart.length === 0 ? '0 сум' : totalPrice.toLocaleString() + ' сум'}</span></h4>
                <input type="hidden" id="amount" value="${totalAmount}">
                <input type="hidden" id="price" value="${totalPrice}">
            </div>
            <div class="input-name">
                <label for="name">Ф.И.О<span>*</span></label>
                <input type="text" id="name" placeholder="Бахром Баходиров" required>
            </div>
            <div class="input-name">
                <label for="number">Номер телефона<span>*</span></label>
                <input type="text" id="number" placeholder="+998 (99) 068-00-00" required>
            </div>
            <div class="input-name">
                <label for="adress">Адрес<span>*</span></label>
                <input type="text" id="adress" placeholder="Янгиюль.Т Гулбахор" required onclick="showMap()">
            </div>
            <a href="success.html">
                <button>Оформить</button>
            </a>
    `;
}


// Function to update the quantity of a product based on the input field
function updateQuantity(index, value) {
    let cart = localStorage.getItem('cart');
    if (cart) {
        cart = JSON.parse(cart);
        let newQuantity = parseInt(value);

        // Ensure the quantity does not fall below 1
        if (isNaN(newQuantity) || newQuantity < 1) {
            newQuantity = 1;
        }

        cart[index].quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
        updateCartCount();
    }
}


// Function to change the quantity of a product in the cart
function changeQuantity(index, change) {
    let cart = localStorage.getItem('cart');
    if (cart) {
        cart = JSON.parse(cart);
        cart[index].quantity += change;

        // Ensure the quantity does not fall below 1
        if (cart[index].quantity < 1) {
            cart[index].quantity = 1;
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
        updateCartCount();
    }
}


// Function to remove product from cart
function removeFromCart(index) {
    let cart = localStorage.getItem('cart');
    if (cart) {
        cart = JSON.parse(cart);
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
        updateCartCount();
    }
}



// Check if we are on the cart page and display items
if (window.location.pathname.endsWith('cart.html')) {
    displayCart();
} else {
    updateCartCount();
}


