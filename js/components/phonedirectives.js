(function(){

    var modphonedirectives = angular.module('modphonedirectives', ['modphoneapi']);

    // PhoneModel = Objeto compartilhado
    modphonedirectives.factory('PhoneModel', function(){
        return {};
    });

    modphonedirectives.directive('phoneDetail', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/js/components/phonedetail3.html',
            scope: {}, //tah vendo, escopo ISOLADO!
            controller: ['$scope', 'PhoneModel', function ($scope, PhoneModel) {

                //guarda o objeto no escopo (aih a gente pode usar no template!)
                $scope.model = PhoneModel;

                if($scope.model.selected_phone){
                    if(!$scope.model.selected_phone.selected_image){
                        $scope.model.selected_phone.selected_image = $scope.phone.images[0];
                    }
                }
                $scope.select_image = function(img){
                    $scope.model.selected_phone.selected_image = img;
                };
            }]
        }
    });

    modphonedirectives.directive('phoneList', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/js/components/phonelist.html',
            scope: {}, //tah vendo, escopo ISOLADO!
            controller: ['$scope', 'PhoneApi', 'PhoneModel', function ($scope, PhoneApi, PhoneModel) {
                $scope.model = PhoneModel;

                $scope.loading = true;
                PhoneApi.list_all().success(function(phones){
                    $scope.phones = phones;
                    $scope.loading = false;
                })

                $scope.select = function(ind){
                    var p = $scope.phones[ind];
                    $scope.model.selected_index = ind;
                    $scope.loading = true;
                    PhoneApi.get_phone(p.id).success(function(data){
                        $scope.loading = false;
                        $scope.model.selected_phone = data;
                        $scope.model.selected_phone.selected_image = data.images[0];
                    });
                };
            }]
        }
    });

})();