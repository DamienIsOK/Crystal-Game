$(document).ready(function(){

// Variables

var gem1, gem2, gem3, gem4, randomNumber, userTotal;
var wins = 0;
var losses = 0;


// Start from here

startHere();

function startHere(){
	userTotal = 0;
	gem1 = Math.floor(Math.random() * 12) + 1;
	gem2 = Math.floor(Math.random() * 12) + 1;
	gem3 = Math.floor(Math.random() * 12) + 1;
	gem4 = Math.floor(Math.random() * 12) + 1;
	randomNumber = Math.floor(Math.random() * 120) + 19;

	$('#match').html('<h2>Match This</h2>' + '<p>' + randomNumber + '</p>');
	$('#wins').html('<h2>Wins</h2>' + '<p>' + wins + '</p>');
	$('#losses').html('<h2>Losses</h2>' + '<p>' + losses + '</p>');

}	

// Click on an item to increment and decrement #, and determine if win or lose

	$("#gem1").click(function(){
		userTotal += gem1;
		$('#total').html('<h2>Your Total</h2>' + '<p>' + userTotal + '</p>');
		$('#total').css('color', 'black');
			if (userTotal === randomNumber) {
				$('#total').css('color', 'green').effect('shake');
				$('#total');
				wins++;
				startHere();
			} else if (userTotal > randomNumber) {
				losses++;
				$('#total').css('color', 'red').effect('shake');
				$('#total');
				startHere();
			} 
	});

	$("#gem2").click(function(){
		userTotal += gem2;
		$('#total').html('<h2>Your Total</h2>' + '<p>' + userTotal + '</p>');
		$('#total').css('color', 'black');
			if (userTotal === randomNumber) {
				$('#total').css('color', 'green').effect('shake');
				wins++;
				startHere();
			} else if (userTotal > randomNumber) {
				losses++;
				$('#total').css('color', 'red').effect('shake');
				startHere();

			} 
	});

	$("#gem3").click(function(){
		userTotal += gem3;
		$('#total').html('<h2>Your Total</h2>' + '<p>' + userTotal + '</p>');
		$('#total').css('color', 'black');		
			if (userTotal === randomNumber) {
				$('#total').css('color', 'green').effect('shake');
				wins++;
				startHere();
			} else if (userTotal > randomNumber) {
				losses++;
				$('#total').css('color', 'red').effect('shake');
				startHere();
			} 
	});

	$("#gem4").click(function(){
		userTotal += gem4;
		$('#total').html('<h2>Your Total</h2>' + '<p>' + userTotal + '</p>');
		$('#total').css('color', 'black');
			if (userTotal === randomNumber) {
				$('#total').css('color', 'green').effect('shake');
				wins++;
				startHere();
			} else if (userTotal > randomNumber) {
				losses++;
				$('#total').css('color', 'red').effect('shake');
				startHere();
			} 
	});

});