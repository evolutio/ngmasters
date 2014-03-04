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

var myapp = angular.module("myapp", []);
myapp.config(function($interpolateProvider){
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});
