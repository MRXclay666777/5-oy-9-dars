const firstName = prompt("Введите ваше имя:");
const lastName = prompt("Введите вашу фамилию:");
const age = prompt("Введите ваш возраст:");

let choice;
do {
  choice = prompt("Выберите 1 или 2:\n1) Маленькие буквы\n2) Большие буквы");
  if (choice !== "1" && choice !== "2") {
    alert("Вы ввели неправильное число. Попробуйте снова.");
  }
} while (choice !== "1" && choice !== "2");


const formatText = (text) => (choice === "1" ? text.toLowerCase() : text.toUpperCase());


const result = `
  Имя: ${formatText(firstName)}<br>
  Фамилия: ${formatText(lastName)}<br>
  Возраст: ${formatText(age)}
`;
document.body.innerHTML = result;






