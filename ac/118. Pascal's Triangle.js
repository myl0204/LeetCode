var generate = function(numRows) {
	var result = [[1]],_arr=[],length = 2;

	if(numRows == 0){
		result.splice(0)
		return 
	}else if(numRows == 1){
		return
	}

	(function a(){
		var arr = [];
		arr.push(1);
		for(var i = 1;i<length-1;i++){
			arr.push(_arr[i-1]+_arr[i])
		}
		arr.push(1);
		result.push(arr);
		length++;
		_arr = arr;
		if(length <= numRows){
			a()
		}
	})()
	return result;
}