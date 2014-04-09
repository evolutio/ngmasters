(function(){
    angular.module('modphonedetail', []).directive('phoneDetail', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/js/components/phonedetail.html',
            //olha aí de novo o array no lugar da função...
            controller: ['$scope', function ($scope) {
                $scope.select_image = function(img){
                    $scope.selected_phone.selected_image = img;
                };
            }]
        }
    });
})();