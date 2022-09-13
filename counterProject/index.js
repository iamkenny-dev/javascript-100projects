const resultVar = document.querySelector('.result');
const addVar = document.querySelector('.add');
const substractVar = document.querySelector('.substract');
let total = 0;

addVar.addEventListener('click', () => {
    total++;
    resultVar.innerHTML = total;
})
substractVar.addEventListener('click', () => {
    total--;
    resultVar.innerHTML = total;
})
