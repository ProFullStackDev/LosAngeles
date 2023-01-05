$(".nav-item-mountain").click( function () {
  
  let index = parseInt( $(this).attr("index") );

  $(".main").attr("class", "main");
  $(".main").addClass(`mountain${index}`);

  $(".nav-item-mountain").removeClass("active");
  $(this).toggleClass("active");
});