(function(){
    angular.module('mod_view_pessoa', ['mod_service_people']);
    angular.module('mod_view_pessoa').controller('PessoaCtrl', 
        function($scope, $stateParams, PessoasModel){
            var m = $scope.m = PessoasModel;
            var id = parseInt($stateParams.pessoaId);
            m.load_pessoa(id)
        }
    );
})();

