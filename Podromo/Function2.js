$(document).ready(function(){

function work(){
	var k, minutes, seconds = 60;
	var minutes2 = 4; 
	var html = " ";
	var count = 0;

			minutes = 19;

		/*Starts timer with double click*/
			document.getElementById("total_time").ondblclick = function() {
			k = setInterval(timer, 1000);
		}

		$("#total_time").click(function(){
			clearInterval(k);
		});

		$("#break_min").click(function(){
			if(minutes != 0){
				minutes--;
			}
			display();
		});

		$("#break_plus").click(function(){
				minutes++;
			display();
		});

		$("#reset").click(function(){
			seconds = 60;
			clearInterval(k);
			status(0);
			display();
		});

		$("#restMore").click(function(){
				minutes2++;
				html += minutes2;
				$("#displayB").val(html);
				html = " ";
		});

		$("#restLess").click(function(){
			if(minutes2 != 0){
				minutes2--;
				html += minutes2;
				$("#displayB").val(html);
				html = " ";
			}
		});
				var units = 350/minutes;
				var t = minutes;

				html += minutes2;
				$("#displayB").val(html);
				html = " ";
		display();

/*Counts Down*/
	function timer(){
     var sound;

		if(minutes >=0 && seconds > 0){
			seconds -= 1;
		}
		else if(minutes >0 && seconds == 0){
			minutes--;
			seconds=60;
		}
		else if(minutes == 0 && seconds == 0 && count == 0){
			minutes = minutes2;
			t=minutes;
			units = 350/minutes;
			count=1;
			document.getElementById("audio").play();
		}
		else if(minutes == 0 && seconds == 0 && count ==1){
			clearInterval(k);
		}
		status(minutes);
		display();
	}

/*Displays Time*/
	function display(){

		if(minutes >=9 && seconds == 60){
			document.getElementById("total_time").innerHTML = (minutes + 1) + ':' + '00';
		}
		else if(minutes <9 && seconds==60){
			document.getElementById("total_time").innerHTML = '0'+ (minutes + 1)+ ':' + "00";
		}
		else if(minutes<10 && seconds <10){
			document.getElementById("total_time").innerHTML = '0'+ minutes + ':' + '0'+seconds;
		}
		else if(seconds<10 && minutes >=10){
			document.getElementById("total_time").innerHTML = minutes + ':' + '0'+seconds;
		}
		else if(seconds>=10 && minutes <10){
			document.getElementById("total_time").innerHTML = '0'+ minutes + ':' + seconds;
		}
		else{
			document.getElementById("total_time").innerHTML = minutes + ':' + seconds;
		}
	}
/*Progress Bar*/
function status(x){
    
	var c = document.getElementById("prog");
    var numOf= t-x;
	var move = units * numOf;

	var ctx = c.getContext("2d");

			ctx.fillStyle = "red";

			if((x==0 && seconds == 60) || (x==0 && seconds == 0)){
				ctx.clearRect(0,0, prog.width, prog.height);
			}
			else{
			ctx.fillRect(0,0, move, prog.height);
		}
	}
}

work();

});