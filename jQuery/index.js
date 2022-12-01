// $(document).ready(function () {
//   $(h1).css("color", "red");
// });
$("h1").addClass("big-title margin-50");

$("input").keypress(function (event) {
  console.log(event.key);
});

$(document).keypress(function (event) {
  $("h1").text(event.key);
});

$(document).on("mouseover", function () {
  $("h1").css("color", "purple");
});

$(document).
