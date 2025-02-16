document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 30 },
    { id: 2, name: "Product 2", price: 10 },
    { id: 3, name: "Product 3", price: 40 },
    { id: 3, name: "Product 3", price: 20 },
  ];

  const cart = [];
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceMessage = document.getElementById("total-price");
  const checkoutButton = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
        <span>${product.name} - $${product.price}</span>
        <button data-id="${product.id}">Add to cart</button>
        `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
      const productID = parseInt(e.target.getAttribute("data-id"));
      const selectedProduct = products.find((p) => p.id === productID);
      addToCart(selectedProduct);
      console.log(cart);
    }
  });

  function addToCart(p) {
    cart.push(p);
    renderCart();
  }

  function renderCart() {
    cartItems.innerText = "";
    let totalPrice = 0;
    cartTotalMessage.classList.remove("hidden");
    cart.forEach((item, index) => {
      totalPrice += item.price;
      const cartItem = document.createElement("div");
      cartItem.innerHTML = `
        ${item.name} - $${item.price}
        `;
      cartItems.appendChild(cartItem);
    });
    totalPriceMessage.innerHTML = totalPrice;
  }

  checkoutButton.addEventListener("click", () => {
    cart.length = 0;
    alert("Checkout success");
    renderCart();
    cartTotalMessage.classList.add("hidden");
  });
});
