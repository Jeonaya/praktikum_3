function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const ul = document.getElementById("taskList");
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = function() {
    li.classList.toggle("completed");
  };

  // Grup tombol
  const btnGroup = document.createElement("div");
  btnGroup.className = "btn-group";

  // Tombol edit
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "editBtn";
  editBtn.onclick = function() { editTask(span); };

  // Tombol hapus
  const delBtn = document.createElement("button");
  delBtn.textContent = "Hapus";
  delBtn.className = "deleteBtn";
  delBtn.onclick = function() { deleteTask(li); };

  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(delBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);
  ul.appendChild(li);

  input.value = "";
}

function deleteTask(li) {
  li.remove();
}

function editTask(span) {
  const newText = prompt("Edit tugas:", span.textContent);
  if (newText && newText.trim() !== "") {
    span.textContent = newText;
  }
}
