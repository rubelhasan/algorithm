
function inversionCount(arr) {
	var inversionCount=0;
    for (var i =0; arr.length > i; i++) {
       for (var j=0; j < i; j++){
            if (arr[i]<arr[j]){
               inversionCount++
            }else{
                var sp=arr[j];
                arr[j]=arr[i];
                arr[i]=sp 
            }
       }
        
    }
	
    return arr
}