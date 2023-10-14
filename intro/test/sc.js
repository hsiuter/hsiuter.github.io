$(document).ready(function () {
  $(".circle").draggable({
    drag: function () {
      updateTextColor();
    }
  });

  function updateTextColor() {
    let circleCenter = $(".circle").position().left + $(".circle").width() / 2;
    let percent = circleCenter / $(".container").width() * 100;

    $(".text").css("background", `linear-gradient(90deg, transparent ${percent}%, red ${percent}%)`);
  }
});