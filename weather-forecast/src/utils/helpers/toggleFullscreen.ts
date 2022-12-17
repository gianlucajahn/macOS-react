const toggleFullscreen = () => {
  var elem = document.getElementById("page");
  function openFullscreen() {
    if (!elem) {
      return;
    }
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  }
  openFullscreen();
};

export default toggleFullscreen;
