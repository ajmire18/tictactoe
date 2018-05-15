 //X is 0 and O is 1//
 var players=[];
 var markers=["X","O"];
 var scores=[0,0];
 var whoseTurn=0;
 var winCombinations=[7,56,73,84,146,273,292,448];
 var gameOver=false;
players[0]="Prathamesh";
players[1]="Guest";

function winCheck(){
	for(var i=0; i<winCombinations.length; i++){
		if((scores[whoseTurn] & winCombinations[i])==winCombinations[i]){
			document.getElementById("game-message").innerText=players[whoseTurn] + " Wins!";
			gameOver=true;
		}
	}
	if(((scores[0] + scores[1]) ==511) && !gameOver) {
		document.getElementById("game-message").innerText="Nobody Wins!";
		gameOver=true;
	}
}

 function play(clickedCell,cellValue){
	 if(!gameOver){
		 scores[whoseTurn] += cellValue;
	clickedCell.onclick="";
	clickedCell.innerHTML="<span>"+ markers[whoseTurn] +"<span>";
	winCheck();
	if(!gameOver){
		toggle();
	}
	 }
 }
function toggle(){
	if (whoseTurn==0) whoseTurn=1;
	else whoseTurn=0;
	document.getElementById("game-message").innerText= players[whoseTurn] + "'s Turn!";
}