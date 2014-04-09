(function(){
    angular.module('modpopup', []).directive('mypopup', function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: '/js/components/popup.html',
            scope: {
                visible: '=',
                titulo: '@'
            },
            controller: ['$scope', function ($scope) {
                $scope.close = function(){
                    $scope.visible = false;
                }
            }]
        }
    });
})();