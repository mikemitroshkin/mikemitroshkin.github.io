$(document).ready(function () {
	    

    var objs = $(".items-list li");

    var sortingTo = function (objtype) {
        var delay = 200;

        if (typeof objtype !== "string") {
            var objtype = "hidden";
        }

        // console.log("objtype = " + objtype);

        $(objs).each(function (index) {
            var a = $(this);
            
            a.addClass("show disappear hidden");
            
            if (a.hasClass(objtype) === true) {
                setTimeout(function () {
                    a.toggleClass("hidden");
                }, 50);
            };

            delay += 90;
            setTimeout(function () {
               a.removeClass("disappear") ;
            }, delay);
        });
    };

    $(document).ready(sortingTo);

    $("button").click(function () {
        var takeAttr = $(this).attr("class");
        sortingTo(takeAttr);
    });

});