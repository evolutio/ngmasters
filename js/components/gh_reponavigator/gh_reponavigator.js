(function(){
  angular.module('gh_reponavigator', ['gh_repochooser', 'popup', 'gh_filetree']);

  /** 
   * Navegador de arquivos do Github
   */
  angular.module('gh_reponavigator').directive('ghReponavigator', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/js/components/gh_reponavigator/gh_reponavigator.html',
      scope: {},
      controller: function ($scope, GithubModel) {

        var gm = $scope.gm = GithubModel;
        
        $scope.escolheuorepo = function(repo){
          gm.reset_repo();
        };

        $scope.abrearquivo = function(file){
          $scope.current_file = file;
          $scope.showpopup = true;
          gm.carrega_arquivo(file);
        };
      }
    }
  });
})();
