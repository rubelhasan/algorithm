function mergeSort(arr){
    if (arr.length < 2){
        return arr;
    }
    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);
 	// console.log('divided',left,right)
    return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right)
{
 	// console.log('marge','left',left,'right',right)
    var result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length){
        result.push(left.shift());
    }
    while (right.length){
        result.push(right.shift());
    }
    // console.log('pushd content',result)
     return result;
}



var sort={
    action:function(arr){
      return mergeSort(arr);
    }
}

module.exports=sort;