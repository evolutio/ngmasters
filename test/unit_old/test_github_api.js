describe("testes do GithubApi", function() {

	beforeEach(angular.mock.module('github_api'));

	afterEach(inject(function($httpBackend){
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    }));

    it('github_api deve carregar ok', function(){
        expect(!!angular.module('github_api')).equal(true);
		console.log('Nao eh q carregou o modulo mesmo rapaz!');
    });

    it('GithubApi deve existir e ter alguns metodos la', inject(function(GithubApi){
    	expect(!!GithubApi.list_issues).equal(true);
    	expect(!!GithubApi.search_users).equal(true);
		console.log('Boa, os metodos do GithubApi estao aih!');
    }));

    it('GithubApi.search_users deve acessar api.github.com/search/users', inject(function($httpBackend, GithubApi){
    	$httpBackend.expectGET('https://api.github.com/search/users?q=joao').respond('OK');
    	var le_result = 'blau';
        GithubApi.search_users('joao').success(function(result){
            le_result = result;
        });
        expect(le_result).equal('blau');
		$httpBackend.flush();
        expect(le_result).equal('OK');
		console.log('(UFA ne...) GithubApi.search_users("joao") = api.github.com/search/users?q=joao');
    }));
});
