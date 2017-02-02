var bainary_search=require('./bainary_search');
var search ={
	bainarySearch:function(arr,item){
		return bainary_search.action(arr,item);
	},
	linearSearch:function(){
		console.log('linear search');
	}
}


module.exports=search;