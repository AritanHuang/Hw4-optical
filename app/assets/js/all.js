$(document).ready(function () {
  $('.show-menu').click(function (e) {
    e.preventDefault();
    $('body').toggleClass('open-menu');
  });
});