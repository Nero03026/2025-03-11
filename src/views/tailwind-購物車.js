const calcTextNumber = document.querySelector('.calc-text-number');
const input1 = document.querySelector('.count-1');
const plus1 = document.querySelector('.plus-1');

let count1 = parseInt(input1.value) || 0;

plus1.addEventListener('click', function () {
    count1++;
    input1.value = count1;
    calcTextNumber.textContent = count1 + count2 + count3;
});


const input2 = document.querySelector('.count-2');
const plus2 = document.querySelector('.plus-2');
let count2 = parseInt(input2.value) || 0;
plus2.addEventListener('click', function () {
    count2++;
    input2.value = count2;
    calcTextNumber.textContent = count1 + count2 + count3;
});


const input3 = document.querySelector('.count-3');
const plus3 = document.querySelector('.plus-3');
let count3 = parseInt(input3.value) || 0;
plus3.addEventListener('click', function () {
    count3++;
    input3.value = count3;
    calcTextNumber.textContent = count1 + count2 + count3;
});


const minus1 = document.querySelector('.minus-1');
minus1.addEventListener('click', function () {
    count1--;
    input1.value = count1;
    calcTextNumber.textContent = count1 + count2 + count3;
});

const minus2 = document.querySelector('.minus-2');
minus2.addEventListener('click', function () {
    count2--;
    input2.value = count2;
    calcTextNumber.textContent = count1 + count2 + count3;
});

const minus3 = document.querySelector('.minus-3');
minus3.addEventListener('click', function () {
    count3--;
    input3.value = count3;
    calcTextNumber.textContent = count1 + count2 + count3;
});

// 漢堡條控制按鈕
const hamBtn = document.querySelector('.ham-btn')
hamBtn.addEventListener('click', function () {
    const dropContent = document.querySelector('.dropdown-content')
    dropContent.classList.toggle('hidden')
});
