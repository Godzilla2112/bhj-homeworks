const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter'); 
let isExpand = true;

cookie.style.width = '200px';
cookie.style.height = '200px';

cookie.addEventListener('click', () => {

  if (isExpand) {
    cookie.style.height = '250px'; 
  } else {
    cookie.style.height = '200px'; 
  }

 
  counter.textContent = parseInt(counter.textContent) + 1;

  isExpand = !isExpand;
});