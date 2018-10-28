/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  var result = [[1]],_arr=[],length = 2;
	if(rowIndex == 0){
			return result[0];
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
		if(length <= rowIndex+1){
			a()
		}else{
			return 
		}
	})()
	return _arr;
};