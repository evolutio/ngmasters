(function(){
  angular.module('mod-gh-repochooser', ['githubmodel']).directive('ghRepochooser', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/js/components/gh-repochooser/gh-repochooser.html',
      scope: {
          onchooserepo: '&'
      },
      controller: ['$scope', 'GithubModel', '$timeout', function ($scope, GithubModel, $timeout) {
        var gm = $scope.gm = GithubModel;

        var DELAY = 800;
        var timer;
        $scope.searchowner_keyup = function(evt){
          if(timer){
            $timeout.cancel(timer)
          }
          timer = $timeout(function(){
            if(gm.username_input){
              gm.busca_usuarios_pelo_nome();
            }
            timer = null;
          }, DELAY);
        }

        //Populate repo combo
        $scope.selectowner = function(user){
          gm.escolhe_usuario(user);
          gm.busca_repos_do_usuario();
        }
      }]
    }
  });
})();