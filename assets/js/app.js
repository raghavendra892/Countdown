//alert("hellooooo");
let cl = console.log;
const countdown = document.getElementById('countDown');


function createCountdown(){
	let futureDate = new Date(2023, 0, 25); // launch date
// cl(futureDate);

	let currentDate = new Date(); // current date
// cl(currentDate);

	let diff = futureDate.getTime() - currentDate.getTime();
// cl(diff);

	let diffInSec = diff / (1000); 
// cl(diffInSec);

	let diffInMin = diff / (1000 * 60); 
// cl(diffInMin);

	let diffInHours = diff / (1000 * 60 * 60); 
// cl(diffInHours);

	let days =  Math.floor(diff / (1000 * 60 * 60 * 24));
 
// cl(diffInDays);

	let hr  = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// cl(hr);


	let min  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
// cl(min);

	let sec = Math.floor((diff % (1000 * 60)) / 1000);
// cl(sec);

	let result = `

	<div class="counter">  
		<p>Days</p>
		<p>${setZero(days)}</P>
	</div>
	<div class="counter">
		<p>Hours</p>
		<p>${setZero(hr)}</P>
	</div>
	<div class="counter">
		<p>Minutes</p>
		<p>${setZero(min)}</P>
	</div>
	<div class="counter">
		<p>Seconds</p>
		<p>${setZero(sec)}</P>
	</div>`;
	

	countdown.innerHTML = result;
	setTimeout(createCountdown, 100)
}

createCountdown();

function setZero(num){
return (num < 10) ? "0" + num : num;
}

