$(document).ready(function () {
    // fixed menu

    var coor;
    $(window).scroll(function () {
        var coor = $(window).scrollTop();

        if (coor >= 300) {
            $(".blogContainer nav").addClass("fixed");
            $(".blogContainer nav a").addClass("fixed");
            $(".blogContainer nav ul").addClass("fixed");
        }
        else {
            $(".blogContainer nav").removeClass("fixed");
            $(".blogContainer nav a").removeClass("fixed");
            $(".blogContainer nav ul").removeClass("fixed");
        }
    });
});