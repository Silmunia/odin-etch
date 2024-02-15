
const gridSize = 16;
const containerSize = 700;
const squareSize = containerSize / gridSize;

const container = document.querySelector('#container');
container.style['display'] = 'flex';
container.style['width'] = containerSize + 'px';
container.style['height'] = containerSize + 'px';
container.style['flex-wrap'] = 'wrap';
container.style['border-style'] = 'solid';
container.style['border-color'] = 'black';
container.style['border-width'] = '1px';

for (let i = 0; i < gridSize * gridSize; i++) {
    const newSquare = document.createElement('div');
    newSquare.style['height'] = squareSize + 'px';
    newSquare.style['width'] = squareSize + 'px';
    newSquare.style['background-color'] = 'white';

    newSquare.addEventListener('mouseenter', (event) => {
        event.target.style['background-color'] = 'black';
    });

    container.appendChild(newSquare);
}