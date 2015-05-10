(function(){
    angular.module('popup_dois', []);

    angular.module('popup_dois').directive('mypopup2', function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: '/js/components/popup.html', //vou usar o mesmo temlpate da outra!!
            scope: {
                visible: '=',
                titulo: '@',
                onclose: '&'
            },
            controller: function ($scope) {
                $scope.close = function(){
                    $scope.visible = false;
                    $scope.onclose();
                }
            }
        }
    });

    angular.module('popup_dois').directive('mypopup3', function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: '/js/components/popup.html',
            scope: {
                visible: '=',
                titulo: '@',
                onclose: '&'
            },
            controller: function ($scope) {
                var counter = 0;
                $scope.close = function(){
                    $scope.visible = false;
                    counter++;
                    $scope.onclose({counter: counter});
                }
            }
        }
    });
})();