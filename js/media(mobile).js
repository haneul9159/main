$(function () {
  $(".burger-icon").click(function () {
    $(".burger-icon").hide();
    $(".burger-close-icon").show();
    $(".menu-mobile").show();
  });
  $(".burger-close-icon").click(function () {
    $(".burger-close-icon").hide();
    $(".burger-icon").show();
    $(".menu-mobile").hide();
  });
  $(".menu-mobile li a").click(function () {
    $(".burger-close-icon").hide();
    $(".burger-icon").show();
    $(".menu-mobile").hide();
  });
});
