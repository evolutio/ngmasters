'use strict';

(function(){
  angular.module('mod_view_pessoas', ['mod_service_people']);

  angular.module('mod_view_pessoas').
    controller('PessoasCtrl', function($scope, PessoasModel){
    	var m = $scope.m = PessoasModel;
    	if(m.pessoas.length == 0){
	    	m.load_all();
    	}
    });
})();

