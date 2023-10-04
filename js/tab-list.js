$(function () {
    $('.tab li').click(function (e) {
        e.preventDefault();
        $('.tab li a').removeClass('active');
        $(this).find('a').addClass('active');
        const idx = $(this).index();
        $('.tab-item').hide();
        $('.tab-item').eq(idx).show();
    });
    $('.tab li').eq(0).trigger('click');
});
