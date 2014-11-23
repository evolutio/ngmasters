describe("testes do GithubModel", function() {

    var mock_resp_usuarios = {
        items: [
            {
                login: 'tonylampada',
                name: 'Tony'
            }, 
            {
                login: 'tonymanero',
                name: 'John Travolta'
            }
        ]
    };

    var mock_resp_repos = [
        {name: 'Projeto um'},
        {name: 'Projeto dois'},
    ];

	beforeEach(angular.mock.module('githubmodel'));

	afterEach(inject(function($httpBackend){
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    }));

    it('githubmodel deve carregar ok', function(){
        expect(!!angular.module('githubmodel')).equal(true);
		console.log('modulo githubmodel carregou bonitao');
    });

    it('GithubModel deve saber buscar usuarios', inject(function(GithubModel, $httpBackend){
        GithubModel.username_input = 'tony';
        $httpBackend.expectGET('https://api.github.com/search/users?q=tony').respond(mock_resp_usuarios);

        GithubModel.busca_usuarios_pelo_nome();
        expect(GithubModel.buscando_usuarios).equal(true);
        expect(GithubModel.usuarios_encontrados.length).equal(0);

        $httpBackend.flush();
        expect(GithubModel.buscando_usuarios).equal(false);
        expect(GithubModel.usuarios_encontrados.length).equal(2);
        expect(GithubModel.usuarios_encontrados[1].name).equal('John Travolta');
        console.log('GithubModel consegue buscar usuarios');
    }));

    it('GithubModel deve saber buscar repositorios', inject(function(GithubModel, $httpBackend){
        GithubModel.escolhe_usuario(mock_resp_usuarios.items[0]);

        $httpBackend.expectGET('https://api.github.com/users/tonylampada/repos').respond(mock_resp_repos);

        GithubModel.busca_repos_do_usuario();
        expect(GithubModel.buscando_repositorios).equal(true);
        expect(GithubModel.repos_encontrados.length).equal(0);

        $httpBackend.flush();
        expect(GithubModel.buscando_repositorios).equal(false);
        expect(GithubModel.repos_encontrados.length).equal(2);
        expect(GithubModel.repos_encontrados[1].name).equal('Projeto dois');
        console.log('GithubModel consegue buscar repositorios');
    }));

});
