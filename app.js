const grid = document.getElementById('grid');
const eraserButton = document.getElementById('eraser');
const eraseAllButton = document.getElementById('eraseAll');
let mouseDown = false;
let isEraserSelected = false;
let boxColor = 'black';

document.addEventListener('DOMContentLoaded', handleGrid);
eraserButton.addEventListener('click', changeEraserState);
eraseAllButton.addEventListener('click', eraseGrid);

document.body.onmousedown = e => {
    e.buttons === 1 ? mouseDown = true : mouseDown = false;
};

document.body.onmouseup = () => {
    mouseDown = false;
};

function changeEraserState() {
    isEraserSelected = !isEraserSelected;
        
    if(isEraserSelected) {
        eraserButton.textContent = 'toggle painter';
        grid.childNodes.forEach((node) => {
            node.classList.remove('hover-element');
        });
        return boxColor = 'white';
    }
    
    else {
        eraserButton.textContent = 'toggle eraser'; 
        grid.childNodes.forEach((node) => {
            node.classList.add('hover-element');
        });

        return boxColor = 'black';
    }
};

function eraseGrid() {
    grid.childNodes.forEach((node) => {
        node.removeAttribute('style');
    });
};

function handleGrid() {
    for (let i = 1; i <= (16*16); i++){
        let items = document.createElement("div");
        grid.style.setProperty('--grid-rows', 16);
        grid.style.setProperty('--grid-cols', 16);
        grid.appendChild(items).className = "grid-items";
        items.classList.add('hover-element');
        items.id = i;
        
        items.addEventListener('mouseover', (e) => {
            if (mouseDown) {
                e.target.style.backgroundColor = boxColor;
                e.target.style.backgroundColor === 'white' ? e.target.removeAttribute('style') : e;
            }
        });

        items.addEventListener('mousedown', (e) => {
            e.target.style.backgroundColor = boxColor;
            e.target.style.backgroundColor === 'white' ? e.target.removeAttribute('style') : e;
        });
    };
};