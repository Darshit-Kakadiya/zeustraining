const todos = document.querySelector('#todos');
const todoInput = document.querySelector('#todo-input');
const addTodoBtn = document.querySelector('#add-btn');
const editTodoBtn = document.querySelector('#edit-btn');
const deleteTodoBtn = document.querySelector('#delete-btn');


addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (todoInput.value === '') {
        alert('Please enter a task');
        return;
    }
    const todo = document.createElement('li');
    todo.classList.add('todo');
    todo.innerHTML = `
    <span class="todo-content">
            <input
              type="checkbox"
              name="completed-task"
              id="completed-checkbox"
            />
            <span class="task">${todoInput.value}</span>
          </span>
          <span class="btn-group">
            <button class="button" id="edit-btn">
              <img src="./icons/edit.png" class="btn-icon" /> Edit</button
            ><button class="button" id="delete-btn">
              <img src="./icons/delete.png" /> Delete
            </button>
          </span>
    `;
    todos.appendChild(todo);
    todoInput.value = '';
});

todos.addEventListener('click', (e) => {
    if (e.target.id === 'delete-btn') {
        e.target.parentElement.parentElement.remove();
    }
    if (e.target.id === 'edit-btn') {
        const task = e.target.parentElement.parentElement.querySelector('.task');
        todoInput.value = task.textContent;
        task.parentElement.parentElement.remove();
    }
    if (e.target.id === 'completed-checkbox') {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
});