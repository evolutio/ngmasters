(function(){
  angular.module('mod_view_pessoas', ['mod_service_people']).
    controller('PessoasCtrl', ['$scope', 'PessoasModel', function($scope, PessoasModel){
    	var m = $scope.m = PessoasModel;
    	m.load_all();
    }]);
})();

