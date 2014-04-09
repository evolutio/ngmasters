//Bizu do stackoverflow
//http://stackoverflow.com/questions/646628/how-to-check-if-a-string-startswith-another-string
if (typeof String.prototype.startsWith != 'function') {
  String.prototype.startsWith = function (str){
	return this.slice(0, str.length) == str;
  };
}
if (typeof String.prototype.endsWith != 'function') {
  String.prototype.endsWith = function (str){
	return this.slice(-str.length) == str;
  };
}

if(!window.Global){
    window.Global = {};
}

Global.myapp = angular.module("myapp", []);
Global.myapp.config(function($interpolateProvider){
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

Global.friendly_date = function(d){
    var delta = new Date().getTime() - d.getTime();
    var seconds = Math.floor(delta / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    if(minutes < 1){
        return seconds + " seconds ago";
    } else if(hours < 1){
        return minutes + " minutes ago";
    } else if(days < 1){
        return hours + " hours ago";
    } else {
        return days + " days ago";
    }
}