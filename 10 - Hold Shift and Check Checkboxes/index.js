const checkboxes = document.querySelectorAll(".item input[type='checkbox']");
const clearBtn = document.querySelector(".btn-clear");

checkboxes.forEach((el) => {
  el.addEventListener("click", handleCheck);
});

clearBtn.addEventListener("click", clearChecks);

let lastBox = null;

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((el) => {
      // If we click first time with shift
      if (lastBox === null) return;

      if (el === this || el === lastBox) {
        inBetween = !inBetween;
      }

      if (inBetween) el.checked = true;
    });
  }

  lastBox = this;
}

function clearChecks() {
  checkboxes.forEach((el) => {
    el.checked = false;
    lastBox = null;
  });
}
