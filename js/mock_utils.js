angular.module('mock_utils', []);

angular.module('mock_utils').factory('MockUtils', function($timeout){
    return {
        mock_ajax: mock_ajax
    };

    function mock_ajax(result){
        var promise = {
            success: function(cb){
                promise.callback = cb;
                return promise;
            },
            error: function(cb){
                return promise;
            }
        };
        $timeout(function(){
            promise.callback(result);
        }, 1000);
        return promise;
    }
});