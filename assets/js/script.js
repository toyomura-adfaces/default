$(function () {
    $('.js-scroll').click(function () {
        var speed = 1000;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - 80;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
});
$(function () {
    $("#js-hum").click(function () {
        $("body").toggleClass("is-open");
    });
    $("#js-mask").click(function () {
        $("body").toggleClass("is-open");
    });
});