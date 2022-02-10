"use strict";
const change = document.querySelectorAll(".images");

change.forEach((img) => {
  img.addEventListener("click", () => {
    remove();
    img.classList.add("active");
  });
});

function remove() {
  change.forEach((img) => {
    img.classList.remove("active");
  });
}
