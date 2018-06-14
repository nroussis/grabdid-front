//Close modal
$(".modal__close-btn").on("click", function(){
    $(this).parent().toggle();
    $(this).parent().parent().find(".modal__overlay").toggle();
});

$(".modal__overlay").on("click", function(){
    $(".modal").each(function(){
        $(this).hide();
    });
    $(this).hide();
});