const box = document.querySelector('.container-body');
const buton = document.querySelector('.btn');

buton.addEventListener('click', () => {
    box.style.backgroundColor = randomChar(6);
})

let x = '#';
function randomChar(Len) {
	    
	let char = '0123456789ABCDEF';
	let charLent = char.length;
	let result = '';
	for (let i = 1; i <= Len; i++) {
		            result += char.charAt(Math.ceil(Math.random() * charLent));
	}
	return '#' + result;
}
console.log(randomChar(6));