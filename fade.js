//Fade on load
  $('body').css('display', 'none');
  $('body').fadeIn(1000);

function newpage() {
  window.location = newLocation;
};

$('a').click(function() {
  event.preventDefault();
  newLocation = this.href;
  $('body').fadeOut(1000, newpage);
});
