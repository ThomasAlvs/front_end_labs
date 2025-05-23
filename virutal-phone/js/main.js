const display = document.querySelector('input[type=tel]')

const teclas = document.querySelectorAll('.teclado input[type="button"]');

const clearIcon = document.querySelector('.icon');


teclas.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.value;
    });
});

clearIcon.addEventListener('click', () => {
    display.value = ''; 
});