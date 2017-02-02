var bubbleSort={
    action:function(arr){
            //O(n2)
          for (var i=0; arr.length > i; i++){
            for (j=0; arr.length > j; j++){
                if ( arr[j] > arr[j+1]){
                    var sp=arr[j+1];
                        arr[j+1]=arr[j];
                        arr[j]=sp;
                }
            }
        }
        return arr;
    }
}

module.exports=bubbleSort;
