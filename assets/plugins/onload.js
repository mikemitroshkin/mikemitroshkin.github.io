$(document).ready(function () {
    if ($(window).width() > 1024) {
            $(".getCont").attr({'data-modalpage': "ajax"});
        };

    var checkForAjax = function () {

        var ajaxObj = $(".getCont");

        $(ajaxObj).each(function () {
            $(window).resize(function () {
                if ($(window).width() > 1024) {
                    $(".getCont").attr({'data-modalpage': "ajax"});
                }
                else {
                    $(".getCont").removeAttr("data-modalpage");
                }
            });
        });
        
    };

    $(document).ready(checkForAjax);

// check "a" for ajax content


    // open event

    $(".getCont").on('click', function (event) {
        
        var adress = $(this).attr("href");
        var scriptname = $(this).attr("data-script");

        $("body").removeClass("overauto");
        $("body").addClass("overhide");
        if ($(this).attr("data-modalpage") === 'ajax') {
            event.preventDefault();
            $(".overlay").detach();
            $("<div class='overlay'><div class='wrap'>").appendTo("body");
            $(".wrap").load(adress + " #ajaxContainer", function () {
                // loadTwitter();
                // loadVK(adress);
                getJsfiddle(scriptname);
            });
        };

    });


    // close event

    $("body").on('click', '.overlay', function (event) {
        var elem = $(event.target);
        if (elem.attr("class") === "overlay" || elem.attr("class") === "backArrow") {
            event.preventDefault();
            $(".overlay").detach();
            $("body").removeClass("overhide");
            $("body").addClass("overauto");
        };
    });


    // facebook initialization

 
    // $("body").on('click', '.facebook', function (event) {
    //     event.preventDefault();
    //     var getHref = $(this).attr("page-fb");
    //         getHref = 'blackhoundlabs.github.io/' + getHref;
    //     console.log("fb href: " + getHref);
    //     FB.ui({
    //       method: 'share',
    //       href: getHref,
    //     }, function(response){});
    // });

    // twitter initialization

    var loadTwitter = function () {
        if (typeof (twttr) !== 'undefined') {
            $.getScript('https://platform.twitter.com/widgets.js');    
        };
    };

    // vk initialization
    // var loadVK = function (vkpagename) {
    //     console.log("adress = " + vkpagename);

    //     $.getJSON('vkpages.json', function (data) {

    //         $.each(data, function (v, k) {
    //             if  (v === vkpagename) {
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
    //         console.log("error:" + error);
    //     })
    //     .done(function () {
    //         console.log("good");
    //     });
    // };

    // jsfiddle initialization

    var getJsfiddle = function (jsname) {

        var jsname = 'https://jsfiddle.net/blackhound/' + jsname + '/embedded/js,html,css,result/dark/';

        $("<iframe class='jsfiddle'>").replaceAll("#jsfiddle");
        $(".jsfiddle").attr({"src":jsname})
            .attr({"sandbox" : "allow-forms allow-popups allow-scripts allow-same-origin"})
            .attr({"frameBorder":"0"})
            .attr({"width":"100%"})
            .attr({"allowfullscreen":"allowfullscreen"})
            .attr({"height":"320px"});
    };

    // change language

    $("body").on('click', '.ru', function(event) {
        var adress = $(this).attr("href");
        event.preventDefault();
        $(".wrap").empty();
        $(".wrap").load(adress + " #ajaxContainer");
    });

    $("body").on('click', '.en', function(event) {
        var adress = $(this).attr("href");
        event.preventDefault();
        $(".wrap").empty();
        $(".wrap").load(adress + " #ajaxContainer");
    });

});

