const button = document.getElementById('colorButton');
button.addEventListener('click', () => {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

const textInput = document.getElementById('textInput');
textInput.addEventListener('input', () => {
    document.querySelector('h1').textContent = textInput.value;
});
