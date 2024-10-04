let intervalId = setInterval(function() {
    timerSeconds--;
    if (timerSeconds === 0) {
      clearInterval(intervalId);
      alert("Вы победили в конкурсе!");
    }
  }, 1000);
  