(function(){
    angular.module('mod_service_people', []);
    angular.module('mod_service_people').factory('PeopleAPI', ['$timeout', function($timeout) {
        var people = [
            {
                id: 1,
                name: 'Joao da Silva',
                idade: 32
            },
            {
                id: 2,
                name: 'Maria das Dores',
                idade: 23
            },
            {
                id: 3,
                name: 'Jaqueline de Brito',
                idade: 17
            }
        ];
        return {
            list_people: function(){
                return Global.mock_ajax($timeout, people);
            },
            get: function(id){
                for(var i=0; i<people.length; i++){
                    if(id === people[i].id){
                        return Global.mock_ajax($timeout, people[i]);
                    }
                }
            }
        };
    }]);

    angular.module('mod_service_people').factory('PessoasModel', ['PeopleAPI', function(PeopleAPI){
        var m = {
            pessoas: [],
            pessoa: null,
            loading: false,
        };
        m.load_all = function(){
            m.loading = true;
            PeopleAPI.list_people().success(function(pessoas){
                m.pessoas = pessoas;
                m.loading = false;
            });
        };
        m.load_pessoa = function(id){
            m.loading = true;
            PeopleAPI.get(id).success(function(pessoa){
                m.pessoa = pessoa;
                m.loading = false;
            });
        };
        return m;
    }]);
})();

