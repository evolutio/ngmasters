$(document).ready(function(){

	function loadTodos(){
		$.get('/02-jquery/todos.json').success(function(todos){
			if (typeof todos == 'string'){
				todos = JSON.parse(todos);
			}
			for(var i=0; i < todos.length; i++){
				addTodo(todos[i]);
			}
		});
	}

	function addTodo(todo){
		var todoHTML = '<tr>';
		todoHTML += '<td class="todocheck"><input type="checkbox"' + (todo.done ? 'checked' : '') +'></td>';
		todoHTML += '<td class="' + (todo.done ? 'tododone' : '') +'">'+ todo.todo +'</td>';
		todoHTML += '<td class="todoremove"><a href="#"><i class="icon-trash"></i></a></td>';
		todoHTML += '</tr>';
		$('#todotable').append(todoHTML)
	}

	loadTodos();
});

