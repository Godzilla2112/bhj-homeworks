const rotators = document.querySelectorAll('.rotator__case');
let currentIndex = 0;

function changeRotator() {
    rotators[currentIndex].classList.remove('rotator__case_active');

    currentIndex = (currentIndex + 1) % rotators.length;

    rotators[currentIndex].classList.add('rotator__case_active');
}

setInterval(changeRotator, 1000);

