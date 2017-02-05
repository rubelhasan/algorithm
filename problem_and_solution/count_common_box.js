var box=[10,20,30,30,50,60,70,80,90,100,110,120];
var item_size=30;
var start_index=0;
var end_index=box.length-1;
//console.log("Box : ","item_size:",item_size);
var box_count= bainarySearch(box,start_index,end_index,item_size);
//console.log(box_count);

function bainarySearch(arr,start_index,end_index,item){
        if (start_index<=end_index){
            var length=(end_index-start_index);
            var mid=parseInt(length/2);
              mid=start_index+mid;
          if(arr[mid]==item){
            return countCommon(arr,mid);
          }else if(arr[mid]> item){
             return  bainarySearch(arr,start_index,mid-1,item);
          }else{
            return   bainarySearch(arr,mid+1,end_index,item);
          }
        }else{
          return "not found";
        }
    }

function countCommon(arr,mid){
  //need more improvement
    var count=0;
    var lengthRight=mid+2;
    var lengthLeft=mid-1
    console.log('mid:',mid,'lengthLeft',lengthLeft,'lengthRight',lengthRight);
    //right
      for(var i=mid+1; i < lengthRight;i++){
        if (arr[mid]==arr[i]){
          console.log('lengthRight',count,i)
           count++
           lengthRight++;
        }
      }
    //left
      for(var i=mid; i > lengthLeft;i--){
        if (arr[mid]==arr[i]){
          console.log('lengthLeft',count,i)
          count++
          lengthLeft--;
        }
      }

  return count;


}