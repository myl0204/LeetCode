//写的有点乱，找机会改进。
var spiralOrder = function(matrix) {
		    var result = [];
		    var m = matrix.length; //rows
		    if(!m || !matrix[0].length) {
		    	return matrix;
		    }
		    var n = matrix[0].length;
		    if(m == 1) {
		    	return matrix[0];
		    }else if(n == 1) {
		    		for(var k = 0 ; k < m; k++) {
		    			result.push(matrix[k][0])
		    		}
		    		return result;
		    }
		    var i = 0,
		    		j = 0,
		    		count = 0;
		    (function push(){
			    for ( i ; i < n - 1; i++) {
			    	result.push(matrix[j][i])
			    }
			    for( j ; j < m - 1 ; j++) {
			    	result.push(matrix[j][i])
			    }
			    for(i = n - 1 ; i > count ; i--) {
			    	result.push(matrix[j][i])
			    }
			    for(j = m - 1 ; j > count ; j--) {
			    	result.push(matrix[j][i])
			    }
			    count ++
			    var min = m <= n ? m-count - 1 : n - count -1 ;
			    if(min > 1){
			    	i++ & j++;
			    	m-- & n--;
			    	push()
			    }else{
			    	m = m - count - 1;
			    	n = n - count - 1;
			    }
			  })()
		    switch(true) {
		    	case m == 1:
		    		for(var i = count ; i < n + count ; i++){
		    			result.push(matrix[count][i])
		    		}
		    		break;
		    	case n == 1:
		    		for(var j = count ; j < m + count  ; j++){
		    			result.push(matrix[j][count])
		    		}
		    		break;
		    }
			  
			  return result
		    
		};