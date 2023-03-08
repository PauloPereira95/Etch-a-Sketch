const grid = document.querySelector('.grid');
const resetGrid = document.querySelector('.reset');
const btnChangeSize = document.querySelector('.btnChangeSize');
let squares = [];
let user,userSquares;

function makeGrid(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
        let square = document.createElement('div');
        square.classList.add('grid-item');
        squares.push(square);
        grid.appendChild(square);

    };
};

grid.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('grid-item')) {
        e.target.style.backgroundColor = 'blue';
    }


})
grid.addEventListener('mouseleave', function (e) {
    grid.style.backgroundColor = 'white';

});
function askSize() {
     do {
        user = Number(prompt('Number of squares per side'));
        console.log(user);
    } while (user > 100 || user === 'NaN' || user === 'undefined');
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
    userSquares = askSize();
    makeGrid(userSquares, userSquares);
     
});
userSquares = askSize();
makeGrid(userSquares, userSquares);

