const inputField = document.querySelector("#text");
const convertButton = document.querySelector("#convert-btn");
const camelCase = document.querySelector("#camel-case");
const pascalCase = document.querySelector("#pascal-case");
const snakeCase = document.querySelector("#snake-case");
const screamingSnakeCase = document.querySelector("#screaming-snake-case");
const kebabCase = document.querySelector("#kebab-case");
const screamingKebabCase = document.querySelector("#screaming-kebab-case");

convertButton.addEventListener("click", () => {
  camelCase.textContent = camelCaseConvert(inputField.value);
  pascalCase.textContent = pascalCaseConvert(inputField.value);
  snakeCase.textContent = snakeCaseConvert(inputField.value);
  screamingSnakeCase.textContent = screamingSnakeCaseConvert(inputField.value);
  kebabCase.textContent = kebabCaseConvert(inputField.value);
  screamingKebabCase.textContent = screamingKebabCaseConvert(inputField.value);
});

function camelCaseConvert(inputString) {
  const camelOutput = inputString
    .split(" ")
    .map((word) => word.trim())
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join("");

  return camelOutput[0].toLowerCase().concat(camelOutput.slice(1));
}

function pascalCaseConvert(pascalInput) {
  const pascalOutput = pascalInput
    .split(" ")
    .map((word) => word.trim())
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join("");

  return pascalOutput;
}

function snakeCaseConvert(snakeInput) {
  return snakeInput
    .split(" ")
    .map((word) => "_".concat(word))
    .join("")
    .slice(1);
}

function screamingSnakeCaseConvert(screamingInput) {
  return screamingInput
    .split(" ")
    .map((word) => "_".concat(word))
    .join("")
    .slice(1)
    .toUpperCase();
}

function kebabCaseConvert(kebabInput) {
  return kebabInput
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join("-")
    .toLowerCase();
}

function screamingKebabCaseConvert(screamingInput) {
  return screamingInput
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join("-")
    .toUpperCase();
}
