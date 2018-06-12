$(document).ready(function(){

    // Settings for paginating elements

    //1. Selector for items to be paginated 
    var mainListSelectorSu = (".invite__row-su");

    //2. Next - prev buttons selector
    var nextBtnSu = "#signedupNext";
    var prevBtnSu = "#signedupPrev";

    //3. Set max elements per one "page" 
    var elsOnPageSu = 2;

    //4. Set main container selector to which page will be scrolled when next-prev page called
    var scrollTo = "tabs";  //ID here

    //5. Set the item-showing class (.js-shown by default)
    var showSelectorSu = ".js-shown-su"
    var showClassSu = "js-shown-su"

    var listSu = document.querySelectorAll(mainListSelectorSu);
    var currentPageSu = 1;


//Check for buttons

    function buttonsCheck() {
        var inlistsSu = document.querySelectorAll(".js-inlist-su");

        if (currentPageSu === 1) {
            $(prevBtnSu).attr("disabled", true);
        }	else {
        $(prevBtnSu).attr("disabled", false)
    }

    if ($("[data-su-item=" + (inlistsSu.length - 1) + "]").hasClass(showClassSu)) {
        $(nextBtnSu).attr("disabled", true);
    } else {
        $(nextBtnSu).attr("disabled", false);
    }
    }

//Initiate pagination

    function initList() {
        
    currentPageSu = 1;


    $(mainListSelectorSu).each(function(i) {
            $(this).attr("data-su-item", i);
            $(this).addClass("js-inlist-su");
        });
        
    
    for (var i = 0; i < elsOnPageSu; i++) {
        if (listSu[i] === undefined) {
        break;
        }
        listSu[i].classList.add(showClassSu);
        }
        buttonsCheck();
    }

    initList();




    $(nextBtnSu).on("click",function(){

        $(showSelectorSu).each(function(i) {
            $("[data-su-item=" + (i + elsOnPageSu * currentPageSu) + "]").toggleClass(showClassSu);
            $(this).toggleClass(showClassSu);
        });
    
        currentPageSu++;
        //Checks
        buttonsCheck();
        // $("html, body").animate({ scrollTop: $('#' + scrollTo).offset().top }, 500);
    });

    $(prevBtnSu).on("click", function(){
        $(showSelectorSu).each(function(i){
            if (i === 0) {
                var ind = $(this).attr("data-su-item");
            for (var ip = ind; ip >= (ind - elsOnPageSu); --ip) {
                $("[data-su-item=" + ip + "]").toggleClass(showClassSu);
            }
              $(this).toggleClass(showClassSu);
            }
            $(this).toggleClass(showClassSu);
        });
        currentPageSu--;
    //Checks
        buttonsCheck();
        // $("html, body").animate({ scrollTop: $('#' + scrollTo).offset().top }, 500);

    }); //End of pagination
});
