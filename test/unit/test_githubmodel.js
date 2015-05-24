describe("testes do GithubModel", function() {

	beforeEach(angular.mock.module('githubmodel'));

	afterEach(inject(function($timeout){
        $timeout.verifyNoPendingTasks();
    }));

    it('githubmodel deve carregar ok', function(){
        expect(!!angular.module('githubmodel')).equal(true);
		console.log('modulo githubmodel carregou bonitao');
    });

    it('[uada876ewig] GithubModel buscar usuarios', inject(function(GithubModel, $timeout){
        GithubModel.username_input = 'tony';

        GithubModel.busca_usuarios_pelo_nome();
        expect(GithubModel.buscando_usuarios).equal(true);
        expect(GithubModel.usuarios_encontrados.length).equal(0);

        $timeout.flush();
        expect(GithubModel.buscando_usuarios).equal(false);
        expect(GithubModel.usuarios_encontrados.length).equal(2);
        expect(GithubModel.usuarios_encontrados[1].login).equal('josé');
        console.log('[OK] GithubModel buscar usuarios');
    }));

    it('GithubModel buscar repositorios', inject(function(GithubModel, GithubApi, $timeout){
        GithubModel.escolhe_usuario({
            "login": "joao",
            "id": 594112,
        });

        GithubModel.busca_repos_do_usuario();
        expect(GithubModel.buscando_repositorios).equal(true);
        expect(GithubModel.repos_encontrados.length).equal(0);

        $timeout.flush();
        expect(GithubModel.buscando_repositorios).equal(false);
        expect(GithubModel.repos_encontrados.length).equal(2);
        expect(GithubModel.repos_encontrados[0].name).equal('maquina-do-tempo');
        console.log('[OK] GithubModel buscar repositorios');
    }));

    it('GithubModel buscar issues', inject(function(GithubModel, GithubApi, $timeout){
        GithubModel.repo = {
            name: 'Projeto_um',
            owner: {
                "login": "joao",
                "id": 594112,
            }
        };
        GithubModel.reset_repo();

        GithubApi._mock_issues(_build_mock_issues(30));

        GithubModel.busca_mais_issues();
        expect(GithubModel.buscando_issues).equal(true);
        expect(GithubModel.repo.issues.length).equal(0);

        $timeout.flush();
        expect(GithubModel.buscando_issues).equal(false);
        expect(GithubModel.repo.issues.length).equal(30);
        expect(GithubModel.repo.issues[1].title).equal('Issue 2');

        GithubModel.busca_mais_issues();
        $timeout.flush();
        expect(GithubModel.repo.issues.length).equal(60);
        expect(GithubModel.repo.issues[31].title).equal('Issue 2');

        console.log('[OK] GithubModel buscar issues');
    }));

    it('GithubModel listar diretorios', inject(function(GithubModel, GithubApi, $timeout){
        var repo = GithubModel.repo = {
            name: 'Projeto_um',
            owner: {
                "login": "joao",
                "id": 594112,
            }
        };
        GithubModel.reset_repo();
        var root = repo.files[0];
        GithubApi._mock_contents(_build_mock_files_and_folders(root.path));

        GithubModel.toggle_expand(root);
        expect(root.loading).equal(true);
        expect(!root.loaded).equal(true);
        expect(!root.children).equal(true);

        $timeout.flush();
        expect(root.loading).equal(false);
        expect(root.loaded).equal(true);
        expect(root.expanded).equal(true);
        expect(root.children.length).equal(3);
        expect(root.children[0].path).equal('Pasta1/');

        GithubModel.toggle_expand(root);
        expect(root.loading).equal(false);
        expect(root.loaded).equal(true);
        expect(root.expanded).equal(false);
        expect(root.children.length).equal(3);

        var child1 = root.children[0];

        GithubApi._mock_contents(_build_mock_files_and_folders(child1.path));
        GithubModel.toggle_expand(child1);
        expect(child1.loading).equal(true);
        expect(!child1.loaded).equal(true);
        expect(!child1.children).equal(true);

        $timeout.flush();
        expect(child1.loading).equal(false);
        expect(child1.loaded).equal(true);
        expect(child1.expanded).equal(true);
        expect(child1.children.length).equal(3);
        expect(child1.children[0].path).equal('Pasta1/Pasta1/');
        expect(child1.children[2].path).equal('Pasta1/arquivo.txt');
        console.log('[OK] GithubModel listar diretorios');
    }));

    it('GithubModel carregar arquivos', inject(function(GithubModel, GithubApi, $timeout){
        var repo = GithubModel.repo = {
            name: 'Projeto_um',
            owner: {
                "login": "joao",
                "id": 594112,
            }
        };
        GithubModel.reset_repo();
        var root = repo.files[0];

        GithubApi._mock_contents(_build_mock_files_and_folders(root.path));
        GithubModel.toggle_expand(root);
        $timeout.flush();

        var child3 = root.children[2];

        GithubApi._mock_contents({
            content: "ZGphbmd1bGFyMgo9PT09PT09PT09Cgpjb250aW51YWNhbyBkbyB0dXRvcmlhbCAiRGphbmd1bGFyIgo="
            //base64 pra:
            // djangular2
            // ==========
            // continuacao do tutorial "Djangular"
        });
        GithubModel.carrega_arquivo(child3);
        expect(child3.loading).equal(true);
        expect(!child3.loaded).equal(true);
        expect(!child3.file_contents).equal(true);

        $timeout.flush();
        expect(child3.loading).equal(false);
        expect(child3.loaded).equal(true);
        expect(child3.file_contents.indexOf('djangular2') >= 0).equal(true);
        console.log('[OK] GithubModel carregar arquivos');
    }));

    function _build_mock_issues(count){
        var result = [];
        for(var i=0; i<count; i++){
            result.push({
                title: 'Issue ' + (i+1)
            });
        }
        return result;
    }

    function _build_mock_files_and_folders(path){
        return [
            {
                name: 'Pasta1',
                path: path + 'Pasta1/',
                type: 'dir'
            },
            {
                name: 'Pasta2',
                path: path + 'Pasta2/',
                type: 'dir'
            },
            {
                name: 'arquivo.txt',
                path: path + 'arquivo.txt',
                type: 'file'
            }
        ];
    }
});
