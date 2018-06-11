 $(document).ready(function(){

        (function(){
            //Settings for paginating elements

            //1. Selector for items to be paginated 
        var mainListSelector = (".invite__row-inv");

        //2. Next - prev buttons selector
        var nextBtn = "#invitedNext";
        var prevBtn = "#invitedPrev";

        //3. Set max elements per one "page" 
        var elsOnPage = 2;

        //4. Set main container selector to which page will be scrolled when next-prev page called
        var scrollTo = "tabs";  //ID here

        //5. Set the item-showing class (.js-shown by default)
        var showSelector = ".js-shown-tr"
        var showClass = "js-shown-tr"


        var list = document.querySelectorAll(mainListSelector);
        var currentPage = 1;


    //Check for buttons

        function buttonsCheck() {
            var inlists = document.querySelectorAll(".js-inlist");

            if (currentPage === 1) {
                $(prevBtn).attr("disabled", true);
            }	else {
            $(prevBtn).attr("disabled", false)
        }

        if ($("[data-item=" + (inlists.length - 1) + "]").hasClass(showClass)) {
            $(nextBtn).attr("disabled", true);
        } else {
            $(nextBtn).attr("disabled", false);
        }
        }

    //Initiate pagination

        function initList() {
            
        currentPage = 1;


        $(mainListSelector).each(function(i) {
                $(this).attr("data-item", i);
                $(this).addClass("js-inlist");
            });
            
        
        for (var i = 0; i < elsOnPage; i++) {
            if (list[i] === undefined) {
            break;
            }
            list[i].classList.add(showClass);
            }
            buttonsCheck();
        }

        initList();




        $(nextBtn).on("click",function(){

            $(showSelector).each(function(i) {
                $("[data-item=" + (i + elsOnPage * currentPage) + "]").toggleClass(showClass);
                $(this).toggleClass(showClass);
            });
        
            currentPage++;
            //Checks
            buttonsCheck();
            $("html, body").animate({ scrollTop: $('#' + scrollTo).offset().top }, 500);
        });

        $(prevBtn).on("click", function(){
            $(showSelector).each(function(i){
                if (i === 0) {
                    var ind = $(this).attr("data-item");
                for (var ip = ind; ip >= (ind - elsOnPage); --ip) {
                    $("[data-item=" + ip + "]").toggleClass(showClass);
                }
                  $(this).toggleClass(showClass);
                }
                $(this).toggleClass(showClass);
            });
            currentPage--;
        //Checks
            buttonsCheck();
            $("html, body").animate({ scrollTop: $('#' + scrollTo).offset().top }, 500);

        }); //End of pagination
        })();
        


        // Pagination for signed up users



        (function(){
            //Settings for paginating elements

        //1. Selector for items to be paginated 
        var mainListSelector = (".invite__row-su");

        //2. Next - prev buttons selector
        var nextBtn = "#signedupNext";
        var prevBtn = "#signedupPrev";

        //3. Set max elements per one "page" 
        var elsOnPage = 2;

        //4. Set main container selector to which page will be scrolled when next-prev page called
        var scrollTo = "tabs";  //ID here

        //5. Set the item-showing class (.js-shown by default)
        var showSelector = ".js-shown-tr"
        var showClass = "js-shown-tr"


        var list = document.querySelectorAll(mainListSelector);
        var currentPage = 1;


    //Check for buttons

        function buttonsCheck() {
            var inlists = document.querySelectorAll(".js-inlist");

            if (currentPage === 1) {
                $(prevBtn).attr("disabled", true);
            }	else {
            $(prevBtn).attr("disabled", false)
        }

        if ($("[data-item=" + (inlists.length - 1) + "]").hasClass(showClass)) {
            $(nextBtn).attr("disabled", true);
        } else {
            $(nextBtn).attr("disabled", false);
        }
        }

    //Initiate pagination

        function initList() {
            
        currentPage = 1;


        $(mainListSelector).each(function(i) {
                $(this).attr("data-item", i);
                $(this).addClass("js-inlist");
            });
            
        
        for (var i = 0; i < elsOnPage; i++) {
            if (list[i] === undefined) {
            break;
            }
            list[i].classList.add(showClass);
            }
            buttonsCheck();
        }

        initList();




        $(nextBtn).on("click",function(){

            $(showSelector).each(function(i) {
                $("[data-item=" + (i + elsOnPage * currentPage) + "]").toggleClass(showClass);
                $(this).toggleClass(showClass);
            });
        
            currentPage++;
            //Checks
            buttonsCheck();
            $("html, body").animate({ scrollTop: $('#' + scrollTo).offset().top }, 500);
        });

        $(prevBtn).on("click", function(){
            $(showSelector).each(function(i){
                if (i === 0) {
                    var ind = $(this).attr("data-item");
                for (var ip = ind; ip >= (ind - elsOnPage); --ip) {
                    $("[data-item=" + ip + "]").toggleClass(showClass);
                }
                  $(this).toggleClass(showClass);
                }
                $(this).toggleClass(showClass);
            });
            currentPage--;
        //Checks
            buttonsCheck();
            $("html, body").animate({ scrollTop: $('#' + scrollTo).offset().top }, 500);

        }); //End of pagination
        })(); 
 });
 