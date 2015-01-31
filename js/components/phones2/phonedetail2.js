(function(){
    angular.module('modphonedetail', []).directive('phoneDetail', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/js/components/phones2/phonedetail2.html',
            scope: {
                titulo: '@',
                phone: '=',
            },
            controller: ['$scope', function ($scope) {
                if($scope.phone){
                    if(!$scope.phone.selected_image){
                        $scope.phone.selected_image = $scope.phone.images[0];
                    }
                }
                $scope.select_image = function(img){
                    $scope.phone.selected_image = img;
                };
            }]
        }
    });
})();