const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", openItem);
});
panels.forEach((panel) => {
  panel.addEventListener("transitionend", activateItem);
});

function openItem() {
  this.classList.toggle("open");
}

function activateItem(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
