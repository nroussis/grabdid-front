$(document).ready(function() {
    $(".expandable-text").each(function(){
        $(this).addClass("expandable-text--dots");
        $(this).addClass("expandable-text--collapsed");

    });
    $(".more").click(function(event){
        $targ = $(this).prev();
        $targ.removeClass("expandable-text--dots");            


        if (!$targ.hasClass("expandable-text--expanded")){
            $targ.css('overflow', 'visible');
            $targ.css('maxHeight', 'inherit');
            $height = $targ.css('height');
            $targ.css('overflow', 'hidden');
            $targ.css('maxHeight', '20px');
            $targ.removeClass("expandable-text--collapsed");
            $targ.toggleClass("expandable-text--expanded").animate({
                maxHeight: $height
            }, 190);
            $(this).text('Read Less -');
        } else {
            $targ.toggleClass("expandable-text--expanded").animate({
                maxHeight: "20px"
            }, 190);
            setTimeout(function(){
                $targ.addClass("expandable-text--dots");
            }, 200);
            $(this).text('Read More +');
        }
    });
});