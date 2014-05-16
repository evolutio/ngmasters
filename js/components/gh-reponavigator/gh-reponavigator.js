(function(){
  angular.module('mod-gh-reponavigator', ['mod-gh-repochooser', 'modpopup', 'mod-gh-filetree']).directive('ghReponavigator', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/js/components/gh-reponavigator/gh-reponavigator.html',
      scope: {},
      controller: ['$scope', 'Github', function ($scope, Github) {
        
        $scope.escolheuorepo = function(repo){
          $scope.selected_repo = repo;
        };

        $scope.abrearquivo = function(repo, file){
          $scope.current_file = file;
          if(file.file_contents){
            $scope.showpopup = true;
          } else {
            Github.get_contents($scope.selected_repo.owner.login, $scope.selected_repo.name, file.path).success(function(result){
              file.file_contents = Github.decode_file_contents(result.content);
              $scope.showpopup = true;
            });
          }
        }

      }]
    }
  });
})();