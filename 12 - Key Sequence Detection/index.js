const pressed = [];
const code = "berke581";

window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  pressed.splice(-pressed.length - 1, pressed.length - code.length);

  if (pressed.join("").includes(code)) {
    console.log("Code entered!");
    cornify_add();
  }
});
