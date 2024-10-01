let completeTasksCount = incompleteTasksCount = 0;
    
const onClickAdd = () => {
  ++incompleteTasksCount;

  const calculateAllTasksCount = () => completeTasksCount + incompleteTasksCount;  

  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  const $li = document.createElement("li");
  const $div = document.createElement("div");
  const $input = document.createElement("input");
  const $spanAllTasks = document.getElementById("all-tasks");
  const $spanCompleteTasks = document.getElementById("complete-tasks");
  const $spanIncompleteTasks = document.getElementById("incomplete-tasks");
  const $label = document.createElement("label");
  const $editButton = document.createElement("button");
  const $deleteButton = document.createElement("button");
  const $saveButton = document.createElement("button");
  const $changeInputText = e => $label.innerText = e.target.value;

  const plusAndMinusEachOtherTasksCount = () => {
    if ($input.checked) {
      ++completeTasksCount,
      --incompleteTasksCount,
      $spanCompleteTasks.innerText = completeTasksCount;
      $spanIncompleteTasks.innerText = incompleteTasksCount;
    } else {
      --completeTasksCount,
      ++incompleteTasksCount,
      $spanCompleteTasks.innerText = completeTasksCount;
      $spanIncompleteTasks.innerText = incompleteTasksCount;
    }    
    $spanAllTasks.innerText = calculateAllTasksCount();
}
  
  $saveButton.innerText = "保存";
  $input.type = "checkbox"
  $input.checked = false;
  $input.id = "todo-item";
  $input.className = "todo-checkbox";
  $label.innerText = inputText;
  $div.className = "list-row";
  $editButton.innerText = "編集";
  $editButton.className = "edit-button";
  $deleteButton.className = "delete-button";

  $spanAllTasks.innerText = calculateAllTasksCount();
  $spanIncompleteTasks.innerText = incompleteTasksCount;
  console.log($spanAllTasks.innerText);
  console.log($spanIncompleteTasks.innerText);

  $editButton.addEventListener("click", () => {
    $editButton.remove(),
    $deleteButton.remove(),
    $label.remove();
    $input.type = "text";
    $input.value = $label.innerText;
    $input.focus();
    $input.oninput = $changeInputText;
    $div.appendChild($saveButton);
  });


  $deleteButton.innerText = "削除";
  $deleteButton.addEventListener("click", () => {
    const result = confirm("本当に削除してよろしいですか？");
    if (!result) return;
    const deleteTargetTodo = $deleteButton.closest("li");
    document.getElementById("todo-list").removeChild(deleteTargetTodo);
    $input.checked ? --completeTasksCount : --incompleteTasksCount;
    $spanAllTasks.innerText = calculateAllTasksCount();
    $spanCompleteTasks.innerText = completeTasksCount;
    $spanIncompleteTasks.innerText = incompleteTasksCount;
  });

  $saveButton.addEventListener("click", () => {
    $input.addEventListener("input", {handleEvent: $changeInputText});
    $input.type = "checkbox",
    $input.value = "",
    $input.removeAttribute("value"),
    $saveButton.remove(),
    $label.appendChild($input);
    $div.appendChild($input);
    $div.appendChild($label);
    $div.appendChild($editButton);
    $div.appendChild($deleteButton);
  })
  
  const switchIsComplete = () => {
    $input.checked = !$input.checked;
    plusAndMinusEachOtherTasksCount();
  };
  $label.addEventListener("click", { handleEvent: switchIsComplete });

  $div.appendChild($input);
  $div.appendChild($label);
  $div.appendChild($editButton);
  $div.appendChild($deleteButton);
  $li.appendChild($div);
  document.getElementById("todo-list").appendChild($li);
}

document.getElementById("add-button").addEventListener("click", onClickAdd);