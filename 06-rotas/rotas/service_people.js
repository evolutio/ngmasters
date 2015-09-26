(function(){
    angular.module('mod_service_people', ['mock_utils']);
    angular.module('mod_service_people').factory('PeopleAPI', function(MockUtils) {
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
                return MockUtils.mock_ajax(people);
            },
            get: function(id){
                for(var i=0; i<people.length; i++){
                    if(id === people[i].id){
                        return MockUtils.mock_ajax(people[i]);
                    }
                }
            }
        };
    });

    angular.module('mod_service_people').factory('PessoasModel', function(PeopleAPI){
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
    });
})();

