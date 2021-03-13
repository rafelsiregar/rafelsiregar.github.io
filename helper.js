$(document).ready(function(){
    $('#home_nav').hover(function(){
        $(this).parent().parent().find('a.active').removeClass('active');
        $(this).addClass('active');
    }, function(){$(this).removeClass('active')});

    $('#about_nav').mouseenter(function(){
        $(this).parent().parent().find('a.active').removeClass('active');
        $(this).addClass('active');
    }, function(){$(this).removeClass('active')});

    $('#project_nav').mouseenter(function(){
        $(this).parent().parent().find('a.active').removeClass('active');
        $(this).addClass('active');
    }, function(){$(this).removeClass('active')});

    $('#contact_nav').mouseenter(function(){
        $(this).parent().parent().find('a.active').removeClass('active');
        $(this).addClass('active');
    },function(){$(this).removeClass('active')});
})


