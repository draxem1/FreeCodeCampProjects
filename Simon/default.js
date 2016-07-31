window.onload = function(){
var sound1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var sound2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var sound3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var sound4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
var arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var player = [];
var obj = {
		count: 0,
		on: 0,
		index: 0,
		checks: 0,
		lives: 3,
		interval: 600,
		time: 400,
		strict: 0
};

/*********Sets Sequence***********/
function randomNumbers(){
	var num, i;

	for(i=0; i<arr.length; i++){
		num = Math.floor((Math.random() * 4) + 1);
		arr[i] = num;
	}
}

/***********Turns ON Game*************/
function turnOn(){

	randomNumbers();
	countRight();
		var startSimon = function(){
			displayGame();
		}

		var shutOff = function(){
			window.location.reload();
		}

	$(".start").click(startSimon);

	$(".switch").change(shutOff);

	$(".strict").click(function(){
		if(obj.strict === 0){
			obj.strict = 1;
			$(".led").css('backgroundColor', 'red');
		}
		else if(obj.strict === 1){
			obj.strict = 0;
			$(".led").css('backgroundColor', 'black');
		}
	})

}

$(".switch").change(function(){
		turnOn();
});


/***********Green Button***************/
	$("#1").on('mousedown', function(e){
		
		if(obj.on == 1){

			$("#1").removeClass("gn_back");
			$("#1").addClass("white");
			player.push(1);
			sound1.play();
		}
	});

	$("#1").on('mouseup', function(e){
		
		if(obj.on == 1){

			$("#1").removeClass("white");
			$("#1").addClass("gn_back");
			
			if(obj.strict === 0){
				check();
			}
			else if(obj.strict === 1){
				strict();
			}
			countRight();
		}
	});

	/***********Red Button***************/
	$("#2").on('mousedown', function(){
		
		if(obj.on == 1){

			$("#2").removeClass("rd_back");
			$("#2").addClass("white");
			player.push(2);
			sound2.play();
		}
	});

	$("#2").on('mouseup', function(){
		
		if(obj.on == 1){

			$("#2").removeClass("white");
			$("#2").addClass("rd_back");
			
			if(obj.strict === 0){
				check();
			}
			else if(obj.strict === 1){
				strict();
			}
			countRight();
		}
	});

	/***********Yellow Button***************/
	$("#3").on('mousedown', function(){
		
		if(obj.on == 1){

			$("#3").removeClass("yw_back");
			$("#3").addClass("white");
			player.push(3);
			sound3.play();
		}
	});

	$("#3").on('mouseup', function(){
		
		if(obj.on == 1){

			$("#3").removeClass("white");
			$("#3").addClass("yw_back");

			if(obj.strict === 0){
				check();
			}
			else if(obj.strict === 1){
				strict();
			}
			countRight();
		}
	});

	/***********Blue Button***************/
	$("#4").on('mousedown', function(){
		
		if(obj.on == 1){

			$("#4").removeClass("bl_back");
			$("#4").addClass("white");
			player.push(4);
			sound4.play();
		}
	});

	$("#4").on('mouseup', function(){
		
		if(obj.on == 1){

			$("#4").removeClass("white");
			$("#4").addClass("bl_back");
			
			if(obj.strict === 0){
				check();
			}
			else if(obj.strict === 1){
				strict();
			}
			countRight();
		}
	});


/*************Checks Players move To Games Move***************/
function check(){
    
    if(player.length == obj.index && player[obj.checks] == arr[obj.checks]){
    	player = [];
    	obj.checks = 0;
    	obj.count++;
    	displayGame();
    }
    else if(player[obj.checks] == arr[obj.checks] && player.length != obj.index){
    	obj.checks++;
    	obj.lives = 3;
    }
    else if(player[obj.checks] != arr[obj.checks]){
   		player = [];
   		alert("WRONG TRY AGAIN");
   		obj.lives--;
   		obj.checks = 0;
   		obj.index -= 1;
   		displayGame();
    }
}

function strict(){

	if(player.length == obj.index && player[obj.checks] == arr[obj.checks]){
    	player = [];
    	obj.checks = 0;
    	obj.count++;
    	displayGame();
    }
    else if(player[obj.checks] == arr[obj.checks] && player.length != obj.index){
    	obj.checks++;
    }
    else if(player[obj.checks] != arr[obj.checks]){
   		player = [];
   		alert("YOU LOSE!! TRY THIS SEQUENCE!");
   		obj.checks = 0;
   		obj.count = 0;
   		obj.index = 0;
   		randomNumbers();
   		displayGame();
    }

}


/***********SPEEDS GAME UP*********/
function getFaster(){
	switch(obj.count){
		case 5: obj.interval = 550;
				obj.time = 450;
		break;
		case 10: obj.interval = 500;
				 obj.time = 400;
		break;
		case 15: obj.interval = 450;
				 obj.time = 350;
		break;
	}
}

/********TRACKS # OF TRIES************/
function lives(){
	switch(obj.lives){
		case 0: alert("YOU LOSE!!!");
				window.location.reload();
		break;
	}
}

/***********Games Turn***************/
function displayGame(){
	var i = 0;

	obj.on = 0;
	obj.index++;

	getFaster();
	lives();

	function green(){

		$("#1").removeClass("gn_back");
		$("#1").addClass("white");
		sound1.play();

		setTimeout(function(){
			$("#1").removeClass("white");
			$("#1").addClass("gn_back");
		}, obj.time);

	}

	function red(){

		$("#2").removeClass("rd_back");
		$("#2").addClass("white");
		sound2.play();

		setTimeout(function(){
			$("#2").removeClass("white");
			$("#2").addClass("rd_back");
		}, obj.time);
		
	}

	function yellow(){

		$("#3").removeClass("yw_back");
		$("#3").addClass("white");
		sound3.play();

		setTimeout(function(){
			$("#3").removeClass("white");
			$("#3").addClass("yw_back");
		}, obj.time);
		
	}

	function blue(){

		$("#4").removeClass("bl_back");
		$("#4").addClass("white");
		sound4.play();

		setTimeout(function(){
			$("#4").removeClass("white");
			$("#4").addClass("bl_back");
		}, obj.time);
		
	}

	
	var k = setInterval(sequence, obj.interval);

	function sequence(){

		switch(arr[i]){
			case 1: green();
					i++;
			break;
			case 2: red();
					i++;
			break;
			case 3: yellow();
					i++;
			break;
			case 4: blue();
					i++;
			break;
		}
		if(i == obj.index){
			clearInterval(k);
			obj.on = 1;
		}
	}
}

/************DISPLAYS COUNT TO RED CANVAS*************/
function countRight(){
	var can = document.getElementById("count_display");
	var ctx = can.getContext("2d");

	ctx.fillStyle = "red";
	ctx.font = "30px Arial";

	if(obj.count == 0){
		ctx.clearRect(0, 0, can.width, can.height);
		ctx.fillText("- -", 40, 25);
	}
	else if(obj.count <10 && obj.count > 0){
		ctx.clearRect(0, 0, can.width, can.height);
		ctx.fillText("- " + obj.count, 40, 25);
	}
	else if(obj.count >=10 && obj.count <20){
		ctx.clearRect(0, 0, can.width, can.height);
		ctx.fillText(obj.count, 40, 25);
	}
	else if(obj.count == 20){
		alert("YOU WIN!!!!");
		window.location.reload();
	}
}
};