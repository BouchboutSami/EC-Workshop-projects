const answer1 = document.querySelector("input.input-answer");
const answer2 = document.querySelectorAll("select.select-answer")[0];
const answer3 = document.querySelectorAll("select.select-answer")[1];
const btnSubmit = document.querySelector("button.button-answer");
const main = document.querySelector(".main");
let originalcolor = "linear-gradient(to right, #2257e6, #477af5)";
btnSubmit.addEventListener("click", (event) => {
  if (answer1.value && answer2.value && answer3.value) {
    let note = 0;
    answer1.value == 2009 ? (note += 1) : null;
    answer2.value == "DEV" ? (note += 1) : null;
    answer3.value == "SAMI" ? (note += 1) : null;
    switch (note) {
      case 0:
        alert(`You're Banned from ETIC you got 0/3`);
        main.style.background = "red";
        setTimeout(() => {
          main.style.background = originalcolor;
        }, 5000);
        break;
      case 1:
        alert("Be careful you got 1/3");
        main.style.background = "red";
        setTimeout(() => {
          main.style.background = originalcolor;
        }, 5000);
        break;
      case 2:
        alert("CAVA you got 2/3");
        main.style.background = "orange";
        setTimeout(() => {
          main.style.background = originalcolor;
        }, 5000);
        break;
      case 3:
        alert("Perfect you got 3/3");
        main.style.background = "green";
        setTimeout(() => {
          main.style.background = originalcolor;
        }, 5000);
        break;
      default:
        console.log("ERROR");
        break;
    }
  } else {
    alert("Please Fill the form");
  }
});
