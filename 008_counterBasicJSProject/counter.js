let number = document.querySelector('#number');
let decrease = document.querySelector('#decrease');
let reset = document.querySelector('#reset');
let increase = document.querySelector('#increase');
let count = 0;


increase.addEventListener('click',function () {
    count+=1;
    number.innerText = count;
    setColor();
});

reset.addEventListener('click', function () {
    count=0;
    number.innerText = count;
    setColor();
});

decrease.addEventListener('click', function () {
    count-=1;
    number.innerText = count;
    setColor();
});

function setColor () {
    if (count > 0) {
        number.style.color = 'green'
    } else if (count === 0) {
        number.style.color = 'black'
    } else {
        number.style.color = 'red'
    }

}
