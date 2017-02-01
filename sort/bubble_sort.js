function bubbleSort(arr){
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
        console.log('bubbleSort')

    return arr;
}