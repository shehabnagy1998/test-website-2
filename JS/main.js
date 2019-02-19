/*global $*/

$(function () {
    'use strict';

    var timer = window.setInterval(function () {
        $("#text-changing1").fadeOut(1500, function () {
            $("#text-changing2").fadeIn(1500)
        });
    }, 10000);

    var timer = window.setInterval(function () {
        $("#text-changing2").fadeOut(1500, function () {
                $("#text-changing1").fadeIn(1500);
        });
    }, 20000);

    $(".navbar-toggler").on("mouseenter", function () {
        $(this).fadeOut(300, function () {
            $(this).children().removeClass("fa-ellipsis-v");
            $(this).children().addClass("fa-bars");
            $(this).fadeIn(300)
        });

    });

    $(".navbar-toggler").on("mouseleave", function () {
        $(this).fadeOut(300, function () {
            $(this).children().removeClass("fa-bars");
            $(this).children().addClass("fa-ellipsis-v");
            $(this).fadeIn(300)
        });
    });

    $(".navbar-toggler").on("click", function () {
        $(".menu").slideToggle(1000, function () {
          $(".menuContent").fadeToggle(1000);
        });
    });

    $(".menuContent button").on('click', function(event) {
      $(".menu").slideToggle(1000, function () {
        $(".menuContent").fadeToggle(1000);
      });
    });

    $(window).on('keyup', function(event) {
      if (event.which === 27) {
        $(".menu").slideToggle(1000, function () {
          $(".menuContent").fadeToggle(1000);
        });
      }
    });
});
