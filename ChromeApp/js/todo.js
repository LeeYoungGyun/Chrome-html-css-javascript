const todoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    // JSON.stringify : object 나 array 등을 string 으로 변환
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    // console.log(li);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault()
    const newTodo = toDoInput.value;
    toDoInput.value = ""; // input칸을 비우기
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if( savedToDos !== null) {
    //  JSON.parse : string을 배열로 만듬
    const parsedToDos = JSON.parse(savedToDos);
    // 새로고침하면 todos가 없어지지 않게 수정
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}






