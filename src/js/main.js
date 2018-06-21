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
    $('body').animate({
            scrollTop: 0 ,
        }, 700
    );
    $('html').animate({
            scrollTop: 0 ,
        }, 700
    );
});

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 94) {
        $('.sticky-header').addClass('sticky-header-shadow');
    } else {
        $('.sticky-header').removeClass('sticky-header-shadow');
    }
    if($(window).scrollTop() > 300) {
        btnTop.fadeIn(500);

    } else {
        btnTop.fadeOut(500);
    }
});
var elements = document.querySelectorAll('.sticky');
Stickyfill.add(elements);



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
var closeRegister = document.getElementById("closeRegisterBtn");

//get login dialog
var modalLogin = document.getElementsByClassName("ui-dialog--login")[0];

//get register dialog
var modalRegister = document.getElementsByClassName("ui-dialog--register")[0];

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
closeRegister.onclick = function () {
    modalRegister.style.display = "none";
}



//get login button
var loginBtn = document.getElementById("login-btn");
loginBtn.onclick = function () {
    modalLogin.style.display = "block";
}
var registerBtn = document.getElementById("register-btn");
registerBtn.onclick = function () {
    modalRegister.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//read more
var $el, $ps, $up, totalHeight;

$(".ui-panel .ui-overflow--hidden .ui-read-more").click(function() {

    totalHeight = 0

    $el = $(this);
    $p  = $el.parent();
    $ps = $p.find("span");
    $rl = $p.find(".ui-read-less");

    // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
    $ps.each(function() {
        totalHeight += $(this).outerHeight();
    });

    $p
        .css({
            // Set height to prevent instant jumpdown when max height is removed
            "height": $p.height(),
            "max-height": 9999
        })
        .animate({
            "height": totalHeight + 30
        });

    // fade out read-more
    $el.fadeOut();
    $rl.fadeIn();
    // prevent jump-down
    return false;

});
$(".ui-panel .ui-overflow--hidden.ui-height--100 .ui-read-less").click(function() {
    $parent = $(this).parent();
    $parent.animate({"height":100});
    $parent.find(".ui-read-more").fadeIn();
    $(this).fadeOut();
});
$(".ui-panel .ui-overflow--hidden.ui-height--85 .ui-read-less").click(function() {
    $parent = $(this).parent();
    $parent.animate({"height":85});
    $parent.find(".ui-read-more").fadeIn();
    $(this).fadeOut();
});


$(function () {
    var _alphabets = $('.alphabet > a');
    var _contentRows = $('#countries-table tbody tr');

    _alphabets.click(function () {
        var _letter = $(this), _text = $(this).text(), _count = 0;

        _alphabets.removeClass("active");
        _letter.addClass("active");

        _contentRows.hide();
        _contentRows.each(function (i) {
            var _cellText = $(this).children('td').eq(0).text();
            if (RegExp('^' + _text).test(_cellText)) {
                _count += 1;
                $(this).fadeIn(400);
            }
        });
    });
});

