(function(){
  angular.module('gh_filetree', ['githubmodel']);
  
  angular.module('gh_filetree').directive('ghFiletree', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/js/components/gh_filetree/gh_filetree.html',
      scope: {
          onclickfile: '&'
      },
      controller: function ($scope, GithubModel) {

        var gm = $scope.gm = GithubModel;

        $scope.directory_first = function(node){
          return (node.type == 'dir' ? '0' : '1') + node.name;
        };

        $scope.click_file = function(node){
          $scope.onclickfile({file: node});
        }
      }
    }
  });
})();