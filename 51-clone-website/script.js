const burger = document.getElementById('burger');
const hiddenMenu = document.getElementById('hidden-menu');
const hiddenLayer = document.querySelector('.hidden-layer');
const feedBurger = document.querySelector('.feed-burger');
const hiddenFM = document.querySelector('.hidden-feed-menu');
burger.addEventListener('click', () => {
  hiddenMenu.classList.toggle('hidden');
  hiddenLayer.classList.toggle('hidden');
});

hiddenLayer.addEventListener('click', () => {
  hiddenMenu.classList.toggle('hidden');
  hiddenLayer.classList.toggle('hidden');
});

feedBurger.addEventListener('mouseenter', () => {
  hiddenFM.classList.remove('hidden');
});

feedBurger.addEventListener('mouseleave', () => {
  hiddenFM.classList.add('hidden');
});

hiddenFM.addEventListener('mouseenter', () => {
  hiddenFM.classList.remove('hidden');
});

hiddenFM.addEventListener('mouseleave', () => {
  hiddenFM.classList.add('hidden');
}); 