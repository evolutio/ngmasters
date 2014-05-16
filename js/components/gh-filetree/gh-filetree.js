(function(){
  angular.module('mod-gh-filetree', ['modgithubapi']).directive('ghFiletree', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/js/components/gh-filetree/gh-filetree.html',
      scope: {
          repo: '=',
          onclickfile: '&'
      },
      controller: ['$scope', 'Github', function ($scope, Github) {
        $scope.toggle_expand = function(node){
          if(node.type == "dir"){
            if(!node.loaded){
              node.loading = true;
              Github.get_contents($scope.repo.owner.login, $scope.repo.name, "/"+node.path).success(function(contents){
                node.loading = false;
                node.loaded = true;
                node.children = contents;
                node.expanded = true;
              });
            } else {
              node.expanded = !node.expanded;
            }
          }
        };

        $scope.directory_first = function(node){
          return (node.type == 'dir' ? '0' : '1') + node.name;
        };

        $scope.click_file = function(node){
          $scope.onclickfile({repo: $scope.repo, file: node});
        }

        function _reset(){
          $scope.roots = [
            {
              name: "/",
              path: "",
              type: "dir"
            }
          ];
          $scope.toggle_expand($scope.roots[0]);
        }

        $scope.$watch('repo', function(){
          if($scope.repo){
            _reset();
          }
        })

      }]
    }
  });
})();