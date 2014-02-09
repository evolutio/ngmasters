$(document).ready(function(){

	function loadTodos(){
		$.get('/02-jquery/todos.json').success(function(todos){
			for(var i=0; i < todos.length; i++){
				addTodo(todos[i]);
			}
		});
	}

	function addTodo(todo){
		var todoHTML = '<tr>';
		todoHTML += '<td class="todocheck"><input type="checkbox"' + (todo.done ? 'checked' : '') +'></td>';
		todoHTML += '<td class="js-todotodo ' + (todo.done ? 'tododone' : '') +'">'+ todo.todo +'</td>';
		todoHTML += '<td class="todoremove"><a href="#"><i class="icon-trash"></i></a></td>';
		todoHTML += '</tr>';
		var $todoHTML = $(todoHTML)
		instrument($todoHTML);
		$('#todotable').append($todoHTML)
	}

	function instrument($todo){
		var $checkbox = $todo.find('.todocheck input');
		
		$checkbox.change(function(evt){
			var ischecked = evt.target.checked
			if(ischecked){
				$todo.find('.js-todotodo').addClass('tododone')
				//TODO: avisar o backend
			} else {
				$todo.find('.js-todotodo').removeClass('tododone')
				//TODO: avisar o backend
			}
		});
	}

	loadTodos();
});

