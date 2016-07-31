$(document).ready(function(){	
	var player = prompt("Your Choice... X or O??");
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	var priority = [8, 1, 7, 2, 9, 3, 6, 4, 5];

/*draws Board*/
function draw(){

	var tac = document.getElementById("tic");
	var ctx = tac.getContext("2d");

	ctx.lineWidth=4;

	ctx.beginPath();
	ctx.moveTo(166, 40);
	ctx.lineTo(166, 460);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(333, 40);
	ctx.lineTo(333, 460);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(40, 166);
	ctx.lineTo(460, 166);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(40, 333);
	ctx.lineTo(460, 333);
	ctx.stroke();
}

/*Puts everything together*/


/*Sets piece player wants*/
function getPiece(player){

	if(player=='x' || player == 'X'){
		player='X';
	}
	else if(player == 'o' || player == 'O'){
		player = 'O';
	}
	else{
		player = 'X';
	}

	return player;
}

/******************* PLAYERS TURN ***************/
function playersTurn(){

var canvas = document.getElementById("tic");
var gamePiece = getPiece(player);

/*get coordinates of players mouse click*/
	 canvas.addEventListener('mousedown', function (e) {
            var x = e.x;
            var y = e.y;

            x -= canvas.offsetLeft;
            y -= canvas.offsetTop;

            if(gamePiece == 'X'){
	 			printX(x, y);
			 }
			 else if(gamePiece == 'O'){
			 	printO(x, y);
			 }
			 pcTurn();
        });

	 window.addEventListener('mouseup',function (e) {
	 	c.x = false;
	 	c.y = false;
	 });
}

/************** PC TURN **************/
function pcTurn(){
	var gamePiece = getPiece(player);
	var num;
	var bestMove;
	var pc;

	switch(gamePiece){
		case 'X': pc = 'O';
		break;
		case 'O': pc = 'X';
	}

	blocks();


	/****************************
	*
	* AI ATTACKS!
	*
	****************************/
	if(arr[0] == arr[1] && arr[1] == pc && priority[2] != 0){
		priority[2] += 100;
	}
	else if(arr[3] == arr[4] && arr[4] == pc && priority[5] != 0){
		priority[5] += 100;
	}
	else if(arr[6] == arr[7] && arr[7] == pc && priority[8] != 0){
		priority[8] += 100;
	}
	else if(arr[0] == arr[3] && arr[3] == pc && priority[6] != 0){
		priority[6] += 100;
	}
	else if(arr[1] == arr[4] && arr[4] == pc && priority[7] != 0){
		priority[7] += 100;
	}
	else if(arr[2] == arr[5] && arr[5] == pc && priority[8] != 0){
		priority[8] += 100;
	}
	else if(arr[0] == arr[4] && arr[4] == pc && priority[8] != 0){
		priority[8] += 100;
	}
	else if(arr[6] == arr[4] && arr[4] == pc && priority[2] != 0){
		priority[2] += 100;
	}

	/*Backwards*/
	else if(arr[2] == arr[1] && arr[1] == pc && priority[0] != 0){
		priority[0] += 160;
	}
	else if(arr[5] == arr[4] && arr[4] == pc && priority[3] != 0){
		priority[3] += 160;
	}
	else if(arr[8] == arr[7] && arr[7] == pc && priority[6] != 0){
		priority[6] += 160;
	}
	else if(arr[6] == arr[3] && arr[3] == pc && priority[0] != 0){
		priority[0] += 160;
	}
	else if(arr[7] == arr[4] && arr[4] == pc && priority[1] != 0){
		priority[1] += 160;
	}
	else if(arr[8] == arr[5] && arr[5] == pc && priority[2] != 0){
		priority[2] += 160;
	}
	else if(arr[8] == arr[4] && arr[4] == pc && priority[0] != 0){
		priority[0] += 160;
	}
	else if(arr[2] == arr[4] && arr[4] == pc && priority[6] != 0){
		priority[6] += 160;
	}

	/*corners*/
	else if(arr[0] == arr[6] && arr[6] == pc && priority[3] != 0){
		priority[3] += 170;
	}
	else if(arr[0] == arr[2] && arr[2] == pc && priority[1] != 0){
		priority[1] += 170;
	}
	else if(arr[2] == arr[8] && arr[8] == pc && priority[5] != 0){
		priority[5] += 170;
	}
	else if(arr[8] == arr[6] && arr[6] == pc && priority[7] != 0){
		priority[7] += 170;
	}

	bestMove = Math.max.apply(Math, priority);

	switch(bestMove){
		case priority[0]: num = 0;
		break;
		case priority[1]: num = 1;
		break;
		case priority[2]: num = 2;
		break;
		case priority[3]: num = 3;
		break;
		case priority[4]: num = 4;
		break;
		case priority[5]: num = 5;
		break;
		case priority[6]: num = 6;
		break;
		case priority[7]: num = 7;
		break;
		case priority[8]: num = 8;
		break;
	}
	

	switch(num){
		case 0: x = 80;
				y = 80;
		break;
		case 1: x = 250;
				y = 80;
		break;
		case 2: x = 420;
				y = 80;
		break;
		case 3: x = 80;
				y = 250;
		break;
		case 4: x = 250;
				y = 250;
		break;
		case 5: x = 420;
				y = 250;
		break; 
		case 6: x = 80;
				y= 420;
		break; 
		case 7: x = 250;
				y = 420;
		break; 
		case 8: x = 420;
				y = 420;
		break;
	}

	if(gamePiece == 'X'){
			printO(x, y);
		}
	else if(gamePiece == 'O'){
			printX(x, y);
		}
}

/************************************
*
Draws and X in the specified location
*
*************************************/
function printX(x, y){
	var tac = document.getElementById("tic");
	var ctx = tac.getContext("2d");

/*First Row*/
if((x>=0 && x<=160) && (y>=0 && y<=160) && (arr[0] != 'O')){
	ctx.beginPath();
	ctx.moveTo(40, 40);
	ctx.lineTo(120, 120);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(120, 40);
	ctx.lineTo(40, 120);
	ctx.stroke();

	arr[0] = 'X';
	priority[0] = 0;
	check();
}

else if((x>=174 && x<=330) && (y>=0 && y<=160) && (arr[1] != 'O')){
	ctx.beginPath();
	ctx.moveTo(200, 40);
	ctx.lineTo(290, 120);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(290, 40);
	ctx.lineTo(200, 120);
	ctx.stroke();

	arr[1] = 'X';
	priority[1] = 0;
	check();
}

else if((x>=345 && x<=500) && (y>=0 && y<=160) && (arr[2] != 'O')){
	ctx.beginPath();
	ctx.moveTo(380, 40);
	ctx.lineTo(460, 120);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(460, 40);
	ctx.lineTo(380, 120);
	ctx.stroke();

	arr[2] = 'X';
	priority[2] = 0;
	check();
}

/*Second Row*/
else if((x>=0 && x<=160) && (y>=174 && y<=330) && (arr[3] != 'O')){
	ctx.beginPath();
	ctx.moveTo(40, 200);
	ctx.lineTo(120, 290);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(120, 200);
	ctx.lineTo(40, 290);
	ctx.stroke();

	arr[3] = 'X';
	priority[3] = 0;
	check();
}

else if((x>=174 && x<=330) && (y>=174 && y<=330) && (arr[4] != 'O')){
	ctx.beginPath();
	ctx.moveTo(200, 200);
	ctx.lineTo(290, 290);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(290, 200);
	ctx.lineTo(200, 290);
	ctx.stroke();

	arr[4] = 'X';
	priority[4] = 0;
	check();
}

else if((x>=345 && x<=500) && (y>=174 && y<=330) && (arr[5] != 'O')){
	ctx.beginPath();
	ctx.moveTo(380, 200);
	ctx.lineTo(460, 290);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(460, 200);
	ctx.lineTo(380, 290);
	ctx.stroke();

	arr[5] = 'X';
	priority[5] = 0;
	check();
}

/*Third Row*/
else if((x>=0 && x<=160) && (y>=345 && y<=500) && (arr[6] != 'O')){
	ctx.beginPath();
	ctx.moveTo(40, 380);
	ctx.lineTo(120, 460);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(120, 380);
	ctx.lineTo(40, 460);
	ctx.stroke();

	arr[6] = 'X';
	priority[6] = 0;
	check();
}

else if((x>=174 && x<=330) && (y>=345 && y<=500) && (arr[7] != 'O')){
	ctx.beginPath();
	ctx.moveTo(200, 380);
	ctx.lineTo(290, 460);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(290, 380);
	ctx.lineTo(200, 460);
	ctx.stroke();

	arr[7] = 'X';
	priority[7] = 0;
	check();
}

else if((x>=345 && x<=500) && (y>=345 && y<=500) && (arr[8] != 'O')){
	ctx.beginPath();
	ctx.moveTo(380, 380);
	ctx.lineTo(460, 460);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(460, 380);
	ctx.lineTo(380, 460);
	ctx.stroke();

	arr[8] = 'X';
	priority[8] = 0;
	check();
}
}

/**************************
*
* Prints an O on the board;
*
**************************/
function printO(x, y){
	var tac = document.getElementById("tic");
	var ctx = tac.getContext("2d");

/*First Row*/
if((x>=0 && x<=160) && (y>=0 && y<=160) && (arr[0] != 'X')){
	ctx.beginPath();
	ctx.arc(80, 80, 40, 0, 2*Math.PI);
	ctx.stroke();

	arr[0] = 'O';
	priority[0] = 0;
	check();
}

else if((x>=174 && x<=330) && (y>=0 && y<=160) && (arr[1] != 'X')){
	ctx.beginPath();
	ctx.arc(250, 80, 40, 0, 2*Math.PI);
	ctx.stroke();

	arr[1] = 'O';
	priority[1] = 0;
	check();
}

else if((x>=345 && x<=500) && (y>=0 && y<=160) && (arr[2] != 'X')){
	ctx.beginPath();
	ctx.arc(420, 80, 40, 0, 2*Math.PI);
	ctx.stroke();

	arr[2] = 'O'; 
	priority[2] = 0;
	check();
}

/*Second Row*/
else if((x>=0 && x<=160) && (y>=174 && y<=330) && (arr[3] != 'X')){
	ctx.beginPath();
	ctx.arc(80, 250, 40, 0, 2*Math.PI);
	ctx.stroke();

	arr[3] = 'O';
	priority[3] = 0;
	check();
}

else if((x>=174 && x<=330) && (y>=174 && y<=330) && (arr[4] != 'X')){
	ctx.beginPath();
	ctx.arc(250, 250, 40, 0, 2*Math.PI);
	ctx.stroke();

	arr[4] = 'O';
	priority[4] = 0;
	check();
}

else if((x>=345 && x<=500) && (y>=174 && y<=330) && (arr[5] != 'X')){
	ctx.beginPath();
	ctx.arc(420, 250, 40, 0, 2*Math.PI);
	ctx.stroke();

	arr[5] = 'O';
	priority[5] = 0;
	check();
}

/*Third Row*/
else if((x>=0 && x<=160) && (y>=345 && y<=500) && (arr[6] != 'X')){
	ctx.beginPath();
	ctx.arc(80, 420, 40, 0, 2*Math.PI);
	ctx.stroke();

	arr[6] = 'O';
	priority[6] = 0;
	check();
}

else if((x>=174 && x<=330) && (y>=345 && y<=500) && (arr[7] != 'X')){
	ctx.beginPath();
	ctx.arc(250, 420, 40, 0, 2*Math.PI);
	ctx.stroke();

	arr[7] = 'O';
	priority[7] = 0;
	check();
}

else if((x>=345 && x<=500) && (y>=345 && y<=500) && (arr[8] != 'X')){
	ctx.beginPath();
	ctx.arc(420, 420, 40, 0, 2*Math.PI);
	ctx.stroke();

	arr[8] = 'O';
	priority[8] = 0;
	check();
}
}

/************************
*
*AI BLOCKS!!
*
************************/
function blocks(){

var gamePiece = getPiece(player);

	if(arr[0] == arr[1] && arr[1] == gamePiece && priority[2] != 0){
		priority[2] += 50;
	}
	else if(arr[3] == arr[4] && arr[4] == gamePiece && priority[5] != 0){
		priority[5] += 50;
	}
	else if(arr[6] == arr[7] && arr[7] == gamePiece && priority[8] != 0){
		priority[8] += 50;
	}
	else if(arr[0] == arr[3] && arr[3] == gamePiece && priority[6] != 0){
		priority[6] += 50;
	}
	else if(arr[1] == arr[4] && arr[4] == gamePiece && priority[7] != 0){
		priority[7] += 50;
	}
	else if(arr[2] == arr[5] && arr[5] == gamePiece && priority[8] != 0){
		priority[8] += 50;
	}
	else if(arr[0] == arr[4] && arr[4] == gamePiece && priority[8] != 0){
		priority[8] += 50;
	}
	else if(arr[6] == arr[4] && arr[4] == gamePiece && priority[2] != 0){
		priority[2] += 50;
	}

	/*Backwards*/
	else if(arr[2] == arr[1] && arr[1] == gamePiece && priority[0] != 0){
		priority[0] += 60;
	}
	else if(arr[5] == arr[4] && arr[4] == gamePiece && priority[3] != 0){
		priority[3] += 60;
	}
	else if(arr[8] == arr[7] && arr[7] == gamePiece && priority[6] != 0){
		priority[6] += 60;
	}
	else if(arr[6] == arr[3] && arr[3] == gamePiece && priority[0] != 0){
		priority[0] += 60;
	}
	else if(arr[7] == arr[4] && arr[4] == gamePiece && priority[1] != 0){
		priority[1] += 60;
	}
	else if(arr[8] == arr[5] && arr[5] == gamePiece && priority[2] != 0){
		priority[2] += 60;
	}
	else if(arr[8] == arr[4] && arr[4] == gamePiece && priority[0] != 0){
		priority[0] += 60;
	}
	else if(arr[2] == arr[4] && arr[4] == gamePiece && priority[6] != 0){
		priority[6] += 60;
	}

	/*corners*/
	else if(arr[0] == arr[6] && arr[6] == gamePiece && priority[3] != 0){
		priority[3] += 30;
	}
	else if(arr[0] == arr[2] && arr[2] == gamePiece && priority[1] != 0){
		priority[1] += 30;
	}
	else if(arr[2] == arr[8] && arr[8] == gamePiece && priority[5] != 0){
		priority[5] += 30;
	}
	else if(arr[8] == arr[6] && arr[6] == gamePiece && priority[7] != 0){
		priority[7] += 30;
	}

}
function check(){
	var gamePiece = getPiece(player);
	var k = priority.reduce(function(a, b){
		return a+b;
	});

	if(k == 0){
		alert("TIE !!!");
		window.stop();
	}
	else if(arr[0] == arr[1] && arr[1]== arr[2]){
		if(arr[0] == gamePiece){
			alert("YOU WIN!!!");
			location.reload();
		}
		else{
			alert("YOU LOSE!!");
			location.reload();
		}
	}
	else if(arr[3] == arr[4] && arr[4]== arr[5]){
		if(arr[4] == gamePiece){
			alert("YOU WIN!!!");
			location.reload();
		}
		else{
			alert("YOU LOSE!!");
			location.reload();
		}
	}
	else if(arr[6] == arr[7] && arr[7] == arr[8]){
		if(arr[7] == gamePiece){
			alert("YOU WIN!!!");
			location.reload();
		}
		else{
			alert("YOU LOSE!!");
			location.reload();
		}
	}
	else if(arr[0] == arr[3] && arr[3]== arr[6]){
		if(arr[0] == gamePiece){
			alert("YOU WIN!!!");
			location.reload();
		}
		else{
			alert("YOU LOSE!!");
			location.reload();
		}
	}
	else if(arr[4] == arr[1] && arr[1]== arr[7]){
		if(arr[1] == gamePiece){
			alert("YOU WIN!!!");
			location.reload();
		}
		else{
			alert("YOU LOSE!!");
			location.reload();
		}
	}
	else if(arr[2] == arr[5] && arr[5]== arr[8]){
		if(arr[5] == gamePiece){
			alert("YOU WIN!!!");
			location.reload();
		}
		else{
			alert("YOU LOSE!!");
			location.reload();
		}
	}
	else if(arr[0] == arr[4] && arr[4]== arr[8]){
		if(arr[0] == gamePiece){
			alert("YOU WIN!!!");
			location.reload();
		}
		else{
			alert("YOU LOSE!!");
			location.reload();
		}
	}
	else if(arr[6] == arr[4] && arr[4]== arr[2]){
		if(arr[4] == gamePiece){
			alert("YOU WIN!!!");
			location.reload();
		}
		else{
			alert("YOU LOSE!!");
			location.reload();
		}
	}


}

draw();
playersTurn();
});