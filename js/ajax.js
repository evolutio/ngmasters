
Global.myapp.config(
    function($httpProvider){
        //Essa configuração pode ser dependente de como seu backend implementa a proteção CSRF
        $httpProvider.defaults.headers.common['X-CSRFToken'] = Global.CSRF_TOKEN; // alguem precisa ter setado isso aqui!
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    }
);

// Eu nao gosto muito de usar o $http diretamente.
// A api do $http pra fazer get post deveria ser:

// $http.get(url, {p1: 'v1', p2: 'v2'})
// $http.post(url, {p1: 'v1', p2: 'v2'})

// Mas se vc usar ela desse jeito, os posts não vão funcionar.

// Então eu crio um wrapper chamado "ajax" que tem os métodos 
// get e post do jeitinho que eu quero.
// Depois eu injeto esse "ajax" aonde eu quiser.

Global.myapp.factory('ajax', function($http){
    return {
        get: function(url, params){
            if(!params){
                params = {};
            }
            return $http({
                method: 'GET',
                url: url,
                params: params //ta vendo, pra GET a gente passa params
            });
        },
        post: function(url, params){
            if(!params){
                params = {};
            }
            return $http({
                method: 'POST',
                url: url,
                data: $.param(params) //e pra post a gente passa data
            });
        }
    };
});
