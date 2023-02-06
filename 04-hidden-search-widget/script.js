const searchDiv = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
  searchDiv.classList.toggle('active');
  input.focus()
})