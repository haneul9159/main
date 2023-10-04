$(document).ready(function () {
    var scrollPosition = $(window).scrollTop();
    var $goTopBtn = $('.go_top');
    console.log('스크롤 위치: ' + scrollPosition);
    // 스크롤 이벤트 리스너 등록
    $(window).scroll(function () {
        // 현재 스크롤 위치를 가져옵니다.
        var scrollPosition = $(window).scrollTop();

        // 화면 크기가 480px 이하이고 스크롤 위치가 200px 이상이면 버튼을 나타나게 합니다.
        if (window.innerWidth <= 1000 && scrollPosition >= 2) {
            $goTopBtn.show();
        } else {
            $goTopBtn.hide();
        }
    });

    // 버튼 클릭 시 페이지 상단으로 스크롤
    $goTopBtn.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});
