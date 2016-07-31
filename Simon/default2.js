$(document).ready(function() {
	var arr = [];

	var obj = { count: 0,
				player: 0,
				width: 0,
				index: 0};

function checkS(){
	if(obj.player == arr[obj.index] && obj.index != obj.width){
		obj.count +=1;
		obj.index += 1;
	}
	else if(obj.player != arr[obj.index]){
		alert("hello no");
		window.location.reload();
	}
	displayCount();
}

function green(){
	var can = document.getElementById("1");
	var ctx = can.getContext("2d");

	var func = function(e){
		ctx.fillStyle ="white";
		ctx.fillRect(0,0,can.width, can.height);
		obj.player = 1;
		checkS();
	}

	var func2 = function(e){
		ctx.fillStyle ="green";
		ctx.fillRect(0,0, can.width, can.height);

		if(obj.index == obj.width){
			simonAi();
		}
	}
	
	can.addEventListener('mousedown', func, false);
	can.addEventListener('mouseup', func2, false);

}

function red(){
	var can = document.getElementById("2");
	var ctx = can.getContext("2d");

	var func = function(e){
		ctx.fillStyle ="white";
		ctx.fillRect(0,0,can.width, can.height);
		obj.player = 2;
		checkS();
	}

	var func2 = function(e){
		ctx.fillStyle ="red";
		ctx.fillRect(0,0, can.width, can.height);

		if(obj.index == obj.width){
			simonAi();
		}
	}

	can.addEventListener('mousedown', func, false);
	can.addEventListener('mouseup', func2, false);

}

function yellow(){
	var can = document.getElementById("3");
	var ctx = can.getContext("2d");

	var func = function(e){
		ctx.fillStyle ="white";
		ctx.fillRect(0,0,can.width, can.height);
		obj.player = 3;
		checkS();
	}

	var func2 = function(e){
		ctx.fillStyle ="yellow";
		ctx.fillRect(0,0, can.width, can.height);

		if(obj.index == obj.width){
			simonAi();
		}
	}
	
	can.addEventListener('mousedown', func, false);
	can.addEventListener('mouseup', func2, false);

}

function blue(){
	var can = document.getElementById("4");
	var ctx = can.getContext("2d");

	var func = function(e){
		ctx.fillStyle ="white";
		ctx.fillRect(0,0,can.width, can.height);
		obj.player = 4;
		checkS();
	}

	var func2 = function(e){
		ctx.fillStyle ="blue";
		ctx.fillRect(0,0, can.width, can.height);

		if(obj.index == obj.width){
			simonAi();
		}
	}
	
	can.addEventListener('mousedown', func, false);
	can.addEventListener('mouseup', func2, false);

}


	var aiColor = { one: function(){
		$('.green').css('backgroundColor', 'white');
		setTimeout(function(){ $('.green').css('backgroundColor', 'green');}, 400);
	},
		two: function(){
		$('.red').css('backgroundColor', 'white');
		setTimeout(function(){ $('.red').css('backgroundColor', 'red');}, 400);
	},
		three: function(){
		$('.yellow').css('backgroundColor', 'white');
		setTimeout(function(){ $('.yellow').css('backgroundColor', 'yellow');}, 400);
	},
		four: function(){
		$('.blue').css('backgroundColor', 'white');
		setTimeout(function(){ $('.blue').css('backgroundColor', 'blue');}, 400);
	}};

/******Simon's Intelligence******/
function simonAi(){
		var k, i=0;
		var num = Math.floor((Math.random() * 4) + 1);

		obj.index = 0;

		arr.push(num);
		obj.width +=1;

		function displaySeq(){
				if(arr[i] == 1){
					aiColor.one();
				}
				else if(arr[i] == 2){
					aiColor.two();
				}
				else if(arr[i] == 3){
					aiColor.three();
				}
				else if(arr[i] == 4){
					aiColor.four();
				}
				else if(i == arr.length){
					clearInterval(k);
					playersTurn();
					obj.index = 0;
				}
				i++;
			}

			k = setInterval(displaySeq, 500);
}


function playersTurn(){
	green();
	red();
	yellow();
	blue();

}

function displayCount(){
	var canvas = document.getElementById("count_display");
	var ctx = canvas.getContext("2d");

	ctx.font = "30px Arial";
	ctx.fillStyle = "red";

	if(obj.count == 0){
		ctx.fillText('--', 42, 22);
	}
	else if(obj.count >0 && obj.count <10){
		ctx.clearRect(0,0,canvas.width, canvas.height);
		ctx.fillText('- '+ obj.count, 42, 22);
	}
}

/********Starts & Shuts Off Game********/
function turnOn(){
	
		var startSimon = function(){
			simonAi();
		}

		var shutOff = function(){
			window.location.reload();
		}

	$(".start").click(startSimon);

	$(".switch").change(shutOff);

	displayCount();
}

/********Turns on Game**********/
	$(".switch").change(function(){
		turnOn();
	});
});