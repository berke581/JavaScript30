const canvas = document.querySelector("#draw");
const context = canvas.getContext("2d");

const bgColPick = document.querySelector("#backgroundCol");
const sizeSlider = document.querySelector("#size");
const brushColPick = document.querySelector("#brushCol");
const btnClear = document.querySelector(".btn-clear");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

context.strokeStyle = "#FFFFFF";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 5;

let isDrawing = false;
const last = { x: 0, y: 0 };

function draw(e) {
  if (!isDrawing) return;
  console.log(e);

  context.beginPath();
  context.moveTo(last.x, last.y);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();

  [last.x, last.y] = [e.offsetX, e.offsetY];
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [last.x, last.y] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

function changeBackground(e) {
  canvas.style.backgroundColor = e.target.value;
}
function changeBrushColor(e) {
  context.strokeStyle = e.target.value;
}
function changeBrushSize(e) {
  context.lineWidth = e.target.value;
}
function clearContext(e) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

bgColPick.addEventListener("change", changeBackground);
bgColPick.addEventListener("input", changeBackground);

brushColPick.addEventListener("change", changeBrushColor);
brushColPick.addEventListener("input", changeBrushColor);

sizeSlider.addEventListener("change", changeBrushSize);
sizeSlider.addEventListener("input", changeBrushSize);

btnClear.addEventListener("click", clearContext);
