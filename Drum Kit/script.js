function keyCode(event) {
  var x = event.keyCode;

  if (x == 69) {
    var sound = document.getElementById("crash");
    sound.play();
    var img = document.getElementById("cr");
    img.setAttribute("class", "rotated-image");
  }
  if (x == 82) {
    var sound = document.getElementById("ride");
    sound.play();
    var img = document.getElementById("cr");
    img.setAttribute("class", "rotated-imagee");
  }
  if (x == 70) {
    var sound = document.getElementById("floor_tom");
    sound.play();
  }
  if (x == 71) {
    var sound = document.getElementById("mid_tom");
    sound.play();
  }
  if (x == 72) {
    var sound = document.getElementById("high_tom");
    sound.play();
  }
  if (x == 66 || x == 86) {
    var sound = document.getElementById("kick");
    sound.play();
  }
  if (x == 74) {
    var sound = document.getElementById("snare");
    sound.play();
  }
  if (x == 73) {
    var sound = document.getElementById("hi_open");
    sound.play();
    var img = document.getElementById("hi");
    img.setAttribute("class", "rotated-hihat");
  }
  if (x == 75) {
    var sound = document.getElementById("hi_close");
    sound.play();
    var img = document.getElementById("hi");
    img.setAttribute("class", "rotated-hihatt");
  }
}
