$(document).ready(function(){

	/*random search*/
	$("#random").click(function(){
		window.open("https://en.wikipedia.org/wiki/Special:Random");
	});

	/*Users Search*/
	$("#submit").click(function(){
		var text = $(".box").val();
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + text + "&format=json&callback=?"

		$.ajax({
		type: 'GET',
		url: url,
		dataType: "json",
		success: function(data) {
			var arr=[];
			$("#output").html("");

			/*places all searched json into array*/
			for (var i = 0; i < data[1].length; i++) {
			var heading = data[1][i];
			var summary = data[2][i];
			var pageLink = data[3][i];
			var urlString = "<li><a href= " + pageLink + ">" + heading + "</a><p>" + summary + "</p></li>";
			arr.push(urlString);
		}

		/*Displays all json in array to html*/
		$("#output").prepend(arr);



		/*Changes the css of the list*/
		$("li").css("background-color", "#fff");
		$("li").css("font-size", "20px");

		$("li").click(function(){
			window.open(pageLink);
		});
	}
});
	});
});