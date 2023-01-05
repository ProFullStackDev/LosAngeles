$(".circle").click(function () {
  
  let index = parseInt( $(this).attr("index") );
  $(".first").css("margin-left", `${-100 * index}%`)

  $(".circle").removeClass("active");
  $(this).toggleClass("active");
});