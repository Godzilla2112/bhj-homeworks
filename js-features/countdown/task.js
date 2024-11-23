let timerSeconds = parseInt(document.getElementById("timer").textContent, 10);
if (isNaN(timerSeconds)) {
  console.error("Не удалось получить корректное значение таймера.");
} else {
  let intervalId = setInterval(function() {
    timerSeconds--;

    document.getElementById("timer").textContent = timerSeconds;

if (timerSeconds === 0) {
  clearInterval(intervalId);
  alert("Вы победили в конкурсе!");
}
  }, 1000);
}