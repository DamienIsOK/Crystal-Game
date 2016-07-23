$(document).ready(function(){
	var gem1 = Math.floor(Math.random() * 12) + 1;
	var gem2 = Math.floor(Math.random() * 12) + 1;
	var gem3 = Math.floor(Math.random() * 12) + 1;
	var gem4 = Math.floor(Math.random() * 12) + 1;
	var randomNumber = Math.floor(Math.random() * 101) + 19;

	console.log('Match the number: ' + randomNumber);

	$(".gem1").click(function(){
		gem1 = gem1 + gem1;
		$(this).html(gem1);
		console.log(gem1);		
		return parseInt(gem1);
	});

	$(".gem2").click(function(){
		gem2 += gem2;
		$(this).html(gem2);
		console.log(gem2);
		return parseInt(gem2);
	});

	$(".gem3").click(function(){
		gem3 += gem3;
		$(this).html(gem3);
		console.log(gem3);		
		return parseInt(gem3);
	});

	$(".gem4").click(function(){
		gem4 += gem4;
		$(this).html(gem4);
		console.log(gem4);		
		return parseInt(gem4);
	});
	
	var userTotal = gem1 + gem2 + gem3 + gem4;

	// var userTotal = parseInt(gem1) + parseInt(gem2) + parseInt(gem3) + parseInt(gem4);

	// if (userTotal > randomNumber) {
	// 	console.log('You lose');
	// } else if (userTotal == randomNumber) {
	// 	console.log('You win');
	// } else {
	// 	console.log('Keep going');
	// }

console.log('#1 ' + gem1);
console.log('#2 ' + gem2);
console.log('#3 ' + gem3);
console.log('#4 ' + gem4);
console.log('This is the total ' + userTotal);

});

