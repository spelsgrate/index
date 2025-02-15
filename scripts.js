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

const dateButton = document.getElementById('dateButton');
dateButton.addEventListener('click', () => {
    const now = new Date();
    document.getElementById('dateDisplay').textContent = now.toString();
});

const toggleImageButton = document.getElementById('toggleImageButton');
toggleImageButton.addEventListener('click', () => {
    const image = document.querySelector('img');
    image.style.display = image.style.display === 'none' ? 'block' : 'none';
});
s
const textColorButton = document.getElementById('textColorButton');
textColorButton.addEventListener('click', () => {
    document.querySelector('h1').style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
});

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts."
];

const jokeButton = document.getElementById('jokeButton');
jokeButton.addEventListener('click', () => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById('jokeDisplay').textContent = randomJoke;
});

const toggleParagraphButton = document.getElementById('toggleParagraphButton');
toggleParagraphButton.addEventListener('click', () => {
    const paragraph = document.querySelector('p');
    paragraph.style.display = paragraph.style.display === 'none' ? 'block' : 'none';
});
