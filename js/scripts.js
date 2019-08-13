$(document).ready(function() {

  $("#a1").click(function() {
    $("#a1").addClass("green");
    $("#reset").click(function() {
      $("#a1").removeClass("green");
    });
  });

  $("#a2").click(function() {
    $("#a2").addClass("blue");
    $("#reset").click(function() {
      $("#a2").removeClass("blue");
    });
  });

  $("#a3").click(function() {
    $("#a3").addClass("red");
    $("#reset").click(function() {
      $("#a3").removeClass("red");
    });
  });

  $("#b1").click(function() {
    $("#b1").addClass("red");
    $("#reset").click(function() {
      $("#b1").removeClass("red");
    });
  });

  $("#b2").click(function() {
    $("#b2").addClass("yellow");
    $("#reset").click(function() {
      $("#b2").removeClass("yellow");
    });
  });

  $("#b3").click(function() {
    $("#b3").addClass("blue");
    $("#reset").click(function() {
      $("#b3").removeClass("blue");
    });
  });

  $("#c1").click(function() {
    $("#c1").addClass("yellow");
    $("#reset").click(function() {
      $("#c1").removeClass("yellow");
    });
  });

  $("#c2").click(function() {
    $("#c2").addClass("green");
    $("#reset").click(function() {
      $("#c2").removeClass("green");
    });
  });

  $("#c3").click(function() {
    $("#c3").addClass("surprise");
    $("#reset").click(function() {
      $("#c3").removeClass("surprise");
    });
  });

});
