function insertionSort(arr){
    for(var i=0; i < arr.length; i++){
        for (var j=i; j < arr.length; j++){
            console.log('Top Index',i,"   inner index",j);
            if (arr[i]>arr[j]){
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
   // console.log('insertionSort')
    return arr;

}
var sort={
    action:function(arr){
       return insertionSort(arr);
    }
}
module.exports=sort;
