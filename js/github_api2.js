angular.module('github_api', ['ajax']);

angular.module('github_api').factory('GithubApi', function(Ajax){
    function add_auth(params){
        if(Global.GITHUB_ACCESS_TOKEN){
            params['access_token'] = Global.GITHUB_ACCESS_TOKEN;
        }
        return params;
    }

	return {
		list_issues: function(owner, repo, page){
			if(!page){
				page = 1;
			}
			var url="https://api.github.com/repos/"+owner+"/"+repo+"/issues";
			return Ajax.get(url, add_auth({page: page, state: 'all'}));
		},
        search_users: function(q){
            var url="https://api.github.com/search/users";
            return Ajax.get(url, add_auth({q: q}));
        },
        list_user_repos: function(owner){
            var url="https://api.github.com/users/"+owner+"/repos";
            return Ajax.get(url, add_auth({}));
        },
        list_issue_comments: function(owner, repo, issue_number){
            var url="https://api.github.com/repos/"+owner+"/"+repo+"/issues/"+issue_number+"/comments";
            return Ajax.get(url, add_auth({}));
        },
        get_contents: function(owner, repo, path){
            var url="https://api.github.com/repos/"+owner+"/"+repo+"/contents"+path;
            return Ajax.get(url, add_auth({}));
        },
        decode_file_contents : function(contents_base64){
            var lines_base_64 = contents_base64.split("\n");
            var lines = [];
            for(var i=0; i<lines_base_64.length; i++){
                lines.push(atob(lines_base_64[i]));
            }
            return lines.join("");
        }
	}
});