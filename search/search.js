var bainary_search=require('./bainary_search');
var linear_search=require('./linear_search');
var jump_search=require('./jump_search');
var search ={
	bainarySearch:function(arr,item){
		return bainary_search.action(arr,item);
	},
	linearSearch:function(arr,item){
		return linear_search.action(arr,item);
	},
	jumpSearch:function(arr,item){
		return jump_search.action(arr,item);
	}

}


module.exports=search;