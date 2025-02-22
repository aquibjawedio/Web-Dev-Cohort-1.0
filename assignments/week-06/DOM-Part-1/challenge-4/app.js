/**
    Write your challenge solution here
*/


let totalTasks = 0;
let completedTasks = 0;

const addButton = document.getElementById('addButton');

addButton.addEventListener('click', () => {

    // Adding or deleting empty task note 
    let emptyTaskNote = document.querySelector('.empty-list');


    // Accessing input text of tasks
    const taskInput = document.getElementById('taskInput').value;
    if(!taskInput.trim()) return alert('Enter a valid task');

    // Creating the task - body
    let taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    // Creating task check - box
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.classList.add('complete-checkbox')
    taskItem.appendChild(checkBox);
    
    
    // Check if Completed
    // checkBox.classList.toggle('completed')


    // Adding text to task
    let taskText = document.createElement('p');
    taskText.classList.add('task-text');
    taskText.textContent = taskInput;
    taskItem.appendChild(taskText);


    // delete button adding
    let deleteTask = document.createElement('button');
    deleteTask.textContent = 'Delete';
    deleteTask.classList.add('delete-button');
    taskItem.appendChild(deleteTask);

    //  Adding the task in the list 
    document.querySelector('.task-list').prepend(taskItem);
    totalTasks++;



    // Deleting a task
    deleteTask.addEventListener('click', () => {
        totalTasks--;
        if(taskItem.classList.contains('completed')) {
            completedTasks--;
        }
        taskItem.remove();

        document.getElementById('totalTasks').textContent = `Total tasks: ${totalTasks}`;

        document.getElementById('completedTasks').textContent = `Completed: ${completedTasks}`;

        if(totalTasks === 0) {
            document.querySelector('.task-list').appendChild(emptyTaskNote);
        }
    })

    // Completing a task

    checkBox.addEventListener('click', () => {

        if(taskItem.classList.contains('completed')) {
            completedTasks--;
        } else {
            completedTasks++;
        }

        taskItem.classList.toggle('completed');
        document.getElementById('completedTasks').textContent = `Completed: ${completedTasks}`;
    })

    
    document.getElementById('totalTasks').textContent = `Total tasks: ${totalTasks}`;

    // document.getElementById('completedTasks').textContent = `Completed: ${completedTasks}`;

    
    // Resetting input task
    document.getElementById('taskInput').value = "";
    

    document.querySelector('.empty-list').remove();


})