/* =========================================================
   CONFIGURA AQUI EL VIDEO DE YOUTUBE PARA LA MUSICA DE FONDO
   Reemplaza SOLO el texto entre comillas por el ID del video.
   El ID es lo que va despues de "v=" en la URL de YouTube.
   Ejemplo: https://www.youtube.com/watch?v=ABC12345678
                                            ID = "ABC12345678"
========================================================= */
const YOUTUBE_VIDEO_ID = "JzXagJ7vqbw";

let ytPlayer = null;
let ytApiReady = false;
let musicOn = true;

function onYouTubeIframeAPIReady() {
  ytApiReady = true;
}

// carga la API de YouTube (solo el script, no crea el player todavia)
(function loadYT() {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
})();

function createYTPlayer() {
  ytPlayer = new YT.Player("yt-player", {
    height: "1",
    width: "1",
    videoId: YOUTUBE_VIDEO_ID,
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      playlist: YOUTUBE_VIDEO_ID,
      playsinline: 1,
      fs: 0,
      modestbranding: 1,
    },
    events: {
      onReady: function (event) {
        event.target.playVideo();
      },
    },
  });
}

function startMusic() {
  if (ytPlayer && typeof ytPlayer.playVideo === "function") {
    ytPlayer.playVideo();
  } else if (ytApiReady) {
    createYTPlayer();
  } else {
    // la API de YouTube aun no esta lista, reintenta
    setTimeout(startMusic, 300);
  }
}

document
  .getElementById("music-toggle")
  .addEventListener("click", function () {
    if (!ytPlayer) return;
    if (musicOn) {
      ytPlayer.pauseVideo();
      musicOn = false;
      this.style.opacity = ".5";
    } else {
      ytPlayer.playVideo();
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
  startMusic();

  setTimeout(function () {
    envScreen.classList.add("hide");
    book.classList.add("ready");
    document.body.style.overflow = "hidden";
  }, 950);
});
