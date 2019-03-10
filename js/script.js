$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        autoplay:true,
        loop:true,
        autoplaytimeout: 5000,
        autoplayHoverPause: true,
    });

    $(".button-nav").on("click", function(){
        $(".nav__list").toggleClass("nav__list__open");
    });

    $("#back-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});