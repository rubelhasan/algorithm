var bubble_sort=require('./bubble_sort');
var insertion_sort=require('./insertion_sort');
var merge_sort=require('./merge_sort');
var selection_sort=require('./selection_sort');
var quick_sort=require('./quick_sort');

var sort_object={
	bubbleSort:function(arr){
		return bubble_sort.action(arr);
	},
	insertionSort:function(arr){
		return	insertion_sort.action(arr);
	},
	selectionSort:function(arr){
		return selection_sort.action(arr);
	},
	mergeSort:function(arr){
		return merge_sort.action(arr);
	},
	quickSort:function(arr){
		return quick_sort.action(arr);
	}


}
module.exports=sort_object;