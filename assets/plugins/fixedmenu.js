$(document).ready(function () {
	// fixed menu

    var coor;
    $(window).scroll(function () {
        var coor = $(window).scrollTop();
        // console.log("x = " + coor);
        if (coor >= 70) {
            $(".workContainer nav").addClass("fixed");
            $(".workContainer nav a").addClass("fixed");
            $(".workContainer nav ul").addClass("fixed");
        }
        else {
            $(".workContainer nav").removeClass("fixed");
            $(".workContainer nav a").removeClass("fixed");
            $(".workContainer nav ul").removeClass("fixed");    
        }
    });

    // vk initialization

    // var loadVK = function () {

    //     var path = window.location.pathname.split('/');
    //     var page = path[path.length - 1];

    //     console.log("adress = " + page);

    //     $.getJSON('vkpages.json', function (data) {

    //         $.each(data, function (v, k) {
    //             if  (v === page) {
    //                 var vkHtml = {
    //                     url: k.vkhtml.url,
    //                     title: k.vkhtml.title,
    //                     description: k.vkhtml.description,
    //                     image: k.vkhtml.image,
    //                     noparse: k.vkhtml.noparse
    //                 };
    //                 var vkView = {
    //                     type: k.vkview.type,
    //                     text: k.vkview.text
    //                 };
    //                 $("#vk").html(VK.Share.button(vkHtml, vkView));
    //             };
    //         });
    //     })
    //     .fail(function () {
    //         console.log("error");
    //     })
    //     .done(function () {
    //         console.log("good");
    //     });
    // };
    // $(document).ready(loadVK);
});