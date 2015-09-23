(function(){
    angular.module('phone_api', ['ajax']);
    
    angular.module('phone_api').factory('PhoneApi', function(Ajax){
		return {
			get_phone: get_phone,
			list_all: list_all
		};

		function get_phone(id){
			var url="/phones/"+id+".json";
			return Ajax.get(url);
		}

		function list_all(){
			var url="/phones.json";
			return Ajax.get(url);
		}
	});
})();
