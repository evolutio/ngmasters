(function(){
    angular.module('modphoneapi', ['ajax']);
    
    angular.module('modphoneapi').factory('PhoneApi', function(Ajax){
		return {
			get_phone: function(id){
				var url="/phones/"+id+".json";
				return Ajax.get(url);
			},
			list_all: function(){
				var url="/phones.json";
				return Ajax.get(url);
			}
		}
	});
})();
