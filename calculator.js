$(document).ready(function(){
	var text, area, count = 0;

/*Buttons when clicked*/
	$("#one").click(function(){
		text = $("#one").text();
		area = $("#dataInput").val();
		area += text;
			$("#dataInput").val(area);
	});

	$("#two").click(function(){
		text = $("#two").text();
		area = $("#dataInput").val();
		area += text;
			$("#dataInput").val(area);

	});

	$("#three").click(function(){
		text = $("#three").text();
		area = $("#dataInput").val();
		area += text;
			$("#dataInput").val(area);

	});

	$("#four").click(function(){
		text = $("#four").text();
		area = $("#dataInput").val();
		area += text;
			$("#dataInput").val(area);

	});

	$("#five").click(function(){
		text = $("#five").text();
		area = $("#dataInput").val();
		area += text;
			$("#dataInput").val(area);

	});

	$("#six").click(function(){
		text = $("#six").text();
		area = $("#dataInput").val();
		area += text;
			$("#dataInput").val(area);

	});

	$("#seven").click(function(){
		text = $("#seven").text();
		area = $("#dataInput").val();
		area += text;
			$("#dataInput").val(area);

	});

	$("#eight").click(function(){
		text = $("#eight").text();
		area = $("#dataInput").val();
		area += text;
			$("#dataInput").val(area);

	});

	$("#nine").click(function(){
		text = $("#nine").text();
		area = $("#dataInput").val();
		area += text;
			$("#dataInput").val(area);

	});

	$("#zero").click(function(){
		text = $("#zero").text();
		area = $("#dataInput").val();
		area += text;
			$("#dataInput").val(area);

	});

	$("#plus").click(function(){
		text = $("#plus").text();
		area = $("#dataInput").val();
		area += text;
			$("#dataInput").val(area);

	});

	$("#minus").click(function(){
		text = $("#minus").text();
		area = $("#dataInput").val();
		area += text;
			$("#dataInput").val(area);

	});

	$("#divide").click(function(){
		text = $("#divide").text();
		area = $("#dataInput").val();
		area += text;
			$("#dataInput").val(area);

	});

	$("#times").click(function(){
		text = $("#times").text();
		area = $("#dataInput").val();
		area += text;
			$("#dataInput").val(area);

	});

	$("#decimal").click(function(){
		text = $("#decimal").text();
		area = $("#dataInput").val();
		area += text;
			$("#dataInput").val(area);

	});

	$("#remainder").click(function(){
		text = $("#remainder").text();
		area = $("#dataInput").val();
		area += text;
			$("#dataInput").val(area);

	});

/*parentheses*/
	$("#left_p").click(function(){
		text = $("#left_p").text();
		area = $("#dataInput").val();
		area += text;
			$("#dataInput").val(area);

	});

/*parentheses*/
	$("#right_p").click(function(){
		text = $("#right_p").text();
		area = $("#dataInput").val();
		area += text;
			$("#dataInput").val(area);

	});

/*clears everything*/
	$("#erase").click(function(){
		area = "";
			$("#dataInput").val(area);
			count = 0;          //resets solve;
	});

/*Solves everything*/
	$("#solve").click(function(){
		count++;                  //counts number of lines in display;

		if(count < 4){            //keeps display from scrolling;
		area = $("#dataInput").val();
		var x = eval(area);        //solves the string as an equation;
		area += "\n" + x;
			$("#dataInput").val(area);
		}
	});
});