function jumpSearch(arr,item){
	var length=4
	// working on jumsearch
	for(var i=0; i < arr.length+100; i++){
		console.log(length);
		 length=2 * length
	}

}


var search={
	action:function(arr,item){
		return	jumpSearch(arr,item)
	}
}

module.exports=search