(function(){

    angular.module('modphonedirectives', ['modphoneapi']);

    // PhoneModel = Objeto compartilhado
    angular.module('modphonedirectives').factory('PhoneModel', ['PhoneApi', function(PhoneApi){
        var m = {
            phones: [],
            selected_index: -1,
            selected_phone: null,
            loading: false
        };

        m.load = function(){
            m.loading = true;
            PhoneApi.list_all().success(function(phones){
                m.phones = phones;
                m.loading = false;
            });
        }

        m.select = function(ind){
            var p = m.phones[ind];
            p.is_selected = !p.is_selected;
            m.selected_index = ind;
            m.loading = true;
            PhoneApi.get_phone(p.id).success(function(data){
                m.loading = false;
                m.selected_phone = data;
                m.selected_phone.selected_image = data.images[0];
            });
        };
        m.select_image = function(img){
            m.selected_phone.selected_image = img;
        };
        return m;
    }]);

    angular.module('modphonedirectives').directive('phoneDetail', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/js/components/phones3/phonedetail3.html',
            scope: {}, //tah vendo, escopo ISOLADO!
            controller: ['$scope', 'PhoneModel', function ($scope, PhoneModel) {
                var m = $scope.m = PhoneModel;
            }]
        }
    });

    angular.module('modphonedirectives').controller('PhoneListCtrl', ['$scope', 'PhoneModel', function ($scope, PhoneModel) {
        var m = $scope.m = PhoneModel;
        m.load();
    }]);

    angular.module('modphonedirectives').directive('phoneList', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/js/components/phones3/phonelist.html',
            scope: {}, //tah vendo, escopo ISOLADO!
            controller: 'PhoneListCtrl'
        }
    });

})();