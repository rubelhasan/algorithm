var bubble_sort=require('./bubble_sort');
var insertion_sort=require('./insertion_sort');
var marge_sort=require('./marge_sort');
var selection_sort=require('./selection_sort');

var sort_object={
	bubbleSort:function(arr){
		return bubble_sort.action(arr);
	},
	insertionSort:function(){
		console.log("hello i am insertion_sort");
	}

}
module.exports=sort_object;