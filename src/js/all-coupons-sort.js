//Alphabet sorting for all-coupons

$(".alpha__filter").on("click", function(){
    var filter = $(this).attr("data-l");
    var target = ".coupon-" + filter;
    
      
  
    $(".liter").each(function(){
        $(this).attr("data-item", "");
      $(this).removeClass("js-shown");
      $(this).removeClass("js-inlist");
    });
    
    $(target).each(function(i){
        $(this).attr("data-item", i);
      $(this).addClass("js-inlist");
      if (i < elsOnPage) {
          $(this).addClass("js-shown");
      } 
      
    });
    currentPage = 1;
    buttonsCheck();
  });