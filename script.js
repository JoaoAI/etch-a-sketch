const container = document.getElementById('container');
const newGridButton = document.getElementById('newGridButton');

function createGrid(squaresPerSide) {
    container.innerHTML = '';

    const squareSize = 800 / squaresPerSide;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener('mouseover', changeColor);
        container.appendChild(square);
    }
}

function changeColor(event) {
    event.target.style.backgroundColor = '#00F7F7';
}

newGridButton.addEventListener('click', () => {
    let squaresPerSide = parseInt(prompt("Enter the number of squares per side (max 100):", "16"));

    if (squaresPerSide && squaresPerSide >= 1 && squaresPerSide <= 100) {
        createGrid(squaresPerSide);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

createGrid(16);
