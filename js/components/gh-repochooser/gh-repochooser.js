(function(){
  angular.module('mod-gh-repochooser', ['modgithubapi']).directive('ghRepochooser', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/js/components/gh-repochooser/gh-repochooser.html',
      scope: {
          onchooserepo: '&'
      },
      controller: ['$scope', 'Github', '$timeout', function ($scope, Github, $timeout) {
        var DELAY = 800;
        var timer;
        $scope.searchowner_keyup = function(evt){
          if(timer){
            $timeout.cancel(timer)
          }
          timer = $timeout(function(){
            $scope.searching_users = true;
            if($scope.search_owner){
              Github.search_users($scope.search_owner).
                success(function(result){
                  $scope.searching_users = false;
                  $scope.githubusers = result.items;
                  $scope.showusers = true;
                });
            }
            timer = null;
          }, DELAY);
        }

        //Populate repo combo
        $scope.selectowner = function(user){
          $scope.search_owner = user.login;
          $scope.showusers = false;
          $scope.listing_repos = true;
          Github.list_user_repos($scope.search_owner).success(function(repos){
            $scope.listing_repos = false;
            $scope.repos = repos;
          })
        }
      }]
    }
  });
})();