Global.mock_ajax = function($timeout, result){
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
