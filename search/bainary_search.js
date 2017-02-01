function search(arr,start_index,end_index,item){
        var length=(end_index-start_index);
        var mid=parseInt(length/2);
            mid=start_index+mid;
        if(arr[mid]==item){
            console.log("done: "+arr[mid]);
        }else if(arr[mid]> item){
              search(arr,start_index,mid-1,item);
        }else{
              search(arr,mid+1,end_index,item);
       }
       
}


function bainarySearch(arr,item){
        console.log(arr,'find ',item);
        start_index=0;
        end_index=arr.length-1;
        search(arr,start_index,end_index,item);
       
}