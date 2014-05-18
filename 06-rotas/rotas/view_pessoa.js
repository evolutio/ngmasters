(function(){
  angular.module('mod_view_pessoa', ['mod_service_people']).
    controller('PessoaCtrl', ['$scope', '$routeParams', 'PeopleService', function($scope, $routeParams, PeopleService){

    	var id = parseInt($routeParams.pessoaId);

      $scope.loading = true;

      PeopleService.get(id).success(function(person){
        $scope.person = person;
        $scope.loading = false;
      });
    }])
})();

