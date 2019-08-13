$(document).ready(function() {

  $("#a1").click(function() {
    $("#a1").addClass("green");
  });

  $("#a2").click(function() {
    $("#a2").addClass("blue");
  });

  $("#a3").click(function() {
    $("#a3").addClass("red");
  });

  $("#b1").click(function() {
    $("#b1").addClass("red");
  });

  $("#b2").click(function() {
    $("#b2").addClass("yellow");
  });

  $("#b3").click(function() {
    $("#b3").addClass("blue");
  });

  $("#c1").click(function() {
    $("#c1").addClass("yellow");
  });

  $("#c2").click(function() {
    $("#c2").addClass("green");
  });

  $("#c3").click(function() {
    $("#c3").addClass("surprise");
  });

  $("#reset").click(function() {
    $(".panel").css("background-color", "white");
  });

});
