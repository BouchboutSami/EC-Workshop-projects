// click +

// + => -
// text affiché

//click -

// - => +
// text hidden

const icons = document.querySelectorAll("i");
const answers = document.querySelectorAll("div.answer");

icons.forEach((icon, index) => {
  icon.addEventListener("click", (e) => {
    if (icon.classList.contains("plus")) {
      icon.classList.remove("plus");
      icon.classList.add("minus");
      answers.forEach((answer, indexAns) => {
        console.log(index == indexAns);
        if (indexAns == index) {
          answer.style.display = "flex";
        } else {
          answer.style.display = "none";
          icons[indexAns].classList.add("plus");
          icons[indexAns].classList.remove("minus");
        }
      });
    } else {
      icon.classList.remove("minus");
      icon.classList.add("plus");
      answers[index].style.display = "none";
    }
  });
});
