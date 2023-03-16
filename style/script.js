const grid = document.querySelector('.grid');
const resetGrid = document.querySelector('.reset');
const btnChangeSize = document.querySelector('.btnChangeSize');
const inputColor = document.querySelector('.inputColor');
const btnClear = document.querySelector('.btnClear');
const btnPencil = document.querySelector('.btnPencil');
const rndRGB = document.querySelector('.btnRandonPencil');


let squares = [];
let user,userSquares,color,state;

btnPencil.addEventListener('click', ()=> {
    state = 'btnPencil';
});
inputColor.addEventListener('click' , () => {
    state = 'inputColor';
})
/*btnPencil.addEventListener('click',(e) => {
    color = inputColor.value;
});*/
btnClear.addEventListener('click', (e) => {
    state = 'clear';
    //inputColor.value="#ffffff";
});
rndRGB.addEventListener('click', () => {
    state = 'rnd';
});
grid.addEventListener('mouseover', function (e) {
    switch (state) {
        case 'clear':
            e.target.style.backgroundColor ="#ffffff";
            break;
            case 'inputColor':
                color = inputColor.value; // conflito com btn clear
                if (e.target.classList.contains('grid-item')) {
                    console.log(inputColor.value);
                    e.target.style.backgroundColor = inputColor.value;
                }
                break;
            case 'btnPencil':
                if (e.target.classList.contains('grid-item')) {
                    console.log(inputColor.value);
                    e.target.style.backgroundColor = inputColor.value;
                }
            break;
            case 'rnd':
                color = rndRgb();
                console.log(color);
                e.target.style.backgroundColor = color;
            break;
        default:
            console.log('erro!');
            break;
    }


});
grid.addEventListener('mouseleave', function () {
    grid.style.backgroundColor = 'white';

});
resetGrid.addEventListener('click', () => {
    squares.forEach(squares=> {
        grid.removeChild(squares);3
    });
    squares = [];
    makeGrid(userSquares,userSquares);
});
btnChangeSize.addEventListener('click', () => {
    squares.forEach(squares=> {
        grid.removeChild(squares);3
    });
    squares = [];
    userSquares = askSize();
    makeGrid(userSquares, userSquares);
     
});
function rndRgb() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rbgColor = `rgb(${r},${g},${b})`;
    console.log(rbgColor);
    return rbgColor;
}
function askSize() {
    do {
        user = Number(prompt('Number of squares per side:     (MAX: 55)'));
    } while (user > 55 || user === 0 || isNaN(user));
    return user;
}
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
userSquares = askSize();
makeGrid(userSquares, userSquares);

