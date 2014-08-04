(function(){
    angular.module('modphoneapi', ['modajax']).factory('PhoneApi', ['ajax', function(ajax){
		return {
			get_phone: function(id){
				var url="/phones/"+id+".json";
				return ajax.get(url);
			},
			list_all: function(){
				var url="/phones.json";
				return ajax.get(url);
			}
		}
	}]);
})();
