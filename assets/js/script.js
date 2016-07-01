// Window Scroll
var navbarDefault = $('#navbar-default');
$(window).scroll(function () {
    navbarDefault.css('top', $(window).scrollTop() > 60 ? 0 : 20);
});
$(function () {
    $(window).scroll();
    // $("body").tooltip({selector: '[data-toggle=tooltip]'});
    $('.geopattern').each(function () {
        $(this).geopattern($(this).data('pattern-id'));
    });
});