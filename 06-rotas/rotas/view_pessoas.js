(function(){
  angular.module('mod_view_pessoas', ['mod_service_people']).
    controller('PessoasCtrl', ['$scope', 'PeopleService', function($scope, PeopleService){

      $scope.loading = true;

      PeopleService.list_people().success(function(people){
        $scope.people = people;
        $scope.loading = false;
      });

    }]);
})();

