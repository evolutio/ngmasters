myapp.factory('Github', function($http){
	return {
		list_issues: function(owner, repo, page){
			if(!page){
				page = 1;
			}
			var url="https://api.github.com/repos/"+owner+"/"+repo+"/issues";
			return $http.get(url, {params:{page: page, state: 'all'}});
		},
        search_users: function(q){
            var url="https://api.github.com/search/users";
            return $http.get(url, {params:{q: q}});
        }
	}
})