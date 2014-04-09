(function(){
    angular.module('modphonedetail', []).directive('phoneDetail', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/js/components/phonedetail2.html',
            scope: {
                titulo: '@',
                phone: '=',
            },
            controller: ['$scope', function ($scope) {
                $scope.select_image = function(img){
                    $scope.phone.selected_image = img;
                };
            }]
        }
    });
})();