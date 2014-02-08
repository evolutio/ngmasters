function soma(a, b){
	return a + b;
}

function somatudo(){
	var s = 0;
	for(i in arguments){
		s += arguments[i];
	}
	return s;
}

function n_alerts(){
	function alertaiiii(x){
		alert(x);
	}
	for(i in arguments){
		alertaiiii(arguments[i]);
	}
	return alertaiiii;
}

var f1 = function(x, y){
	return x * y;
};

var f2 = soma;

var reduce = function(array, f_reducer){
	while(array.length > 1){
		var take2 = array.splice(0,2);
		array.push(f_reducer(take2[0], take2[1]));
	}
	return array[0];
}

