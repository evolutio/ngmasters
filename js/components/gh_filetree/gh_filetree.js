(function(){
  angular.module('gh_filetree', ['githubmodel']);
  
  /** 
   * Mostra na tela a arvore do repositorio GithubModel.repo
   * Chama o callback "onclickfile" quando o usuario clica em algum arquivo.
   */
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


// expandir e colapsar diretorios
// buscar conteudos de um diretorio q ela nao buscou ainda
// cachear os childrens
// ordenar com pastas primeiro
// chamar o callback de clicar no arquivo