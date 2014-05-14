(function(){
    angular.module('mod-gh-repochooser', []).directive('ghRepochooser', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/js/components/gh-repochooser/gh-repochooser.html',
            scope: {
                onchooserepo: '&'
            },
            controller: ['$scope', 'Github', function ($scope, Github) {
                //TODO
            }]
        }
    });
})();