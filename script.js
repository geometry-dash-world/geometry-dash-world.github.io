// Google Analytics Tag
(function loadGoogleAnalytics() {
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-37JB6K02HZ";
  document.head.appendChild(script);

  script.onload = function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-37JB6K02HZ');
  };
})();

// Fullscreen Functionality
function openFullscreen() {
  let game = document.querySelector(".game-iframe");
  if (game.requestFullscreen) {
    game.requestFullscreen();
  } else if (game.mozRequestFullScreen) { /* Firefox */
    game.mozRequestFullScreen();
  } else if (game.webkitRequestFullscreen) { /* Chrome, Safari, and Opera */
    game.webkitRequestFullscreen();
  } else if (game.msRequestFullscreen) { /* IE/Edge */
    game.msRequestFullscreen();
  }
}
