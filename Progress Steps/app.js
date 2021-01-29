const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');  //getting array of circles

let active = 1; //stating which circle is active

next.addEventListener('click', () => {
    active++;
    if (active > circles.length) {
        active = circles.length;
    }
    update();
})

prev.addEventListener('click', () => {
    active--;
    if (active < 1) {
        active = 1;
    }
    update();
})

function update() {
    // calling function on circle, where parameters passed via the nodelist is element circle and its node index
    circles.forEach((circle, idx) => {
        if (idx < active) {
            circle.classList.add('active'); //toggling active parameter to the given circle
        }
        else {
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active'); //getting nodelist of classes with active in them
    progress.style.width = (((actives.length - 1) / (circles.length - 1)) * 100) + "%"; //giving container a width percentage defined by actives length (variable) and circles length (contant)

    if (active === 1) {
        prev.disabled = true;
    }
    else if (active === circles.length) {
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }

}