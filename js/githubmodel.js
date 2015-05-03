angular.module('githubmodel', ['github_api']);
angular.module('githubmodel').factory('GithubModel', function(GithubApi, $log){

	function _next_page(repo){
		if(!repo.issues){
			return 1;
		} else if(repo.no_more_issues){
			return -1;
		} else {
			return 1 + repo.issues.length / 30;
		}
	}

	var gm = {
		username_input: '',
		buscando_usuarios: false,
		usuarios_encontrados: [],
		mostra_usuarios_encontrados: false,
		user: null,
		buscando_repositorios: false,
		repos_encontrados: [],
		repo: null, //setado externamente via binding
		buscando_issues: false,
	};

	gm.busca_usuarios_pelo_nome = function(){
		gm.buscando_usuarios = true;
		GithubApi.search_users(gm.username_input).success(function(result){
			gm.buscando_usuarios = false;
			gm.usuarios_encontrados = result.items;
			gm.mostra_usuarios_encontrados = true;
		});
	};

	gm.escolhe_usuario = function(user){
		gm.user = user;
		gm.username_input = user.login;
		gm.mostra_usuarios_encontrados = false;
	};

	gm.busca_repos_do_usuario = function(){
		gm.buscando_repositorios = true;
		GithubApi.list_user_repos(gm.user.login).success(function(repos){
			gm.buscando_repositorios = false;
			gm.repos_encontrados = repos;
		});
	};

	gm.busca_mais_issues = function(){
		if(gm.repo){
			var page = _next_page(gm.repo);
			if(page > 0){
				gm.buscando_issues = true;
				GithubApi.list_issues(gm.repo.owner.login, gm.repo.name, page).success(function(issues){
					$log.info('got '+issues.length+' issues');
					if(!gm.repo.issues){
						gm.repo.issues = [];
					}
					gm.repo.issues = gm.repo.issues.concat(issues);
					if(issues.length < 30){
						gm.repo.no_more_issues = true;
					}
					gm.buscando_issues = false;
				}).error(function(result, status){
					$log.error("status "+status);
					$log.error(result);
					alert(result.message);
					gm.buscando_issues = false;
				});
			}
		}
	};

	gm.reset_repo = function(){
		if(gm.repo){
			gm.repo.issues = [];
		}
		gm.repo.files = [
			{
				name: "/",
				path: "",
				type: "dir"
			}
		];
	}

	gm.toggle_expand = function(node){
		if(node.type == "dir"){
			if(!node.loaded){
				node.loading = true;
				GithubApi.get_contents(gm.repo.owner.login, gm.repo.name, "/"+node.path).success(function(contents){
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

	gm.carrega_arquivo = function(node){
		if(!node.file_contents){
			node.loading = true;
			GithubApi.get_contents(gm.repo.owner.login, gm.repo.name, "/"+node.path).success(function(result){
				node.loading = false;
				node.loaded = true;
				node.file_contents = GithubApi.decode_file_contents(result.content);
			});
		}
	};

	gm.carrega_comentarios_da_issue = function(issue){
		if(!issue.comment_list){
			issue.loading_comments = true;
			GithubApi.list_issue_comments(gm.repo.owner.login, 
									   gm.repo.name, 
									   issue.number).success(function(comments){
				issue.comment_list = comments;
				issue.loading_comments = false;
			});
		}
	};

	return gm;
});