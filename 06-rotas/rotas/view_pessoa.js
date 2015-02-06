(function(){
    angular.module('mod_view_pessoa', ['mod_service_people']);
    angular.module('mod_view_pessoa').controller('PessoaCtrl', ['$scope', '$routeParams', 'PessoasModel', 
        function($scope, $routeParams, PessoasModel){
            var m = $scope.m = PessoasModel;
            var id = parseInt($routeParams.pessoaId);
            m.load_pessoa(id)
        }
    ]);
})();

