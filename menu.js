
const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.nav-links');

hamburger.addEventListener('click', () =>{
   links.classList.toggle('display-links')
})