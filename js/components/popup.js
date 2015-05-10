(function(){
    angular.module('popup', []);
    
    angular.module('popup').directive('mypopup', function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: '/js/components/popup.html',
            scope: {
                visible: '=',
                titulo: '@'
            },
            controller: function ($scope) {
                $scope.close = function(){
                    $scope.visible = false;
                }

                $scope.$watch('visible', function(){
                    console.log('mudou: '+$scope.visible);
                });
            }
        }
    });
})();