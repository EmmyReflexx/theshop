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