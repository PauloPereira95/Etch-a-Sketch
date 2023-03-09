const grid = document.querySelector('.grid');
const resetGrid = document.querySelector('.reset');
const btnChangeSize = document.querySelector('.btnChangeSize');
const inputColor = document.querySelector('.inputColor');
const btnClear = document.querySelector('.btnClear');
const btnPencil = document.querySelector('.btnPencil');



let color;
let squares = [];
let user,userSquares;

function makeGrid(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
        let square = document.createElement('div');
        square.classList.add('grid-item');
        squares.push(square);
        grid.style.maxWidth='700px';
        grid.style.maxHeigth='700px';
        grid.appendChild(square);

    };
};

inputColor.addEventListener('click', () => {
    color = inputColor.value;
});
btnPencil.addEventListener('click',(e) => {
    color = inputColor.value;
});
btnClear.addEventListener('click', (e) => {
    color = '#FFFFFF';
});

grid.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('grid-item')) {
        console.log(inputColor.value);
        e.target.style.backgroundColor = color;
    }


});
grid.addEventListener('mouseleave', function () {
    grid.style.backgroundColor = 'white';

});
function askSize() {
    do {
        user = Number(prompt('Number of squares per side:     (MAX: 55)'));
    } while (user > 55 || user === 0 || isNaN(user));
    return user;
}
resetGrid.addEventListener('click', () => {
    squares.forEach(squares=> {
        grid.removeChild(squares);3
    });
    squares = [];
    makeGrid(16,16);
});
btnChangeSize.addEventListener('click', () => {
    squares.forEach(squares=> {
        grid.removeChild(squares);3
    });
    squares = [];
    userSquares = askSize();
    makeGrid(userSquares, userSquares);
     
});
userSquares = askSize();
makeGrid(userSquares, userSquares);

