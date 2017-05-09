function TodoController() {
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	var todoService = new TodoService();

	function drawTodos(data) {
		var elem = document.getElementById('todo');
		var template = '';
		var todoTemplate = '';
		for (var i = 0; i < data.length; i++) {
			var todo = data[i];
			template += `
					${todo} <button type="button" onclick="app.controllers.todoController.removeTodo('${todo}')"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button><br>
				`
		}
		if (data.length > 0) {
			var todos = data.length;
			todoTemplate = `
			<h5>To do: ${todos}</h5>`
		}
		return elem.innerHTML = template + todoTemplate;
	}

	this.addTodoFromForm = function (e) {
		e.preventDefault();
		var form = e.target;

		var todosArry = todoService.getTodos(form.todo.value);
		todosArry.push(form.todo.value);
		todoService.saveTodos(todosArry);
		drawTodos(todosArry);
	}

	this.uncheck = function uncheck(todo) {
		//debugger
		for (var i = 0; i < todosArray.length; i++) {
			var currentTodo = todosArray[i]
			if (todo == currentTodo) {
				todosArray.splice(currentTodo, 1);
			}
		}
		drawTodos(todosArray);
	}
}
