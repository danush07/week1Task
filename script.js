const products = [
  {
    id: 1,
    name: "Chair",
    image: "https://i.ibb.co/3yT2CNB/Image-2.png",
    price: 20.0,
    quantity: 0,
  },
  {
    id: 2,
    name: "ChairTwo",
    image: "https://i.ibb.co/7KCZpkC/Image-1.png",
    price: 30.0,
    quantity: 0,
  },
  {
    id: 3,
    name: "ChairFour",
    image: "https://i.ibb.co/QfVhPBq/Image.png",
    price: 25.0,
    quantity: 0,
  },
  {
    id: 4,
    name: "Product4",
    image: "https://i.ibb.co/QfVhPBq/Image.png",
    price: 15.0,
    quantity: 0,
  },
  {
    id: 5,
    name: "Product5",
    image: "https://i.ibb.co/3yT2CNB/Image-2.png",
    price: 22.0,
    quantity: 0,
  },
  {
    id: 6,
    name: "Product6",
    image: "https://i.ibb.co/7KCZpkC/Image-1.png",
    price: 18.0,
    quantity: 0,
  },
  {
    id: 7,
    name: "Product7",
    image: "https://i.ibb.co/QfVhPBq/Image.png",
    price: 35.0,
    quantity: 0,
  },
  {
    id: 8,
    name: "Product8",
    image: "https://i.ibb.co/QfVhPBq/Image.png",
    price: 28.0,
    quantity: 0,
  },
];

const cart = [];
const cartList = document.getElementById("cart");
if (cart.length === 0) {
  cartList.innerHTML = "<p>Your Cart is empty</p>";
}

const productsContainer = document.getElementById("products-container");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
        <img class="product-image" src="${product.image}" alt="${product.name}">
        <div class="card-footer">
          <div class="product-details">
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
          </div>
          <div class="action">
            <button type="button" onclick="addToCart(products[${
              product.id - 1
            }])">Add to cart</button>
          </div>
        </div>
      `;

  productsContainer.appendChild(card);
});

function addToCart(product) {
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

function removeFromCart(productId) {
  const index = cart.findIndex((item) => item.id === productId);

  if (index !== -1) {
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
    } else {
      cart.splice(index, 1);
    }

    console.log(cart);
    updateCart();
  }
}

function updateCart() {
  const cartList = document.getElementById("cart");
  const totalPriceSpan = document.getElementById("total-price");
  const averagePriceSpan = document.getElementById("average-price");

  if (cart.length === 0) {
    cartList.innerHTML = "<p>Cart is empty</p>";
    totalPriceSpan.textContent = "0.00";
    averagePriceSpan.textContent = "0.00";
    return;
  }

  cartList.innerHTML = "";

  let totalItems = 0;
  let totalPrices = 0;

  let currentRow = document.createElement("div");
  currentRow.className = "cart-row";

  cart.forEach((item, index) => {
    if (index % 4 === 0 && index !== 0) {
      cartList.appendChild(currentRow);
      currentRow = document.createElement("div");
      currentRow.className = "cart-row";
    }

    const cartItem = document.createElement("li");
    cartItem.className = "cart-item";

    const productImage = document.createElement("img");
    productImage.src = item.image;
    productImage.className = "cart-product-image";
    cartItem.appendChild(productImage);

    cartItem.innerHTML += `<span>${item.name} - Quantity: ${
      item.quantity
    } - Price: $${(item.price * item.quantity).toFixed(2)}</span>`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.onclick = () => removeFromCart(item.id);
    cartItem.appendChild(removeButton);

    currentRow.appendChild(cartItem);

    totalItems += item.quantity;
    totalPrices += item.price * item.quantity;
  });

  if (currentRow.childNodes.length > 0) {
    cartList.appendChild(currentRow);
  }

  const totalPrice = totalPrices.toFixed(2);
  const averagePrice = totalPrices / totalItems || 0;

  totalPriceSpan.textContent = totalPrice;
  averagePriceSpan.textContent = averagePrice.toFixed(2);
}
function sortCart() {
  const sortBy = document.getElementById("sort-by").value;

  if (sortBy === "name") {
    cart.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "price") {
    cart.sort((a, b) => a.price - b.price);
  }

  updateCart();
}

function clearCart() {
  cart.length = 0;
  updateCart();
}
