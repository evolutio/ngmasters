Global.myapp.directive('phoneDetail', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/js/components/phonedetail.html',
        controller: function ($scope) {
            $scope.select_image = function(img){
                $scope.selected_phone.selected_image = img;
            };
        }
    }
});
