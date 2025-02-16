document.addEventListener('DOMContentLoaded', () => {
    const colorButton = document.getElementById('colorButton');
    const quoteButton = document.getElementById('quoteButton');
    const dateButton = document.getElementById('dateButton');
    const toggleImageButton = document.getElementById('toggleImageButton');
    const quoteDisplay = document.getElementById('quoteDisplay');
    const dateDisplay = document.getElementById('dateDisplay');
    const textInput = document.getElementById('textInput');
    const image = document.querySelector('img');

    // Change background color
    colorButton.addEventListener('click', () => {
        document.body.style.backgroundColor = getRandomColor();
    });

    // Show random Shakespeare quote
    quoteButton.addEventListener('click', () => {
        const quotes = [
            "To be, or not to be, that is the question.",
            "All the world's a stage, and all the men and women merely players.",
            "The course of true love never did run smooth.",
            "Some are born great, some achieve greatness, and some have greatness thrust upon them."
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteDisplay.textContent = randomQuote;
    });

    // Show current date and time
    dateButton.addEventListener('click', () => {
        const now = new Date();
        dateDisplay.textContent = now.toLocaleString();
    });

    // Toggle image visibility
    toggleImageButton.addEventListener('click', () => {
        image.style.display = (image.style.display === 'none' || image.style.display === '') ? 'block' : 'none';
    });

    // Change heading text if textInput exists
    if (textInput) {
        textInput.addEventListener('input', () => {
            document.querySelector('h1').textContent = textInput.value;
        });
    }

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    AOS.init();
});