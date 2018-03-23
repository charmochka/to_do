
var todoForm = document.getElementById('todo-form');
var addInput = document.getElementById('add-input');
var todoList = document.getElementById('todo-list');
var todoItems = document.querySelectorAll('.todo-item');


console.log('listItem')
var creatTodoItem = function (title) {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    var label = document.createElement('label');
    label.innerText = title;
    label.className = 'title';

    var editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className='textfield';

    var editButton = document.createElement('button');
    editButton.innerText = 'Изменить';
    editButton.className = 'edit';

    var deletButton = document.createElement('button');
    deletButton.innerText = 'Удалить';
    deletButton.className = 'delete';


    var listItem = document.createElement('li');
    listItem.className = 'todo-item';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deletButton);
    
    bindEvents(listItem);

    return listItem;
}

var bindEvents = function(todoItem) {
    var checkbox = todoItem.querySelector('.checkbox');
    var editButton = todoItem.querySelector('button.edit');
    var deletButton = todoItem.querySelector('button.delete');

    checkbox.addEventListener('change', toggleTodoItem);
    editButton.addEventListener('click', editTodoItem);
    deletButton.addEventListener('click', deleteTodoItem);
}

var addtodoItemHandler = function(evt) {
    evt.preventDefault();

    if (addInput.value === '')
    return alert('Введите название задачи.')

    var todoItem = creatTodoItem(addInput.value);
    todoList.appendChild(todoItem);

    addInput.value = "";
}

var toggleTodoItem = function(evt) {
    console.log(this)
}

var editTodoItem = function() {

}

var deleteTodoItem = function() {
    
}



todoForm.addEventListener('submit', addtodoItemHandler)