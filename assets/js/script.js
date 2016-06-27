// Window Scroll
$(window).scroll(function () {
    if ($(window).scrollTop() > 70) {
        $('.site-header').addClass('site-header-nav-scrolled');
    } else {
        $('.site-header').removeClass('site-header-nav-scrolled');
    }
});

$(document).ready(function () {
    $(window).scroll()
});