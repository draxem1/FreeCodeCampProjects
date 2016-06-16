
 var jason = [
					{"name": '"Never love anybody that treats you like your ordinary" <br /> -oscar wilde'},
					{"name": '"Your going to have to hit me harder than that!" <br /> -nick legato'},
					{"name": '"You can have results or excuses. Not both"<br /> -arnold schwarzenegger'},
					{"name": '"Don\'t pray for an easy life, pray for the strength to endure one"<br />  -bruce lee'},
					{"name": '"The only easy day was yesterday" <br /> -us navy seals'},
					{"name": '"I tried being resonable, I didn\'t like it" <br /> -clint eastwood'},
					{"name": '"There can be only one" <br /> -highlander'},
					{"name": '"Luietenant Dan! You got your legs back!" <br /> -forrest gump'},
					{"name": '"OOOOOOOHHHHHHHHH YYYYYEEEEEEAAAAAAHHHHHHH" <br /> -randy savage'},
					{"name": '"Everything is impossible, until someone crazy enough comes along and makes it possible" <br /> -ct fletcher'
					}];

function randomQuote(val){
  	
  	var newQuote;
  	var check = document.getElementById("random").innerHTML;
   if(newQuote !== check){

  	switch(val) {
  		case 1: newQuote = jason[0]["name"];
  		break;
  		case 2: newQuote = jason[1]["name"];
  		break;
  		case 3: newQuote = jason[2]["name"];
  		break;
  		case 4: newQuote = jason[3]["name"];
  		break;
  		case 5: newQuote = jason[4]["name"];
  		break;
  		case 6: newQuote = jason[5]["name"];
  		break;
  		case 7: newQuote = jason[6]["name"];
  		break;
  		case 8: newQuote = jason[7]["name"];
  		break;
  		case 9: newQuote = jason[8]["name"];
  		break;
  		case 10: newQuote = jason[9]["name"];
  		break;
 				}
 				document.getElementById("random").innerHTML = newQuote;
 			}
 			else
 			{
 				randomNumber();
 			}
}

function randomNumber(){
var min = 1;
var max = 10;
var num = Math.floor(Math.random() * (max - min + 1)) + min;
return randomQuote(num);
}
