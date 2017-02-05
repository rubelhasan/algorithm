function selectionSort(arr){
    for( var i=0; i <arr.length ; i++){
        var currentIndex=i;
        for(var j=i; j < arr.length; j++){
            console.log('Top Index',i,"   inner index",j);
            if(arr[currentIndex] > arr[j]){
                currentIndex=j;
            }
        }
        temp=arr[i];
        arr[i]=arr[currentIndex];
        arr[currentIndex]=temp;
    }
    console.log('selectionSort')
    return arr;
}
var sort={
    action:function(arr){
      return  selectionSort(arr);
    }
}
module.exports=sort;
