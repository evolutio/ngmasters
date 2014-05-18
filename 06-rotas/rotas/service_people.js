(function(){
  angular.module('mod_service_people', []).factory('PeopleService', ['$timeout', function($timeout) {

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
})();

