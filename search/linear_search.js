function linearSearch(arr,item){
	//O(n)
	for (var i =0; i<arr.length; i++) {
		if (arr[i]==item){
			return item;
		}
	};
	return "not found";	
}


var search={
	action:function(arr,item){
		return	linearSearch(arr,item)
	}
}

module.exports=search