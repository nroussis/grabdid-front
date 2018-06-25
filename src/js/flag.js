$(document).ready(function(){
    var flagCur = localStorage.getItem('currentFlag');

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
    localStorage.setItem('currentFlag', 'gr');
    location.reload(true);
});

$(".flag-drop__item--cy").on("click",function(e){
    e.preventDefault();
    localStorage.setItem('currentFlag', 'cy');
    location.reload(true);
});

//Show/hide login buttons
$("#signButton").on("click", function(){
    $("#loginBlock").slideToggle(200);
})

