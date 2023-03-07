const grid = document.querySelector('.grid');

function makeGrid(rows,cols) {
    grid.style.setProperty('--grid-rows',rows);
    grid.style.setProperty('--grid-cols',cols);
    for (let c = 0; c < (rows* cols); c++) {
        let cel = document.createElement('div');
        grid.appendChild(cel).className ="grid-item";
        
    };
};
makeGrid(16,16);