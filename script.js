function queryFactory(element) {
  return document.querySelector(element);
}

const btnGenerate = queryFactory("#btnGenerate");
const hashResult = queryFactory("#hashResult");
const btnClipboard = queryFactory("#btnClipboard");

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
    await navigator.clipboard.writeText(randomizeToken(MAX_LENGTH));
    alert("copiado para a area de transferencia com sucesso");
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
