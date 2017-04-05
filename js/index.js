$(function(){
    $('h1').html('Hello jQuery!');
    $('button').click(clickMe);
});

function clickMe(e) {
    $('h1').fadeToggle(3000);
}




