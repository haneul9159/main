$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        autoScrolling: true,
        scrollHorizontally: true,
        sectionsColor: ['#1D1D1D ', '#222222', '#1D1D1D', '#222222', '#1D1D1D', '#222222'],
        navigation: true, // 물방울
        navigationPosition: 'right',
        navigationTooltips: ['MAIN', 'ABOUT', 'TECH STACK', 'DESIGN', 'VIDEO EDITING', 'footer'],
        keyboardScrolling: false,
        responsiveWidth: 1025,

        afterLoad: function (anchor, index) {
            console.log(index);
            if (index >= 2) {
                $('.header .logo a').addClass('wow');
            } else {
                $('.header .logo a').removeClass('wow');
            }
            if (index >= 2) {
                $('.burger').addClass('active');
            } else {
                $('.burger').removeClass('active');
            }
        },
    });
});
