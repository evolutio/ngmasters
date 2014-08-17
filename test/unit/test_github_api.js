describe("testes do Github API", function() {

	beforeEach(angular.mock.module('modgithubapi'));

	afterEach(inject(function($httpBackend){
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    }));

    it('modgithubapi deve carregar ok', function(){
        expect(!!angular.module('modgithubapi')).equal(true);
		console.log('Nao eh q carregou o modulo mesmo rapaz!');
    });

    it('Github deve existir e ter alguns metodos la', inject(function(Github){
    	expect(!!Github.list_issues).equal(true);
    	expect(!!Github.search_users).equal(true);
		console.log('Boa, os metodos do Github API estao aih!');
    }));

    it('Github.search_users deve acessar api.github.com/search/users', inject(function($httpBackend, Github){
    	$httpBackend.expectGET('https://api.github.com/search/users?q=joao').respond('OK');
    	var le_result = 'blau';
        Github.search_users('joao').success(function(result){
            le_result = result;
        });
        expect(le_result).equal('blau');
		$httpBackend.flush();
        expect(le_result).equal('OK');
		console.log('(UFA ne...) Github.search_users("joao") = api.github.com/search/users?q=joao');
    }));


});
