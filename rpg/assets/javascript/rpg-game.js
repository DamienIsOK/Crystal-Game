// GLOBAL VARIABLES
// ========================================================================
var onFirst;
var onSecond;
var firstClick;


// FUNCTIONS
// ========================================================================

function startGame() {

$(document).ready(function(){

	var characters = {
		char1: {
			healthPoints: 120,
			attackPower: 8,
			counterPower: 10
		},
		char2: {
			healthPoints: 100,
			attackPower: 10,
			counterPower: 10	
		},
		char3: {
			healthPoints: 150,
			attackPower: 12,
			counterPower: 10
		},
		char4: {
			healthPoints: 180,
			attackPower: 14,
			counterPower: 10
		}
	}

	// Click the first div and move it to the Your Character section
	
		// $(".char").click(function(event) {
	    // $(this).appendTo("#yourCharacter");
		// });	

	
		$(".char").on("click", function(){
			$(this).attr("var", "onFirst");
			$("#onFirst").appendTo("#yourCharacter");
			
		})
	
	
		$(".char").on("click", function(){
			$(this).attr("var", "onSecond");
			$(this).appendTo("#enemySection");
			
		})


	
	// Click button to begin attack
	$("#attackButton").click(function(){

	})


})
}

// MAIN PROCESSES
// =======================================================================

startGame();
