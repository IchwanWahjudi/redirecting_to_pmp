let counter = document.querySelector(".main h2");
let count = 5;
setInterval(() => {
	counter.innerText = count;
	count--;
	if (count < 1) location.replace("https://pratamamajuperkasa.co.id/");
}, 1000);
