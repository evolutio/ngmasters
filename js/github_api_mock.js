Global.myapp.factory('Github', function($timeout){
    var users = {
        "total_count": 233,
        "incomplete_results": false,
        "items": [
            {
                "login": "joao",
                "id": 594112,
                "avatar_url": "https://avatars.githubusercontent.com/u/594112?",
                "gravatar_id": "39ebccd822b6fb533e004ee722c38e9d",
                "url": "https://api.github.com/users/tonylukasavage",
                "type": "User"
            },
            {
                "login": "josé",
                "id": 31147,
                "avatar_url": "https://avatars.githubusercontent.com/u/31147?",
                "gravatar_id": "43b2ca65e7a2cadf849adf103e6c066d",
                "url": "https://api.github.com/users/tonylukasavage",
                "type": "User"
            }
        ]
    };

    var repos = [
        {
            "id": 15615544,
            "name": "maquina-do-tempo",
            "full_name": "tonylampada/maquina-do-tempo",
            "description": "Uma máquina do tempo",
            "owner": {
                "login": "tonylampada"
            }
        },
        {
            "id": 123,
            "name": "outro-repo",
            "full_name": "tonylampada/outro-repo",
            "description": "Um outro repositório",
            "owner": {
                "login": "tonylampada"
            }
        }
    ];

    var issues = [
        {
            "number": 1,
            "title": "Estabilizar o capacitor de fluxo",
            "user": {
                "login": "tonylampada"
            },
            "state": "open",
            "created_at": "2012-10-17T05:48:17Z",
            "updated_at": "2012-10-17T05:49:37Z",
            "body": "blablabla"
        },
        {
            "number": 2,
            "title": "Reduzir velocidade de salto para 88mph",
            "user": {
                "login": "tonylampada"
            },
            "state": "open",
            "created_at": "2012-10-17T05:48:17Z",
            "updated_at": "2012-10-17T05:49:37Z",
            "body": "blebleble"
        },
        {
            "number": 3,
            "title": "Abastecimento com combustível orgânico (cascas de banana e afins)",
            "user": {
                "login": "tonylampada"
            },
            "state": "open",
            "created_at": "2012-10-17T05:48:17Z",
            "updated_at": "2012-10-17T05:49:37Z",
            "body": "blebleble"
        }
    ];    

    var comments = [
        {
            "user": {
                "login": "tonylampada",
                "avatar_url": "https://avatars.githubusercontent.com/u/218821?",
                "gravatar_id": "4dbc40e7a6fa89a3568a926378c22ace",
            },
            "created_at": "2014-04-08T20:11:10Z",
            "updated_at": "2014-04-08T20:11:10Z",
            "body": "Precisa ser 88mph!\r\nMais do que isso não vai ter pista o suficiente..."
        },
        {
            "user": {
                "login": "tonylampada",
                "avatar_url": "https://avatars.githubusercontent.com/u/218821?",
                "gravatar_id": "4dbc40e7a6fa89a3568a926378c22ace",
            },
            "created_at": "2014-04-08T20:11:10Z",
            "updated_at": "2014-04-08T20:11:10Z",
            "body": "Consegui a 128mph, mas acabei tomando uma multa de transito :P"
        },
    ];

	return {
		list_issues: function(owner, repo, page){
            return Global.mock_ajax($timeout, issues);
		},
        search_users: function(q){
            return Global.mock_ajax($timeout, users);
        },
        list_user_repos: function(owner){
            return Global.mock_ajax($timeout, repos);
        },
        list_issue_comments: function(owner, repo, issue_number){
            return Global.mock_ajax($timeout, comments);
        }
	}
});
