var o = {name: 'Objeto'};
o.alertnow = function(){
	alert(this);
}
o.alertlater = function(){
	setTimeout(function(){
		alert(this)
	}, 1000);
}


function ajax_faz_de_conta(msg, url, lineNumber){
	console.log('Enviando erro pro servidor: '+url+':'+lineNumber+' - '+msg);
}

function dapau(){
	var x = undefined;
	x.do_somenthing();
}

function set_onerror1(){
	function ErrorLogger(){
		this.ja_loguei = {};
	}

	ErrorLogger.prototype.log_error = function(msg, url, lineNumber){
		console.log('peguei o erro');
		if(!this.ja_loguei[msg]){
			ajax_faz_de_conta(msg, url, lineNumber);
			this.ja_loguei[msg] = true;
		}
	}

	var logger = new ErrorLogger()
	window.onerror = logger.log_error;
}

function set_onerror2(){
	function ErrorLogger(){
		this.ja_loguei = {};
	}

	ErrorLogger.prototype.log_error_generator = function(){
		var _this = this;
		var log_error = function(msg, url, lineNumber){
			console.log('peguei o erro');
			if(!_this.ja_loguei[msg]){
				ajax_faz_de_conta(msg, url, lineNumber);
				_this.ja_loguei[msg] = true;
			}
		}
		return log_error;
	}

	var logger = new ErrorLogger()
	window.onerror = logger.log_error_generator();
}

//nem olha pra ca aqui ainda... :-)
$(function(){
  $('[jsfunctioncontent]').each(function(index, el){
    el.innerHTML = window[el.getAttribute('jsfunctioncontent')]+"";
  });
});
