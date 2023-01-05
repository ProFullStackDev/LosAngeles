const STICKY_POSITION = 100;

document.addEventListener("scroll", function() {
  if(scrollY > STICKY_POSITION) $(".header-sticky").slideDown();
  else $(".header-sticky").slideUp();
});