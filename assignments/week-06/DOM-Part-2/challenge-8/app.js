/**
    Write your challenge solution here
*/

const totalCartItems = {};

const itemsRendredInCart = [];

function addToCart(productName, productPrice) {
    if (totalCartItems[productName]) {
        totalCartItems[productName].stock++;
        totalCartItems[productName].singlePrice = productPrice;
        totalCartItems[productName].totalPrice = (
            productPrice * totalCartItems[productName].stock
        ).toFixed(2);
    } else {
        totalCartItems[productName] = {
            stock: 1,
            singlePrice: productPrice,
            totalPrice: productPrice,
        };
    }
    if (!itemsRendredInCart.includes(productName)) {
        itemsRendredInCart.push(productName);
        createNewProductsInCart(productName);
    } else {
        renderAllProducts();
    }
}

// Rendering all products in cart

function renderAllProducts() {
    for (let key in totalCartItems) {
        createNewProductsInCart(key);
    }
}

// Creating all products in cart

const emptyCartNotice = document.querySelector(".empty-cart");

function createNewProductsInCart(productName) {
    emptyCartNotice.remove();
    document.querySelectorAll(".cart-item").forEach((element) => {
        if (element.firstChild.textContent == productName) {
            element.remove();
        }
    });

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    const cartItemName = document.createElement("p");
    cartItemName.classList.add("cart-item-name");
    cartItemName.textContent = productName;

    const cartItemCalculation = document.createElement("div");
    cartItemCalculation.classList.add("cart-item-calculation");

    const quantityControls = document.createElement("div");
    quantityControls.classList.add("quantity-controls");

    const cartItemNumbers = document.createElement("p");
    cartItemNumbers.classList.add("cart-item-numbers");
    cartItemNumbers.textContent = totalCartItems[productName].stock;

    const increaseCartItem = document.createElement("button");
    increaseCartItem.classList.add("increase-cart-item");
    increaseCartItem.textContent = "+";

    // Increasing items count in cart
    increaseCartItem.addEventListener("click", () => {
        totalCartItems[productName].stock++;
        cartItemNumbers.textContent = totalCartItems[productName].stock;
        renderAllProducts();
    });

    const decreaseCartItem = document.createElement("button");
    decreaseCartItem.classList.add("decrease-cart-item");
    decreaseCartItem.textContent = "-";
    // Decreaing count of cart items
    decreaseCartItem.addEventListener("click", () => {
        if (totalCartItems[productName].stock > 0) {
            totalCartItems[productName].stock--;
            cartItemNumbers.textContent = totalCartItems[productName].stock;
            renderAllProducts();
        }
    });

    const cartItemPrice = document.createElement("div");
    cartItemPrice.classList.add("cart-item-price");
    cartItemPrice.textContent = `${(
        totalCartItems[productName].stock *
        totalCartItems[productName].singlePrice
    ).toFixed(2)}`;
    // totalCartItems[productName].totalPrice;

    const removeItem = document.createElement("button");
    removeItem.classList.add("remove-item");
    removeItem.textContent = "Remove";

    // Deleting product from cart
    removeItem.addEventListener("click", () => {
        delete totalCartItems[productName];
        cartItem.remove();
        totalSpends();

        itemsRendredInCart.splice(productName);
        if (document.getElementById("cart-items").children.length == 0) {
            document.getElementById("cart-items").appendChild(emptyCartNotice);
        }
    });

    quantityControls.appendChild(decreaseCartItem);
    quantityControls.appendChild(cartItemNumbers);
    quantityControls.appendChild(increaseCartItem);
    cartItemCalculation.appendChild(quantityControls);
    cartItemCalculation.appendChild(cartItemPrice);
    cartItemCalculation.appendChild(removeItem);
    cartItem.appendChild(cartItemName);
    cartItem.appendChild(cartItemCalculation);

    document.getElementById("cart-items").appendChild(cartItem);
    totalSpends();
}

// setInterval(() => {
//     // console.log(totalCartItems);
//     renderAllProducts();
// }, 1000);

function totalSpends() {
    const totalSpend = document.getElementById("cart-total");
    let spendings = 0;
    for (let key in totalCartItems) {
        spendings += Number(
            Number(
                totalCartItems[key].stock * totalCartItems[key].singlePrice
            ).toFixed(2)
        );
    }

    totalSpend.innerHTML = `<h3>Total: $ ${spendings.toFixed(2)}</h3>`;
}
