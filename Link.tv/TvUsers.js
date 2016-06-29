$(document).ready(function(){

	var arr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
	var url = "https://api.twitch.tv/kraken/streams/";

	var str;
	var streamers = [];
	var offlineUsers = [];
	var logo ;
	var urlString;
	var name;
	var link;
	var status;
 
 	/*Get The information needed*/
	for(var i=0; i<arr.length; i++){
		
	$.getJSON(url + arr[i] + "?callback=?", function(data){

		/*gets online users*/
		if(data["stream"] !== null){

		logo = "<div id=\"on\" class=\"row well\"><div class=\"col-xs-2\"><img src=\"" + data["stream"]["channel"]["logo"] + "\"></div>";
		link = "<a href=\"" + data["stream"]["channel"]["url"] + "\" target=\"_blank\">";
		status = "<div class=\"col-xs-6\" align=\"center\"><p>" + data["stream"]["channel"]["status"] + "</p></div>";
		name = "<div class=\"col-xs-3\"><h2>" + link + data["stream"]["channel"]["name"] + "</a></h2></div>"+ status + "</div>";
		urlString = logo + name;
		streamers.push(urlString);

	}
		/*Gets off line users*/
		else if(data["stream"] === null){

			$.getJSON(data["_links"]["channel"], function(data) {

		logo = "<div id=\"off\" class=\"row well\"><div class=\"col-xs-2\"><img src=\"" + data["logo"] + "\"></div>";
		link = "<a href=\"" + data["url"] + "\" target=\"_blank\">";
		status = "<div class=\"col-xs-6\" align=\"center\"><p class=\"words\">Offline</p></div>";
		name = "<div class=\"col-xs-3\"><h2>" + link + data["name"] + "</a></h2></div>"+ status + "</div>";
		urlString = logo + name;
		offlineUsers.push(urlString);

			});
		}
	});
}

	/*Displays all Streamers*/
	$("#All").click(function(){

		var everyOne = streamers.concat(offlineUsers);

		$("#output").html("");

 		$("#output").prepend(everyOne);

 		});

	/*Displays Only Online Streamers*/
	$("#Online").click(function(){

		$("#output").html("");

 		$("#output").prepend(streamers);
		
	});

	/*Displays Only Offline Streamers*/
	$("#Offline").click(function(){
		
		$("#output").html("");

		$("#output").prepend(offlineUsers);

	});

});