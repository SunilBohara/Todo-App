const formTodo = document.querySelector(".form-todo");
const buttons = document.querySelector(".container");

buttons.addEventListener("click",doneAndDelete);
formTodo.addEventListener("submit",addTodo);

function addTodo(e) {
    e.preventDefault();
    const input_value = document.getElementById("todo-data");
    const container = document.querySelector(".container");
    const div = document.createElement("div");
    div.classList.add("todo-list-box");
    const todo_list_item = 
    `
    <li>${input_value.value}</li>
    <button class="btnDone">Done</button>
    <button class="btnDelete">Delete</button>
    `;
    div.innerHTML = todo_list_item;
    container.append(div);
    input_value.value = "";
}

function doneAndDelete(e) {
    if (e.target.classList.contains("btnDone") && e.target.tagName === "BUTTON") {
        console.log(e.target.previousElementSibling);
        e.target.previousElementSibling.style.textDecoration = "line-through";
    } else if (e.target.classList.contains("btnDelete") && e.target.tagName === "BUTTON") {
        console.log(e.target.parentNode);
        e.target.parentElement.remove();
    }
}
