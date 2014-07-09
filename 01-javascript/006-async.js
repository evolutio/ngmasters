
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
	console.log('Pára de encher!');
	clearInterval(timer);
}

function soma_assincrona_callback(a, b, callback){
	setTimeout(function(){
		callback(a+b);
	}, 1000);
}

function soma_assincrona_promessa(a, b){
	var promessa = {
		then: function(callback){
			promessa.callback = callback;
		}
	};
	setTimeout(function(){
		promessa.callback(a+b);
	}, 1000);
	return promessa;
}

function ajax_sim(){
	var url = 'https://api.github.com/repos/freedomsponsors/www.freedomsponsors.org/issues'
	$.get(url).success(function(result){
		console.log('02 - do que isso!');
		console.table(result);
	});
	console.log('01 - isso roda antes...');
}

function ajax_nao(){
	function getGithubIssues(){
		var issues = [];
		var url = 'https://api.github.com/repos/freedomsponsors/www.freedomsponsors.org/issues'
		$.get(url).success(function(result){
			issues = result;
		});
		return issues;
	}

	var issues = getGithubIssues();
	console.table(issues); // quéééééén!
}

//nem olha pra ca aqui ainda... :-)
$(function(){
  $('[jsfunctioncontent]').each(function(index, el){
    el.innerHTML = window[el.getAttribute('jsfunctioncontent')]+"";
  });
});
