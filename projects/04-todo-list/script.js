const addTask = document.querySelector('.add-task');

addTask.addEventListener('click', () => {

    let date = new Date();
    date = date.toLocaleDateString();

    const singleTask = document.createElement('div');
    singleTask.classList.add('single-task');


    const taskContent = document.createElement('p');
    taskContent.classList.add('task-content');
    taskContent.textContent = document.querySelector('.task-input').value || "Hello Aquib Jawed";

    const taskDate = document.createElement('div');
    taskDate.classList.add('task-date');
    taskDate.textContent =  date;
    
    const deleteTask = document.createElement('button');
    deleteTask.classList.add('delete-task');
    deleteTask.textContent = "Delete";

    const editTask = document.createElement('button');
    editTask.classList.add('edit-task');
    editTask.textContent = "Edit";

    editTask.addEventListener('click', () => {
        document.querySelector('.task-input').value = taskContent.textContent;
        addTask.addEventListener('click', () => {
            singleTask.remove();
        })
    })


    deleteTask.addEventListener('click', () => {
        singleTask.remove();
    })

    singleTask.appendChild(taskContent);
    singleTask.appendChild(deleteTask);
    singleTask.appendChild(editTask);
    singleTask.appendChild(taskDate);


    document.querySelector('.task-center').appendChild(singleTask);

    document.querySelector('.task-input').value = "";


})