const cookie = document.getElementById('cookie');
const counter = document.getElementById('counter');

// Инициализируем флаг размера
let isExpand = true;

// Обработчик клика на печеньку
cookie.addEventListener('click', () => {
  // Изменяем размер печеньки
  if (isExpand) {
    cookie.style.width = '200px';
    cookie.style.height = '200px';
  } else {
    cookie.style.width = '100px';
    cookie.style.height = '100px';
  }
  
  // Увеличиваем счетчик
  counter.textContent = parseInt(counter.textContent) + 1;
  
  // Меняем значение флага
  isExpand = !isExpand;
});
