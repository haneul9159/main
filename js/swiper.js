$(document).ready(function () {
    var swiper = new Swiper('.page4-Swiper', {
        cssMode: true,
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
        loop: true, // <--- 무한반복
        autoplay: false, // <--- 자동재생
        slidesPerView: 1, // <--- 슬라이드가 화면에 한번에 몇개씩 보여질지 설정
        mousewheel: false,
        keyboard: false,
    });
});
