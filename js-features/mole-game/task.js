const holes = document.querySelectorAll('.hole');
const winsCounter = document.getElementById('dead');
const lossesCounter = document.getElementById('lost');
let wins = 0;   // для попаданий
let losses = 0; // для промахов

holes.forEach(hole => { // цикл перебора найденных лунок
  hole.addEventListener('click', () => { // навешивание на каждую лунку слушателя клика
    if (hole.classList.contains('hole_has-mole')) { // проверка, содержит ли лунка класс с кротом, если да, то
      winsCounter.textContent = ++wins; // увеличили счётчик попаданий на странице
      
      if (wins === 10) { // проверяем достижение предела
        alert('Вы победили!');
        resetStats(); // вызываем ф-ию обнуления статистики
      }
    } else { // если нет, то
      lossesCounter.textContent = ++losses; // увеличили счётчик промахов на странице
      
      if (losses === 5) { // проверяем достижение предела
        alert('Вы проиграли!');
        resetStats();
      }
    }
  });
});

function resetStats() { // ф-ия обнуления статистики
  wins = 0;   // обнуление для значения попаданий
  losses = 0; // обнуление для значения промахов
  winsCounter.textContent = 0;   // обнуление попаданий на странице
  lossesCounter.textContent = 0; // обнуление промахов на странице
}