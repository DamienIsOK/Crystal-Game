$(document).ready(function(){

	// var gem1, gem2, gem3, gem4;

	// function randomize() {
	// 	var randomization = Math.floor(Math.random() * 12) + 1;
	// 	return randomization;
	// }

	// gem1 = randomize();
	// gem2 = randomize();
	// gem3 = randomize();
	// gem4 = randomize();

var gem1, gem2, gem3, gem4, randomNumber;
var userTotal = 0;
var wins = 0;
var losses = 0;

start();

function start(){
	gem1 = Math.floor(Math.random() * 12) + 1;
	gem2 = Math.floor(Math.random() * 12) + 1;
	gem3 = Math.floor(Math.random() * 12) + 1;
	gem4 = Math.floor(Math.random() * 12) + 1;
	randomNumber = Math.floor(Math.random() * 101) + 19;
	
	console.log('#1 ' + gem1);
	console.log('#2 ' + gem2);
	console.log('#3 ' + gem3);
	console.log('#4 ' + gem4);
	console.log('WINS: ' + wins + ' LOSSES: ' + losses);
	
	console.log('Match the number: ' + randomNumber);
	
	var userTotal = gem1 + gem2 + gem3 + gem4;

}	

	$(".gem1").click(function(){
		userTotal += gem1;
		console.log(userTotal);
			if (userTotal === randomNumber) {
				console.log('You win');
				wins++;
				start();
			} else if (userTotal > randomNumber) {
				console.log('You lose');
				losses++;
				start();
			} 
	});

	$(".gem2").click(function(){
		userTotal += gem2;
		console.log(userTotal);
			if (userTotal === randomNumber) {
				console.log('You win');
				wins++;
				start();
			} else if (userTotal > randomNumber) {
				console.log('You lose');
				losses++;
				start();
			} 
	});

	$(".gem3").click(function(){
		userTotal += gem3;
		console.log(userTotal);		
			if (userTotal === randomNumber) {
				console.log('You win');
				wins++;
				start();
			} else if (userTotal > randomNumber) {
				console.log('You lose');
				losses++;
				start();
			} 
	});

	$(".gem4").click(function(){
		userTotal += gem4;
		console.log(userTotal);		
			if (userTotal === randomNumber) {
				console.log('You win');
				wins++;
				start();
			} else if (userTotal > randomNumber) {
				console.log('You lose');
				losses++;
				start();
			} 
	});

});