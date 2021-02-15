const btnP1 = document.querySelector('#p1');
const btnP2 = document.querySelector('#p2');
const btnReset = document.querySelector('#reset');
const limit = document.querySelector('#selection');
const Score1 = document.querySelector('#ScoreP1');
const Score2 = document.querySelector('#ScoreP2');

btnReset.disabled = true;


btnArray = [btnP1, btnP2, btnReset];
let adder = function () {
    if (Score1.textContent < limit.value && Score2.textContent < limit.value) {
        btnReset.disabled = false;
        switch (this.id) {
            case 'p1':
                Score1.textContent = parseInt(Score1.textContent) + 1;
                if (Score1.textContent == limit.value) {
                    Score1.style.color = 'green';
                    Score2.style.color = 'red';
                    btnP1.disabled = btnP2.disabled = true;
                }
                break;
            case 'p2':
                Score2.textContent = parseInt(Score2.textContent) + 1;
                if (Score2.textContent == limit.value) {
                    Score1.style.color = 'red';
                    Score2.style.color = 'green';
                    btnP1.disabled = btnP2.disabled = true;
                }
                break;
        }
    }
    if (this.id == 'reset') {
        Score1.textContent = Score2.textContent = 0;
        Score1.style.color = 'black';
        Score2.style.color = 'black';
        btnReset.disabled = true;
        btnP1.disabled = btnP2.disabled = false;
    }
}

for (let i of btnArray)
    i.addEventListener('click', adder);

limit.addEventListener('change', function () {
    Score1.textContent = Score2.textContent = 0;
    Score1.style.color = 'black';
    Score2.style.color = 'black';
    btnReset.disabled = true;
    btnP1.disabled = btnP2.disabled = false;
})
