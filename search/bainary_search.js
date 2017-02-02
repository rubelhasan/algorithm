function bainarySearch(arr,start_index,end_index,item){
        if (start_index<end_index){
          var length=(end_index-start_index);
          var mid=parseInt(length/2);
              mid=start_index+mid;
          if(arr[mid]==item){
            console.log(arr[mid],item);
            return item;
          }else if(arr[mid]> item){
               bainarySearch(arr,start_index,mid-1,item);
          }else{
               bainarySearch(arr,mid+1,end_index,item);
          }
        }
    }
var search={
    action:function(arr,item){
       var start_index=0;
       var end_index=arr.length-1;
       return bainarySearch(arr,start_index,end_index,item);

    }
}
module.exports=search