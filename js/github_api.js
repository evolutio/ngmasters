angular.module('github_api', []);

angular.module('github_api').factory('GithubApi', function($http){
	return {
		list_issues: list_issues,
        search_users: search_users,
        list_user_repos: list_user_repos,
        list_issue_comments: list_issue_comments,
        get_contents: get_contents,
        decode_file_contents : decode_file_contents
	};

    function list_issues(owner, repo, page){
        if(!page){
            page = 1;
        }
        var url="https://api.github.com/repos/"+owner+"/"+repo+"/issues";
        return $http.get(url, {params:_add_auth({page: page, state: 'all'})});
    }

    function search_users(q){
        var url="https://api.github.com/search/users";
        return $http.get(url, {params:_add_auth({q: q})});
    }

    function list_user_repos(owner){
        var url="https://api.github.com/users/"+owner+"/repos";
        return $http.get(url, {params:_add_auth({})});
    }

    function list_issue_comments(owner, repo, issue_number){
        var url="https://api.github.com/repos/"+owner+"/"+repo+"/issues/"+issue_number+"/comments";
        return $http.get(url, {params:_add_auth({})});
    }

    function get_contents(owner, repo, path){
        var url="https://api.github.com/repos/"+owner+"/"+repo+"/contents"+path;
        return $http.get(url, {params:_add_auth({})});
    }
    
    function decode_file_contents(contents_base64){
        var lines_base_64 = contents_base64.split("\n");
        var lines = [];
        for(var i=0; i<lines_base_64.length; i++){
            lines.push(atob(lines_base_64[i]));
        }
        return lines.join("");
    }

    function _add_auth(params){
        if(Global.GITHUB_ACCESS_TOKEN){
            params['access_token'] = Global.GITHUB_ACCESS_TOKEN;
        }
        return params;
    }

});