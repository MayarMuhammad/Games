import { Games } from "./games.js";

$(document).ready(function () {
    $(".loadingScreen").fadeOut(1000, function () {
      $("body").css("overflow", "visible");
    });
  });

new Games();
