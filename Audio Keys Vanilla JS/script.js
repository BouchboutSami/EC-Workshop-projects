const audios = document.querySelectorAll("audio");
const cards = document.querySelectorAll(".key");

window.addEventListener("keydown", (event) => {
  let exist = false;
  let audioplaying = 0;
  audios.forEach((audio, index) => {
    if (audio.getAttribute("data-key") == event.key) {
      audioplaying = index;
      exist = true;
      return;
    }
  });
  if (!exist) {
    return;
  } else {
    const card = cards[audioplaying];
    const sound = audios[audioplaying];
    sound.currentTime = 0;
    sound.play();
    cards.forEach((card, index) => {
      if (index == audioplaying) {
        card.classList.add("playing");
        setTimeout(() => {
          card.classList.remove("playing");
        }, 1000);
      } else {
        card.classList.remove("playing");
      }
    });
  }
});
