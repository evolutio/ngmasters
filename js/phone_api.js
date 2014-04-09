Global.myapp.factory('PhoneApi', function(ajax){
	return {
		get_phone: function(id){
			var url="/phones/"+id+".json";
			return ajax.get(url);
		}
	}
});