const bgMusic = document.getElementById("bg-music");
let musicOn = true;

document
  .getElementById("music-toggle")
  .addEventListener("click", function () {
    if (musicOn) {
      bgMusic.pause();
      musicOn = false;
      this.style.opacity = ".5";
    } else {
      bgMusic.play();
      musicOn = true;
      this.style.opacity = "1";
    }
  });

/* ---------------- ENVELOPE OPEN ---------------- */
const envelope = document.getElementById("envelope");
const envScreen = document.getElementById("envelope-screen");
const book = document.getElementById("book");
let opened = false;

envelope.addEventListener("click", function () {
  if (opened) return;
  opened = true;
  envelope.classList.add("open");
  bgMusic.currentTime = 0;
  bgMusic.play();

  setTimeout(function () {
    envScreen.classList.add("hide");
    book.classList.add("ready");
    document.body.style.overflow = "hidden";
  }, 950);
});
