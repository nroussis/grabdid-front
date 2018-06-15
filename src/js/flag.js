//Change lang buttons
$(".flag-dropdown__item--gr").on("click",function(e){
    $(".flag-dropdown").removeClass("flag-dropdown__current--cy");
    $(".flag-dropdown").addClass("flag-dropdown__current--gr");
});

$(".flag-dropdown__item--cy").on("click",function(e){
    $(".flag-dropdown").removeClass("flag-dropdown__current--gr");
    $(".flag-dropdown").addClass("flag-dropdown__current--cy");
});

//Show/hide login buttons
$("#signButton").on("click", function(){
    $("#loginBlock").slideToggle(200);
})