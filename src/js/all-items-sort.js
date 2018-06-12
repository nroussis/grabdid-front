//Settings for paginating elements

        //1. Selector for items to be paginated 
        var mainListSelector = (".stores__item--paginated");

        //2. Next - prev buttons selector
        var nextBtn = ".pagination__next";
        var prevBtn = ".pagination__prev";

        //3. Set max elements per one "page" 
        var elsOnPage = 3;

        //4. Set main container selector to which page will be scrolled when next-prev page called
        var scrollTo = "allstores";  //ID here


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

            if ($("[data-item=" + (inlists.length - 1) + "]").hasClass("js-shown")) {
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
            list[i].classList.add("js-shown");
            }
            buttonsCheck();
        }

        initList();




        $(nextBtn).on("click",function(){

            $(".js-shown").each(function(i) {
                $("[data-item=" + (i + elsOnPage * currentPage) + "]").toggleClass("js-shown");
                $(this).toggleClass("js-shown");
            });
        
            currentPage++;
            //Checks
            buttonsCheck();
            $("html, body").animate({ scrollTop: $('#' + scrollTo).offset().top }, 500);
        });

        $(prevBtn).on("click", function(){
            $(".js-shown").each(function(i){
                if (i === 0) {
                    var ind = $(this).attr("data-item");
                for (var ip = ind; ip >= (ind - elsOnPage); --ip) {
                    $("[data-item=" + ip + "]").toggleClass("js-shown");
                }
                  $(this).toggleClass("js-shown");
                }
                $(this).toggleClass("js-shown");
            });
            currentPage--;
        //Checks
            buttonsCheck();
            $("html, body").animate({ scrollTop: $('#' + scrollTo).offset().top }, 500);

        }); //End of pagination

        //Sorting
        $(".alpha__filter").on("click", function(){
            var filter = $(this).attr("data-l");
            var target = ".liter_" + filter;
            var basicElement = ".stores__item";
            
            $(".alpha__filter--checked").removeClass("alpha__filter--checked");
            $(this).addClass("alpha__filter--checked");

            function clearItems() {
                 //Hide all the elements
                 $(basicElement).each(function(){
                    $(this).attr("data-item", "");
                    $(this).removeClass("js-shown");
                    $(this).removeClass("js-inlist");
                });
            }
            
            
            if (filter !== "all" && filter !== "num") {
                //Hide all the elements
                clearItems();
               
                
                //Show filtered only
                $(target).each(function(i){
                    $(this).attr("data-item", i);
                    $(this).addClass("js-inlist");
                if (i < elsOnPage) {
                    $(this).addClass("js-shown");
                } 
                
                });
                currentPage = 1;
                buttonsCheck();
                } else if (filter === "all") {
                    // Show all elements
                    clearItems();
                    initList();
                } else if (filter === "num") {
                //Show all numeric elements:

                //1.Hide all the elements
                clearItems();
                
                //2. Collect them into array and sort it
                var els = [];
                for (var i = 0; i < 9; i++) {
                    $(".liter_" + i).each(function() {
                        $(this).attr("data-num", i);
                        els.push($(this));
                    });
                }
                console.log(els);
                els.sort(function(x,y){
                    x = parseInt(x.attr("data-num"));
                    y = parseInt(y.attr("data-num"));

                    x > y ? 1 : (x < y ? -1 : 0);
                });
                console.log(els);


                //3. Show filtered
                for (var i = 0; i < els.length; i++ ) {
                    els[i].attr("data-item", i);
                    els[i].addClass("js-inlist");
                if (i < elsOnPage) {
                    els[i].addClass("js-shown");
                }
                }
                currentPage = 1;
                buttonsCheck();
            }

        });