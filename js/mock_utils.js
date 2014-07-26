Global.mock_ajax = function($timeout, result){
    var callback;
    var promise = {
        success: function(cb){
            callback = cb;
            return r;
        },
        error: function(cb){
            return r;
        }
    };
    $timeout(function(){
        callback(result);
    }, 1000);
    return promise;
}
