/* global variable */
let div = null;

/* load window function */
window.onload = function () {
  main();
};

function main() {
  const btn = document.querySelector("#btn");
  const container = document.querySelector("#root");
  const output = document.querySelector("#output");
  const copyBtn = document.querySelector("#copyBtn");

  //TODO: change bg color

  btn.addEventListener("click", function () {
    const bgColor = hexColor();
    container.style.background = bgColor;
    output.value = bgColor;
  });

  //TODO: copy color code
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
    if (div !== null) {
      div.remove();
      div = null;
    }
    generatToastMsg(`${output.value} coppied`);
  });
}

/* generate hex color */

function hexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

/* generate toast message */
function generatToastMsg(msg) {
  div = document.createElement("div");
  div.innerText = msg;
  div.className = "toast-message toast-message-slide-in";
  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");
    /* remove function */
    div.addEventListener("animationend", function () {
      div.remove();
      div = null;
    });
  });
  document.body.appendChild(div);
}
