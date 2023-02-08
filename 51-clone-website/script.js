const burger = document.getElementById('burger');
const hiddenMenu = document.getElementById('hidden-menu')
burger.addEventListener('click', () => {
  hiddenMenu.classList.toggle('hidden');
})