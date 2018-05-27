$(document).ready(function() {
    $(".more").click(function(event){
        $targ = $(this).prev();


        if (!$targ.hasClass("expandable-text--expanded")){
            $targ.css('overflow', 'visible');
            $targ.css('maxHeight', 'inherit');
            $height = $targ.css('height');
            $targ.css('overflow', 'hidden');
            $targ.css('maxHeight', '40px');
            $targ.removeClass("expandable-text--collapsed");
            $targ.toggleClass("expandable-text--expanded").animate({
                maxHeight: $height
            }, 190);
            $(this).text('Read Less -');
        } else {
            $targ.toggleClass("expandable-text--expanded").animate({
                maxHeight: "40px"
            }, 190);
            $(this).text('Read More +');
        }
    });
});