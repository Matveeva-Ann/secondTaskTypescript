// Необхідно відтворити функціонал як на відео Cenzor, а саме:
// При кліку на ADD добавляти заборонене слово, яке відображатиметься в списку “Bad words”
// Якщо поле для добавлення слова не заповнене виводити відповідне повідомлення
// При кліку на Cenzor перевіряється чи є в textarea заборонене слово, якщо так його заміняє на *, причому на ту кількість яка довжина слова
// Якщо textarea порожня виводити повыдолення про заповнення поля
const badWords = document.querySelector(".badWords")?.children[1];
const inputText = document.querySelector(".input-text");
const btnAdd = document.querySelector(".btn-Add");
const btnReset = document.querySelector(".btn-Reset");
const cenzor = document.querySelector(".cenzor");
const textareaFild = document.querySelector(".textarea-fild");
let arrBadWords = [];
btnAdd.addEventListener("click", function () {
    missingValue(inputText);
    if (inputText.value !== "") {
        inputText.classList.remove("red");
        arrBadWords.push(inputText.value.trim());
        badWords.textContent = "";
        for (const elem of arrBadWords) {
            badWords.textContent === ""
                ? (badWords.textContent += elem)
                : (badWords.textContent += ", " + elem);
        }
    }
    inputText.value = "";
});
btnReset.addEventListener("click", function () {
    badWords.textContent = "";
    textareaFild.value = "";
    arrBadWords = [];
    inputText.classList.remove("red");
});
function missingValue(elem) {
    elem.value === "" ? elem.classList.add("red") : elem.classList.remove("red");
}
cenzor.addEventListener("click", function (event) {
    missingValue(textareaFild);
    event.preventDefault();
    let arrText = textareaFild.value.split(" ");
    for (const elem of arrText) {
        for (let i = 0; i < arrBadWords.length; i++) {
            if (elem.includes(",") || elem.includes(".") || elem.includes("!") || elem.includes("?")) {
                let arr = Array.from(elem);
                arr.splice(elem.length - 1, 1);
                const newElem = arr.join('');
                if (newElem === arrBadWords[i]) {
                    createStars(elem, arrText);
                    break;
                }
            }
            if (elem === arrBadWords[i]) {
                createStars(elem, arrText);
                break;
            }
        }
    }
    textareaFild.value = arrText.join(" ");
});
function createStars(elem, arr) {
    const lengthElem = elem.length;
    const indexElem = arr.indexOf(elem);
    arr.splice(indexElem, 1, "*".repeat(lengthElem));
}
// або
// cenzor.addEventListener("click", function (event) {
//   missingValue(textareaFild);
//   event.preventDefault();
//   let text: string = textareaFild.value;
//   console.log(arrBadWords.length)
//   for(let i=0; i<arrBadWords.length;i++){
//     const barWord: string = arrBadWords[i];
//     console.log(barWord)
//     console.log(text.includes(barWord))
//     if (text.includes(barWord)){
//       console.log(barWord)
//       text = text.replace(barWord, '*'.repeat(barWord.length))
//     }
//   }
//   textareaFild.value = text;
// });
