class Todo {
  constructor(todo) {
    this.item = todo;
  }
}

class UIHandle {
  static displayTodo() {
    const todoItems = [];

    todoItems.forEach((todo) => UIHandle.addTodoToList(todo));
  }

  static addTodoToList(todo) {
    const list = document.querySelector('#todoList');

    const ul = document.createElement('ul');

    ul.classList.add('text-center');
    ul.classList.add('mt-3');

    ul.innerHTML = `
      <li class="complete">${todo.item} <span class="btn btn-danger btn-sm delete">X</span></li>
    `;

    list.appendChild(ul);
  }

  static removeTodo(event) {
    event.parentElement.remove();
  }

  static completeTodo(event) {
    event.style.textDecoration = 'line-through';
    event.style.color = 'green';
  }

  static clearValue() {
    document.querySelector('#todoItem').value = '';
  }
}

window.addEventListener('load', UIHandle.displayTodo());

document.querySelector('#submit').addEventListener('click', (event) => {
  event.preventDefault();
  const currentItem = document.querySelector('#todoItem').value;

  const newItem = new Todo(currentItem);

  UIHandle.addTodoToList(newItem);
  UIHandle.clearValue();
});

document.querySelector('#todoList').addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    UIHandle.removeTodo(e.target);
  }
  if (e.target.classList.contains('complete')) {
    UIHandle.completeTodo(e.target);
  }
});
