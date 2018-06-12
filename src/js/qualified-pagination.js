$(document).ready(function(){

    // Settings for paginating elements

    //1. Selector for items to be paginated 
    var mainListSelectorQl = (".invite__row-ql");

    //2. Next - prev buttons selector
    var nextBtnQl = "#qualifiedNext";
    var prevBtnQl = "#qualifiedPrev";

    //3. Set max elements per one "page" 
    var elsOnPageQl = 2;

    //4. Set main container selector to which page will be scrolled when next-prev page called
    var scrollTo = "tabs";  //ID here

    //5. Set the item-showing class (.js-shown by default)
    var showSelectorQl = ".js-shown-ql"
    var showClassQl = "js-shown-ql"

    var listQl = document.querySelectorAll(mainListSelectorQl);
    var currentPage = 1;


//Check for buttons

    function buttonsCheck() {
        var inlistsQl = document.querySelectorAll(".js-inlist-ql");

        if (currentPage === 1) {
            $(prevBtnQl).attr("disabled", true);
        }	else {
        $(prevBtnQl).attr("disabled", false)
    }

    if ($("[data-ql-item=" + (inlistsQl.length - 1) + "]").hasClass(showClassQl)) {
        $(nextBtnQl).attr("disabled", true);
    } else {
        $(nextBtnQl).attr("disabled", false);
    }
    }

//Initiate pagination

    function initList() {
        
    currentPage = 1;


    $(mainListSelectorQl).each(function(i) {
            $(this).attr("data-ql-item", i);
            $(this).addClass("js-inlist-ql");
        });
        
    
    for (var i = 0; i < elsOnPageQl; i++) {
        if (listQl[i] === undefined) {
        break;
        }
        listQl[i].classList.add(showClassQl);
        }
        buttonsCheck();
    }

    initList();




    $(nextBtnQl).on("click",function(){

        $(showSelectorQl).each(function(i) {
            $("[data-ql-item=" + (i + elsOnPageQl * currentPage) + "]").toggleClass(showClassQl);
            $(this).toggleClass(showClassQl);
        });
    
        currentPage++;
        //Checks
        buttonsCheck();
        // $("html, body").animate({ scrollTop: $('#' + scrollTo).offset().top }, 500);
    });

    $(prevBtnQl).on("click", function(){
        $(showSelectorQl).each(function(i){
            if (i === 0) {
                var ind = $(this).attr("data-ql-item");
            for (var ip = ind; ip >= (ind - elsOnPageQl); --ip) {
                $("[data-ql-item=" + ip + "]").toggleClass(showClassQl);
            }
              $(this).toggleClass(showClassQl);
            }
            $(this).toggleClass(showClassQl);
        });
        currentPage--;
    //Checks
        buttonsCheck();
        // $("html, body").animate({ scrollTop: $('#' + scrollTo).offset().top }, 500);

    }); //End of pagination
});
