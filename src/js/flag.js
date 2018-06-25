function getCookie(name) {

    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

// уcтанавливает cookie
function setCookie(name, value, props) {

    props = props || {}

    var exp = props.expires

    if (typeof exp == "number" && exp) {

        var d = new Date()

        d.setTime(d.getTime() + exp*1000)

        exp = props.expires = d

    }

    if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }

    value = encodeURIComponent(value)

    var updatedCookie = name + "=" + value

    for(var propName in props){

        updatedCookie += "; " + propName

        var propValue = props[propName]

        if(propValue !== true){ updatedCookie += "=" + propValue }
    }

    document.cookie = updatedCookie

}

$(document).ready(function(){
    var flagCur = getCookie('currentFlag');

    if (flagCur !== 'cy' && flagCur !== 'gr') {
        flagCur = 'gr';
    }

    var hiddenLangSelector = '.flag-drop__item--' + flagCur;

    $(".flag-drop__item").each(function(){
        $(this).show();
    })
    $(hiddenLangSelector).hide();

    var lang = flagCur.toUpperCase();

    $('.flag-drop__lang').text(lang);

    flagCur = 'flag-drop__selected--' + flagCur;
    $(".flag-drop__selected").addClass(flagCur);
});
//Change lang buttons

$(".flag-drop__selected").on("click", function(){
    $(".flag-drop__list").toggle();
})

$(".flag-drop__item--gr").on("click",function(e){
    e.preventDefault();
    setCookie('currentFlag', 'gr');
    location.reload(true);
});

$(".flag-drop__item--cy").on("click",function(e){
    e.preventDefault();
    setCookie('currentFlag', 'cy');
    location.reload(true);
});

//Show/hide login buttons
$("#signButton").on("click", function(){
    $("#loginBlock").slideToggle(200);
})

