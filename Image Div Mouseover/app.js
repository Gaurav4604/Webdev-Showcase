const nodes = document.querySelectorAll('.hover-me-div');

const consoleMonitor = document.querySelector('#console');

const tracker = document.querySelector('.tracker-div');

const trackerHeight = 200;
const trackerWidth = 200;

let flag = false;

let timestamp;

let divMoveOnMouseEvent = (e) => {
    consoleMonitor.innerText = `mouse Coordinates; X = ${e.clientX}, Y = ${e.clientY}`;
    const x = e.clientX;
    const y = e.clientY;
    if(!flag){
        tracker.classList.add('active');
        flag = true;
    }
    tracker.style.setProperty('left', `${x - 200}px`);
    tracker.style.setProperty('top', `${y - 250}px`);
}


nodes.forEach((node) => {
    node.addEventListener('mousemove', (e) => {
        console.log(Date.now() - timestamp);
            if(!timestamp){
                timestamp = Date.now();
                divMoveOnMouseEvent(e);
            }
            else if (Date.now() - timestamp >= 10){
                timestamp = Date.now();
                divMoveOnMouseEvent(e);
            }
            else{
                node.onmouseover = divMoveOnMouseEvent(e);
            }
    });
    node.addEventListener('mouseout', () => {
        tracker.classList.remove('active');
        flag = false;
        consoleMonitor.innerText = 'mouse outside div';
    })
})