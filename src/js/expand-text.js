$(document).ready(function() {
    $(".more").click(function(event){
        $targ = $(this).prev();
        if (!$targ.hasClass("expandable-text--expanded")){
            $targ.toggleClass("expandable-text--expanded").animate({
                maxHeight: "1000px"
            }, 590);
            $(this).text('Read More -');
        } else {
            $targ.toggleClass("expandable-text--expanded").animate({
                maxHeight: "40px"
            }, 190);
            $(this).text('Read More +');
        }
    });
});