$(function () {
    $('.menu li').click(function () {
        $('.burger-menu').hide();
        $('body').removeClass('open')
    })

    $('.burger').click(function () {
        $('body').toggleClass('open')
        $('.burger-menu').show();
    })

})