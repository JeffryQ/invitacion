const bgMusic = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");
let musicOn = true;

musicToggle.addEventListener("click", function () {
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

/* ---------------- DOUBLE CLICK/TAP: BACK TO START ---------------- */
document.addEventListener("dblclick", function () {
  if (!book.classList.contains("ready")) return;

  bgMusic.pause();
  bgMusic.currentTime = 0;
  musicOn = true;
  musicToggle.style.opacity = "1";

  envScreen.classList.remove("hide");
  book.classList.remove("ready");
  envelope.classList.remove("open");
  opened = false;
  book.scrollTop = 0;
});
