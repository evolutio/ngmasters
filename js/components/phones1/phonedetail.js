(function(){
    angular.module('phonedetail', ['phonemodel']);
    
    angular.module('phonedetail').directive('phoneDetail', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/js/components/phones1/phonedetail.html',
            //olha aí de novo o array no lugar da função...
            controller: function ($scope, PhoneModel) {
                var m = $scope.m = PhoneModel;
            }
        }
    });
})();