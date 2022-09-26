const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  if (resultEl.innerText) {
    const password = resultEl.innerText;
    alert("password coppied");
    navigator.clipboard.writeText(password);
  } else {
    alert("Please provide passwor!");
  }
});

generateEl.addEventListener("click", () => {
  const { lower, upper, number, symbol } = randomFunc;
  const length = lengthEl.value;
  generatePassword(lower, upper, number, symbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
  resultEl.innerText = "";
  let result = "";

  let checker1 = uppercaseEl.checked;
  let checker2 = lowercaseEl.checked;
  let checker3 = numbersEl.checked;
  let checker4 = symbolsEl.checked;

  if (checker1 && checker2 && checker3 && checker4) {
    let mod = length % 4;
    let div = Math.floor(length / 4);
    for (let i = 0; i < div; i++) {
      result = result + upper();
      result = result + lower();
      result = result + number();
      result = result + symbol();
    }
    for (let i = 0; i < mod; i++) {
      result = result + lower();
    }
  } else if (checker1 && checker2 && checker3) {
    let mod = length % 3;
    let div = Math.floor(length / 3);
    for (let i = 0; i < div; i++) {
      result = result + upper();
      result = result + lower();
      result = result + number();
    }
    for (let i = 0; i < mod; i++) {
      result = result + upper();
    }
  } else if (checker1 && checker2 && checker4) {
    let mod = length % 3;
    let div = Math.floor(length / 3);
    for (let i = 0; i < div; i++) {
      result = result + upper();
      result = result + lower();
      result = result + symbol();
    }
    for (let i = 0; i < mod; i++) {
      result = result + upper();
    }
  } else if (checker1 && checker3 && checker4) {
    let mod = length % 3;
    let div = Math.floor(length / 3);
    for (let i = 0; i < div; i++) {
      result = result + upper();
      result = result + number();
      result = result + symbol();
    }
    for (let i = 0; i < mod; i++) {
      result = result + upper();
    }
  } else if (checker2 && checker3 && checker4) {
    let mod = length % 3;
    let div = Math.floor(length / 3);
    for (let i = 0; i < div; i++) {
      result = result + lower();
      result = result + number();
      result = result + symbol();
    }
    for (let i = 0; i < mod; i++) {
      result = result + lower();
    }
  } else if (checker1 && checker2) {
    let mod = length % 2;
    let div = Math.floor(length / 2);
    for (let i = 0; i < div; i++) {
      result = result + lower();
      result = result + upper();
    }
    for (let i = 0; i < mod; i++) {
      result = result + lower();
    }
  } else if (checker1 && checker3) {
    let mod = length % 2;
    let div = Math.floor(length / 2);
    for (let i = 0; i < div; i++) {
      result = result + upper();
      result = result + number();
    }
    for (let i = 0; i < mod; i++) {
      result = result + upper();
    }
  } else if (checker1 && checker4) {
    let mod = length % 2;
    let div = Math.floor(length / 2);
    for (let i = 0; i < div; i++) {
      result = result + symbol();
      result = result + upper();
    }
    for (let i = 0; i < mod; i++) {
      result = result + upper();
    }
  } else if (checker2 && checker3) {
    let mod = length % 2;
    let div = Math.floor(length / 2);
    for (let i = 0; i < div; i++) {
      result = result + lower();
      result = result + number();
    }
    for (let i = 0; i < mod; i++) {
      result = result + lower();
    }
  } else if (checker2 && checker4) {
    let mod = length % 2;
    let div = Math.floor(length / 2);
    for (let i = 0; i < div; i++) {
      result = result + lower();
      result = result + symbol();
    }
    for (let i = 0; i < mod; i++) {
      result = result + lower();
    }
  } else if (checker3 && checker4) {
    let mod = length % 2;
    let div = Math.floor(length / 2);
    for (let i = 0; i < div; i++) {
      result = result + number();
      result = result + symbol();
    }
    for (let i = 0; i < mod; i++) {
      result = result + number();
    }
  } else if (checker1) {
    for (let i = 0; i < length; i++) {
      result = result + upper();
    }
  } else if (checker2) {
    for (let i = 0; i < length; i++) {
      result = result + lower();
    }
  } else if (checker3) {
    for (let i = 0; i < length; i++) {
      result = result + number();
    }
  } else if (checker4) {
    for (let i = 0; i < length; i++) {
      result = result + symbol();
    }
  } else {
    result = "null";
  }
  const textNode = document.createTextNode(result);
  resultEl.appendChild(textNode);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(
    Math.floor(Math.random() * (90 - 65 + 1)) + 97
  ).toUpperCase();
}
function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}
function getRandomSymbol() {
  return String.fromCharCode(Math.floor(Math.random() * (47 - 33 + 1)) + 33);
}
