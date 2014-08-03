Global.mock_ajax = function($timeout, result){
    var callback;
    var promise = {
        success: function(cb){
            callback = cb;
            return promise;
        },
        error: function(cb){
            return promise;
        }
    };
    $timeout(function(){
        callback(result);
    }, 1000);
    return promise;
}
