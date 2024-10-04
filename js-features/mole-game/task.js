const holes = document.querySelectorAll('.hole');
let wins = 0;
let losses = 0;

holes.forEach((hole, index) => {
  hole.addEventListener('click', () => {
    // Проверяем наличие класса hole_has-mole
    if (hole.classList.contains('hole_has-mole')) {
      // Увеличиваем количество побед
      wins++;
      console.log(`Победы: ${wins}`);
    } else {
      // Увеличиваем количество поражений
      losses++;
      console.log(`Поражения: ${losses}`);
    }

    // Обновляем статистику
    updateStats();

    // Генерируем новую случайную лунку с кротом
    generateMole();
  });
});

function generateMole() {
  // Удаляем класс hole_has-mole со всех лунок
  holes.forEach((hole) => {
    hole.classList.remove('hole_has-mole');
  });

  // Выбираем случайную лунку и добавляем ей класс hole_has-mole
  const randomIndex = Math.floor(Math.random() * holes.length);
  getHole(randomIndex).classList.add('hole_has-mole');
}

function updateStats() {
  // Проверяем, достигнута ли победа
  if (wins === 10) {
    console.log('Вы победили!');
    // Сбрасываем статистику
    wins = 0;
    losses = 0;
  }

  // Проверяем, достигнуто ли поражение
  if (losses === 5) {
    console.log('Вы проиграли!');
    // Сбрасываем статистику
    wins = 0;
    losses = 0;
  }
}
