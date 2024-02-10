$(document).ready(function () {
    $('li').mouseover(function () { 
        $(this).addClass('active');
    });

    $('li').mouseleave(function () { 
        $(this).removeClass('active');
    });

    $('.menu').click(function (e) { 
        $('.menu-mobile').toggle(1000);
        
    });
});