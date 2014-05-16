(function(){
  angular.module('mod-gh-reponavigator', ['modgithubapi']).directive('ghReponavigator', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/js/components/gh-reponavigator/gh-reponavigator.html',
      scope: {
          onchooserepo: '&'
      },
      controller: ['$scope', 'Github', function ($scope, Github) {
        
      }]
    }
  });
})();