function queryFactory(element) {
  return document.querySelector(element);
}

const btnGenerate = queryFactory("#btnGenerate");
const hashResult = queryFactory("#hashResult");
const btnClipboard = queryFactory("#btnClipboard");
const DEFAULT_STRING = "Click in the button to generate your hash!";

const token =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*{}[]()=";

const MAX_LENGTH = 16;

function randomizeToken(length) {
  let result = "";

  for (let i = 0; i < length; i++) {
    result += token.charAt(Math.random() * token.length);
  }
  return result;
}

async function copyToClipboard() {
  try {
    if (hashResult.innerHTML === DEFAULT_STRING) {
      alert("Please generate your hash first.");
    }
    await navigator.clipboard.writeText(randomizeToken(MAX_LENGTH));
    alert("Copied to clipboard successfully.");
  } catch (e) {
    console.log(e);
  }
}

function execute() {
  btnGenerate.addEventListener("click", (e) => {
    hashResult.innerHTML = randomizeToken(MAX_LENGTH);
  });
  btnClipboard.addEventListener("click", (e) => {
    copyToClipboard();
  });
}

execute();
