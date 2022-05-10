// Deliverables:
// DONE: As a user, I should be able to type a task into the input field.
// DONE: As a user, I should be able to click some form of a submit button.
// DONE: As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

// Stretch Deliverables:
// DONE: A delete function that will remove tasks from your list
document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("#create-task-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        createTodoItem(e.target.new_task_description.value);
        // This is so that we can reset the text input field for each task after we click the form button:
        form.reset();        
    })
});

function createTodoItem(todo) {
    let p = document.createElement("p");
    let button = document.createElement("button");
    button.textContent = 'x';
    button.addEventListener("click", handleDelete);
    p.textContent = `${todo} `;
    p.appendChild(button);
    
    document.querySelector("#tasks").appendChild(p);
}

function handleDelete(e) {
    e.target.parentNode.remove();
}
