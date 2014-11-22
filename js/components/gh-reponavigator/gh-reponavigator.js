(function(){
  angular.module('mod-gh-reponavigator', ['mod-gh-repochooser', 'modpopup', 'mod-gh-filetree']).directive('ghReponavigator', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/js/components/gh-reponavigator/gh-reponavigator.html',
      scope: {},
      controller: ['$scope', 'GithubModel', function ($scope, GithubModel) {

        var gm = $scope.gm = GithubModel;
        
        $scope.escolheuorepo = function(repo){
          gm.reset_repo();
        };

        $scope.abrearquivo = function(file){
          $scope.current_file = file;
          $scope.showpopup = true;
          gm.carrega_arquivo(file);
        };

      }]
    }
  });
})();