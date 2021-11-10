import "./styles.css";

document.getElementById("uppercase").onclick = function () {
  upperCase();
};
document.getElementById("lowercase").onclick = function () {
  lowerCase();
};
document.getElementById("reversetext").onclick = function () {
  reverseString();
};
document.getElementById("alternatecase").onclick = function () {
  alternateCase();
};

const buttonCopy = document.getElementById("btncopy");
let campoNew = "";

function upperCase() {
  var campo = document.getElementById("text").value;
  campoNew = campo.toUpperCase();
  document.getElementById("newtext").innerHTML = campoNew;
}

function lowerCase() {
  var campo = document.getElementById("text").value;
  campoNew = campo.toLowerCase();
  document.getElementById("newtext").innerHTML = campoNew;
}

function reverseString() {
  var campo = document.getElementById("text").value;
  let newStr = "";
  for (let i = campo.length - 1; i >= 0; i--) {
    newStr += campo[i];
  }
  campoNew = newStr;
  document.getElementById("newtext").innerHTML = newStr;
}

function alternateCase() {
  var campo = document.getElementById("text").value;
  let newStr = "";
  var chars = campo.toLowerCase().split("");
  for (var i = 0; i < chars.length; i += 2) {
    chars[i] = chars[i].toUpperCase();
  }
  newStr = chars.join("").trim();
  campoNew = newStr;
  document.getElementById("newtext").innerHTML = newStr;
}

const withClipboardAPICopy = () => {
  var resultText = document.getElementById("newtext");
  resultText.select();
  document.execCommand("copy");
};

buttonCopy.addEventListener("click", (e) => {
  buttonCopy.textContent = "COPIED";
  withClipboardAPICopy();
  setTimeout(() => {
    buttonCopy.textContent = "COPY";
  }, 2000);
});
