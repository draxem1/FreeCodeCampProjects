
/*Gets users location */
window.onload = function(){
	var startPos;
	var geoSuccess = function(position) {
		startPos = position;
		var lat = startPos.coords.latitude;
		var long = startPos.coords.longitude;
		getWeather(lat, long);
	};
		navigator.geolocation.getCurrentPosition(geoSuccess);
	}
	function getWeather(lat, long) {
		
	    var apiKey = "91a243fa44ba0126b1f95d2076144b2f";
	    var url = "http://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon=" + long + "&appid=" + apiKey;

	    /*Get weather data from openweathermap api*/
	    $.getJSON(url, function(data) {

	    	var city = data.name;
	    	document.getElementById("location").innerHTML = city;

	    	var heat = data.main.temp;
	    	var t = heat/10;
	    	t = t.toFixed();
	    	document.getElementById("temp").innerHTML = "Temperature: " + t + " C";

	    	var desc = data.weather[0].description;
	    	document.getElementById("descript").innerHTML = desc;

	    	var humid = data.main.humidity;
	    	document.getElementById("humid").innerHTML = "Humidity: " + humid + " %";


	    	var wind = data.wind.speed;
	    	document.getElementById("wind").innerHTML = "Wind Speed: " + wind + " m/s";

	    	/*Attributes the src to the icon image*/
	    	var icon = data.weather[0].icon;
	    	var imageUrl = "http://openweathermap.org/img/w/" + icon + ".png";
	    	$("#icon").attr("src", imageUrl);   

	    	
	    	/*Convert to Fahr*/
	    	$("#fahr").on("click", function(){
	    		var far = (t * 9) / 5 + 32;
	    		far = far.toFixed();
	    		document.getElementById("temp").innerHTML = "Temperature: " + far + " F";
	    	});
	    	
	    	/*Back to Celius*/
	    	$("#cel").on("click", function(){
	    		var far = (t * 9) / 5 + 32;
	    		far = far.toFixed();
	    		document.getElementById("temp").innerHTML = "Temperature: " + t + " C";
	    	});


	    });

	}