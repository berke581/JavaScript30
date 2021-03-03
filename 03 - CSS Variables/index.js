const root = document.documentElement;

const options = document.querySelectorAll(".controls input");
options.forEach((el) => {
  el.addEventListener("change", updateChanges);
});
options.forEach((el) => {
  el.addEventListener("mousemove", updateChanges);
});

function updateChanges() {
  if (this.name === "spacing")
    root.style.setProperty("--spacing-val", `${this.value}px`);
  else if (this.name === "blur")
    root.style.setProperty("--blur-intensity", `${this.value}px`);
  else if (this.name === "base")
    root.style.setProperty("--base-color", `${this.value}`);
}
