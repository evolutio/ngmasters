(function(){
    //Atenção pro detalhe do array no lugar da função!
    angular.module('modajax', []).factory('ajax', ['$http', function($http){
        return {
            get: function(url, params){
                if(!params){
                    params = {};
                }
                return $http({
                    method: 'GET',
                    url: url,
                    params: params
                });
            },
            post: function(url, params){
                if(!params){
                    params = {};
                }
                return $http({
                    method: 'POST',
                    url: url,
                    data: $.param(params)
                });
            }
        };
    }]);
})();

