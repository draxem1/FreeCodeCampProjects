


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