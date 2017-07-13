/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
   function exit(){
		nums1.splice(index1,0,nums2[j])
		j++
		index1++;
		big = 0;
		small = 0;
	}
	var big = 0;
	var small = 0
	var j = 0
	var flag = true;
	var index1 = Math.floor(nums1.length/2);
	while(j != nums2.length){
		if(nums1[index1] < nums2[j]){
			index1 ++ ;
			big = 1;
			if(big+small == 2){
				exit()
			}
		}else{
			index1-- ;
			small = 1;
			if(big+small == 2){
				index1 ++
				exit();
			}
		}
	}
    
    var Nlength = nums1.length;
    if(Nlength % 2 == 0){
        return (nums1[(Nlength/2)] + nums1[(Nlength/2)-1])/2
    }else{
        return nums1[Math.floor(Nlength/2)]
    }
};