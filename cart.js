function saveToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart') || "[]");
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert("Item added to cart!");
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart') || "[]");
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.reload();
}
