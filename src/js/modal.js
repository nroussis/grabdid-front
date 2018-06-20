//Close modal
$(".modal__close-btn").on("click", function(){
    $(this).parent().toggle();
    $(this).parent().parent().find(".modal__overlay").toggle();
    $(".overlay").each(function(){
        $(this).hide();
    });
});

$(".modal__overlay").on("click", function(){
    $(".modal").each(function(){
        $(this).hide();
    });
    $(this).hide();
});

$(".overlay").on("click", function(){
    $(".overlay").each(function(){
        $(this).hide();
    })
    
    $(".modal").each(function(){
        $(this).hide();
    });
    $(this).hide();
});