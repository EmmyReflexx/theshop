document.querySelector('.hamburger-menu').addEventListener('click', () => {
  document.querySelector('.hamburger-menu').classList.toggle('mobile-active')
  document.querySelector('.header-middle').classList.toggle('mobile-active')
  document.querySelector('.hamburger-menu-overlay').classList.toggle('mobile-active')
})

document.querySelector('.hamburger-menu-overlay').addEventListener('click', () => {
  document.querySelector('.hamburger-menu').classList.remove('mobile-active')
  document.querySelector('.header-middle').classList.remove('mobile-active')
  document.querySelector('.hamburger-menu-overlay').classList.remove('mobile-active')
})

document.querySelectorAll('.header-middle a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.hamburger-menu').classList.remove('mobile-active')
    document.querySelector('.header-middle').classList.remove('mobile-active')
    document.querySelector('.hamburger-menu-overlay').classList.remove('mobile-active')
  })
});

const displayElement = document.querySelector('.display')
const cartButton = document.querySelectorAll('.add-to-cart');
const cartElement = document.getElementById('cart-quantity');
let cartQuantity = 0;
let cartQuantityElement = cartElement.innerHTML = cartQuantity;

let intervalState;

cartButton.forEach(cart => {
  cart.addEventListener('click', () => {
    cartIncrease()
    displayElement.classList.add('active-display');

    clearInterval(intervalState)

    intervalState = setInterval(() => {
      displayElement.classList.remove('active-display');
    }, 500)
  })
});

function cartIncrease() {
  cartQuantity++
  cartQuantityElement = cartElement.innerHTML = cartQuantity;
}