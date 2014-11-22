(function(){
  angular.module('mod-gh-filetree', ['githubmodel']).directive('ghFiletree', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/js/components/gh-filetree/gh-filetree.html',
      scope: {
          onclickfile: '&'
      },
      controller: ['$scope', 'GithubModel', function ($scope, GithubModel) {

        var gm = $scope.gm = GithubModel;

        $scope.directory_first = function(node){
          return (node.type == 'dir' ? '0' : '1') + node.name;
        };

        $scope.click_file = function(node){
          $scope.onclickfile({file: node});
        }
      }]
    }
  });
})();