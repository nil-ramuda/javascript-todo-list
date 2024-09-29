const onClickAdd = () => {
  let allTasksCount = 0;
      completeTasksCount = 0,
      imcompleteTasksCount = 0;
  allTasksCount += 1;
  imcompleteTasksCount += 1;
  console.log(allTasksCount);
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  const li = document.createElement("li");
  const div = document.createElement("div");
  const input = document.createElement("input");
  const span = document.createElement("span");
  const label = document.createElement("label");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const saveButton = document.createElement("button");
  const inputTextChange = e => span.innerText = e.target.value;
  // const inputTextChange = e => this.value;
  // const inputTextChange = e => span.innerText = this.value;
  saveButton.innerText = "保存";
  input.type = "checkbox"
  
  input.id = "todo-item";
  input.className = "todo-checkbox";
  span.innerText = inputText;
  span.className = "todo-text";
  div.className = "list-row";
  editButton.innerText = "編集";
  editButton.className = "edit-button";
  deleteButton.className = "delete-button";
  editButton.addEventListener("click", () => {
    editButton.remove(),
    deleteButton.remove(),
    span.remove();
    input.type = "text";
    input.value = span.innerText;
    input.focus();
    input.oninput = inputTextChange;
    div.appendChild(saveButton);
  });
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const result = confirm("本当に削除してよろしいですか？");
    if (result) {
      const deleteTargetTodo = deleteButton.closest("li");
      document.getElementById("todo-list").removeChild(deleteTargetTodo);
    }
  });

  saveButton.addEventListener("click", () => {
    input.addEventListener("input", {handleEvent: inputTextChange});
    input.type = "checkbox",
    input.value = "",
    input.removeAttribute("value"),
    saveButton.remove(),
    label.appendChild(input);
    label.appendChild(span);
    div.appendChild(label);
    div.appendChild(editButton);
    div.appendChild(deleteButton);
  })

  label.appendChild(input);
  label.appendChild(span);
  div.appendChild(label);
  div.appendChild(editButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  document.getElementById("todo-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click", onClickAdd);