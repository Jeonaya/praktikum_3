document.addEventListener("DOMContentLoaded", function() {

  // Ubah warna latar belakang
  const bgColor = document.getElementById("bgColor");
  bgColor.addEventListener("change", function() {
    document.body.style.backgroundColor = this.value;
  });

  // Ubah ukuran font
  let size = 16;
  document.getElementById("fontPlus").onclick = () => {
    size += 2;
    document.body.style.fontSize = size + "px";
  };
  document.getElementById("fontMinus").onclick = () => {
    size -= 2;
    document.body.style.fontSize = size + "px";
  };

  // Mode gelap
  let dark = false;
  document.getElementById("darkMode").onclick = () => {
    dark = !dark;
    document.body.style.backgroundColor = dark ? "#222" : "white";
    document.body.style.color = dark ? "white" : "black";
  };

  // Ganti gaya font
  let serif = false;
  document.getElementById("fontStyle").onclick = () => {
    serif = !serif;
    document.body.style.fontFamily = serif ? "serif" : "sans-serif";
  };

  // To-Do List
  const addBtn = document.getElementById("addTask");
  const input = document.getElementById("taskInput");
  const list = document.getElementById("taskList");

  addBtn.addEventListener("click", function() {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;

    // Klik sekali → tandai selesai
    li.onclick = () => li.classList.toggle("completed");

    // Klik dua kali → edit teks
    li.ondblclick = () => {
      const edit = prompt("Edit tugas:", li.textContent);
      if (edit) li.textContent = edit;
    };

    list.appendChild(li);
    input.value = "";
  });
});
