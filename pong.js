const canvas = document.getElementById('pongCanvas');
const context = canvas.getContext('2d');

const paddleHitSound = document.getElementById('paddleHitSound');

let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    speed: 5,
    dx: 5,
    dy: 5
};

let paddle1 = {
    width: 10,
    height: 100,
    x: 0,
    y: canvas.height / 2 - 50,
    dy: 5,
    speed: 5
};

let paddle2 = {
    width: 10,
    height: 100,
    x: canvas.width - 10,
    y: canvas.height / 2 - 50,
    dy: 5,
    speed: 5
};

let paddle3 = {
    width: 100,
    height: 10,
    x: canvas.width / 2 - 50,
    y: 0,
    dx: 5,
    speed: 5
};

let paddle4 = {
    width: 100,
    height: 10,
    x: canvas.width / 2 - 50,
    y: canvas.height - 10,
    dx: 5,
    speed: 5
};

let colorChangeInterval = 10;
let frameCount = 0;

function drawBall() {
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    context.fillStyle = ball.color;
    context.fill();
    context.closePath();
}

function drawPaddle(paddle) {
    context.fillStyle = paddle.color;
    context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function drawBackground() {
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#FF5733');
    gradient.addColorStop(1, '#C70039');
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy *= -1;
    }

    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx *= -1;
    }

    // Check for paddle collisions
    if (ball.x - ball.radius < paddle1.x + paddle1.width && ball.y > paddle1.y && ball.y < paddle1.y + paddle1.height) {
        ball.dx *= -1;
        paddleHitSound.play();
    }

    if (ball.x + ball.radius > paddle2.x && ball.y > paddle2.y && ball.y < paddle2.y + paddle2.height) {
        ball.dx *= -1;
        paddleHitSound.play();
    }

    if (ball.y - ball.radius < paddle3.y + paddle3.height && ball.x > paddle3.x && ball.x < paddle3.x + paddle3.width) {
        ball.dy *= -1;
        paddleHitSound.play();
    }

    if (ball.y + ball.radius > paddle4.y && ball.x > paddle4.x && ball.x < paddle4.x + paddle4.width) {
        ball.dy *= -1;
        paddleHitSound.play();
    }
}

function update() {
    moveBall();

    // Make left paddle follow the ball only when the ball is traveling left
    if (ball.dx < 0) {
        if (ball.y < paddle1.y + paddle1.height / 2) {
            paddle1.y -= paddle1.speed;
        } else if (ball.y > paddle1.y + paddle1.height / 2) {
            paddle1.y += paddle1.speed;
        }
    }

    // Make right paddle follow the ball only when the ball is traveling right
    if (ball.dx > 0) {
        if (ball.y < paddle2.y + paddle2.height / 2) {
            paddle2.y -= paddle2.speed;
        } else if (ball.y > paddle2.y + paddle2.height / 2) {
            paddle2.y += paddle2.speed;
        }
    }

    // Make top paddle follow the ball only when the ball is traveling up
    if (ball.dy < 0) {
        if (ball.x < paddle3.x + paddle3.width / 2) {
            paddle3.x -= paddle3.speed;
        } else if (ball.x > paddle3.x + paddle3.width / 2) {
            paddle3.x += paddle3.speed;
        }
    }

    // Make bottom paddle follow the ball only when the ball is traveling down
    if (ball.dy > 0) {
        if (ball.x < paddle4.x + paddle4.width / 2) {
            paddle4.x -= paddle4.speed;
        } else if (ball.x > paddle4.x + paddle4.width / 2) {
            paddle4.x += paddle4.speed;
        }
    }
}

function updateColors() {
    if (frameCount % colorChangeInterval === 0) {
        ball.color = getRandomColor();
        paddle1.color = getRandomColor();
        paddle2.color = getRandomColor();
        paddle3.color = getRandomColor();
        paddle4.color = getRandomColor();
    }
}

function draw() {
    drawBackground();
    drawBall();
    drawPaddle(paddle1);
    drawPaddle(paddle2);
    drawPaddle(paddle3);
    drawPaddle(paddle4);
    update();
    updateColors();
    frameCount++;
}

// Initialize colors
ball.color = getRandomColor();
paddle1.color = getRandomColor();
paddle2.color = getRandomColor();
paddle3.color = getRandomColor();
paddle4.color = getRandomColor();

let gameInterval;

document.getElementById('startButton').addEventListener('click', function() {
    if (!gameInterval) {
        gameInterval = setInterval(draw, 1000 / 60);
    }
});

document.getElementById('stopButton').addEventListener('click', function() {
    if (gameInterval) {
        clearInterval(gameInterval);
        gameInterval = null;
    }
});
