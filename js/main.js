$(window).resize(function () {
    var forEach = Array.prototype.forEach;
    var els = document.getElementsByClassName('ui-wrap');
    forEach.call(els, function(el) {
        clamp(el, 2);
    });

});
$(window).on("load",function () {
    var forEach = Array.prototype.forEach;
    var els = document.getElementsByClassName('ui-wrap');
    forEach.call(els, function (el) {
        clamp(el, 2);
    });
});
var btnTop = $('#backToTheTop'); // back to the top selector


btnTop.hover(function(){
    $(this).animate({"opacity": 1}, 500);
},function(){
    $(this).animate({"opacity": 0.5}, 500);
});

btnTop.on('click', function(){
    $('html').animate({
            scrollTop: 0 ,
        }, 700
    );
});
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 94) {
        $('body').addClass('ui-fixed');
    } else {
        $('body').removeClass('ui-fixed');
    }
    if($(window).scrollTop() > 300) {
        btnTop.fadeIn(500);

    } else {
        btnTop.fadeOut(500);
    }
});

var forEachAccordion = Array.prototype.forEach;
var accordionHeaders = document.getElementsByClassName("ui-accordion__header");
forEachAccordion.call(accordionHeaders,function(accordion) {
    accordion.onclick = function(){
        $(this).toggleClass("ui-state--active");
    }
});

// Get the modal
var modal = document.getElementsByClassName("ui-sidebar--navigation")[0];

// Get the button that opens the modal
var btn = document.getElementsByClassName("ui-button--navigation")[0];

// Get the <span> element that closes the modal
var span = document.getElementById("closeSidebarBtn");
var closeLogin = document.getElementById("closeLoginBtn");

//get login dialog
var modalLogin = document.getElementsByClassName("ui-dialog--login")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks on <span> (x), close the modal
closeLogin.onclick = function() {
    modalLogin.style.display = "none";
}



//get login button
var loginBtn = document.getElementById("login-btn");
loginBtn.onclick = function () {
    modalLogin.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if(event.target == modalLogin) {
        modalLogin.style.display = "none";
    }
}
