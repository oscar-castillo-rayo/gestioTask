const d = document,
  $hamburgerBtn = document.querySelector(".hamburger-menu-task.hamburger"),
  $menuTask = document.querySelector(".menu-task");

const menuTask = $hamburgerBtn.addEventListener("click", (e) => {
  if (e.target.closest(".hamburger-menu-task.hamburger")) {
    $hamburgerBtn.classList.toggle("is-active");
  }

  if ($hamburgerBtn.classList.contains("is-active")) {
    $menuTask.classList.remove("active");
  } else {
    $menuTask.classList.add("active");
  }
});

d.addEventListener("DOMContentLoaded", (e) => {
  menuTask();
});
