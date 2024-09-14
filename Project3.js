const contentContainer = document.getElementById("content-container");
const inputText = document.getElementById("input-text");
const addTask = document.getElementById("add-task");

addTask.addEventListener('click', function () {
    let task = document.createElement('div');
    task.classList.add("task");

    let li = document.createElement('li');
    li.innerText = `${inputText.value}`;
    task.appendChild(li);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "X";
    deleteButton.classList.add('deleteBtn');
    task.appendChild(deleteButton);

    if (inputText.value === "") {
        alert("please enter a task");
    }
    else {
        contentContainer.appendChild(task);
    };

    inputText.value = "";

    deleteButton.addEventListener('click', function () {
        this.parentElement.style.display = 'none';
    });

    task.addEventListener('click', function () {
        li.style.textDecoration = 'line-through';
        task.style.backgroundColor = '#968787';
    });
});
console.log("hello");
