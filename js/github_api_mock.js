angular.module('github_api', ['mock_utils']);

angular.module('github_api').factory('GithubApi', function(MockUtils){

    var DB = _build_fake_db();

    return {
        list_issues: list_issues,
        search_users: search_users,
        list_user_repos: list_user_repos,
        list_issue_comments: list_issue_comments,
        get_contents: get_contents,
        decode_file_contents: decode_file_contents,
        _mock_issues: _mock_issues,
        _mock_contents: _mock_contents
    };

    function list_issues(owner, repo, page){
        return MockUtils.mock_ajax(DB.issues);
    }

    function search_users(q){
        return MockUtils.mock_ajax(DB.users);
    }

    function list_user_repos(owner){
        return MockUtils.mock_ajax(DB.repos);
    }

    function list_issue_comments(owner, repo, issue_number){
        return MockUtils.mock_ajax(DB.comments);
    }

    function get_contents(owner, repo, path){
        return MockUtils.mock_ajax(DB.contents);
    }

    function decode_file_contents(contents_base64){
        // Por causa de um erro de design (esse método não deveria existir nesse objeto), 
        // tivemos que duplicar código
        var lines_base_64 = contents_base64.split("\n");
        var lines = [];
        for(var i=0; i<lines_base_64.length; i++){
            lines.push(atob(lines_base_64[i]));
        }
        return lines.join("");
    }

    function _mock_issues(_issues){
        DB.issues = _issues;
    }

    function _mock_contents(_contents){
        DB.contents = _contents;
    }

    function _build_fake_db(){
        var DB = {}

        DB.joao = {
            "login": "joao",
            "id": 594112,
            "avatar_url": "https://avatars.githubusercontent.com/u/594112?",
            "gravatar_id": "39ebccd822b6fb533e004ee722c38e9d",
            "url": "https://api.github.com/users/tonylukasavage",
            "type": "User"
        };
        DB.jose = {
            "login": "josé",
            "id": 31147,
            "avatar_url": "https://avatars.githubusercontent.com/u/31147?",
            "gravatar_id": "43b2ca65e7a2cadf849adf103e6c066d",
            "url": "https://api.github.com/users/tonylukasavage",
            "type": "User"
        };
        DB.users = {
            "total_count": 233,
            "incomplete_results": false,
            "items": [DB.joao, DB.jose],
        };
        DB.repos = [
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

        DB.issues = [
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

        DB.comments = [
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
        DB.contents = [];
        return DB;
    }


});
