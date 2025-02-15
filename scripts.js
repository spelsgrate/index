const button = document.getElementById('colorButton');
button.addEventListener('click', () => {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

const textInput = document.getElementById('textInput');
textInput.addEventListener('input', () => {
    document.querySelector('h1').textContent = textInput.value;
});

const quotes = [
    "To be, or not to be, that is the question.",
    "All the world's a stage, and all the men and women merely players.",
    "A rose by any other name would smell as sweet.",
    "The course of true love never did run smooth.",
    "If music be the food of love, play on."
];

const quoteButton = document.getElementById('quoteButton');
quoteButton.addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quoteDisplay').textContent = randomQuote;
});
