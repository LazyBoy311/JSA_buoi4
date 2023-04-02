const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("button");
const todo = document.getElementById("todo");

let todoList = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});

const addTodo = () => {
  const newTodo = input.value;
  if (!newTodo) return console.log("No value") || alert("No value");
  todoList.push({
    text: newTodo,
  });
  localStorage.setItem("todos", JSON.stringify(todoList));
  console.log(localStorage.getItem("todos"));
  render();
};

const render = () => {
  todoList = JSON.parse(localStorage.getItem("todos")) || [];
  for (let i = 0; i < todoList.length; i++) {
    let li = document.createElement("li");
    todo.appendChild(li);
    li.innerHTML = `${todoList[i]["text"]}`;
    let div = document.createElement("div");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    div.appendChild(checkbox);
    let btn = document.createElement("button");
    let text = document.createTextNode("x");
    btn.appendChild(text);
    div.appendChild(btn);
    li.appendChild(div);
  }
};
