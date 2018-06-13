//Close modal
$(".modal__close-btn").on("click", function(){
    $(this).parent().toggle();
    $(".overlay").toggle();
});

$(".overlay").on("click", function(){
    $(".modal").each(function(){
        $(this).hide();
    });
    $(this).hide();
});