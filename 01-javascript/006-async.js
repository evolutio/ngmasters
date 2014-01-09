
function helloworld(){
	alert("Hello World");
}

function alert_in_3(){
	setTimeout(helloworld, 3000);
}

function alert_in_3_denovo(){
	setTimeout(function(){
		alert("Hello world de novo!")
	}, 3000);
}

var timer;
function ei_ei_ei(){
	timer = setInterval(function(){
		console.log('ei...');
		console.log('ei vc aí!');
	}, 1000)
}

function chega(){
	console.log('Pára de encher!')
	clearInterval(timer);
}

function ajax_sim(){

}

function ajax_nao(){
	
}