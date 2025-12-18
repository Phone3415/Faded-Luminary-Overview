window.addEventListener("DOMContentLoaded", main);

function main() {
  const navBtn = document.querySelector(".nav-btn");
  const nav = document.querySelector("nav");

  if (navBtn.computedStyleMap().get("display").value === "none") return;

  function navEvent() {
    nav.classList.toggle("hide");
    navBtn.classList.toggle("hide");
  }

  navBtn.addEventListener("click", navEvent);
  nav.addEventListener("click", navEvent);
}
