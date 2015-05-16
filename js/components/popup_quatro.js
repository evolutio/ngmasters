(function(){
    angular.module('popup_quatro', []);

    angular.module('popup_quatro').directive('mypopup4', function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: '/js/components/popup.html', //dinovo!
            scope: {
                visible: '=',
                titulo: '@',
            },
            controller: function ($scope, $rootScope) {
                $scope.close = function(){
                    $scope.visible = false;
                };
                
                $scope.$watch('visible', function(){
                    console.log('WATCH! popup Visivel = '+$scope.visible);
                    // lanca_evento();
                });

                function lanca_evento(){
                    var evt = {visible: $scope.visible};
                    $scope.$broadcast('evento-de-popup', evt); //pra baixo
                    $scope.$emit('evento-de-popup', evt); //pra cima
                    // $rootScope.$broadcast('evento-de-popup', evt); //A torra poda
                }
            }
        }
    });
})();
