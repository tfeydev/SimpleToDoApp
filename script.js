// Select the form, input, and list elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event listener for form submission
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTask = todoInput.value;

    if (newTask === '') {
        alert('Please enter a task!');
        return;
    }
    todoInput.value = '';
    addTask(newTask);
});

// Function to add a task
function addTask(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;

    // Add delete button
    // const deleteButton = document.createElement('button');
    // deleteButton.textContent = 'Delete';
    // deleteButton.addEventListener('click', function() {
    //     todoList.removeChild(listItem);
    // });
    // listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
}
