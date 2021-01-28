// $(document).ready(function () {
//     size_li = $(".items-list li").size();
//           x = 8

//     $('.items-list li:lt('+x+')').addClass('show');
//     setTimeout(function () {
//             $('.items-list li:lt(' + x + ')').addClass('appear');    
//         }, 300);

//     $('#loadMore').click(function () {
//         x = (x + 4 <= size_li) ? x + 4 : size_li;
//         $('.items-list li:lt(' + x + ')').removeClass('hide').addClass('show');
//         setTimeout(function () {
//             $('.items-list li:lt(' + x + ')').removeClass('appear').addClass('appear');    
//         }, 300);
//     });

//     $('#showLess').click(function () {
//         x = (x - 5 < 0) ? 4 : x - 4;
//         $('.items-list li').not(':lt(' + x + ')').removeClass('show').addClass('hide');
//         setTimeout(function () {
//             $('.items-list li:lt(' + x + ')').removeClass('appear').addClass('disappear');    
//         }, 300);
//     });

// });

$(document).ready(function () {
    size_li = $(".items-list li").size();
          x = 8;
          console.log('x = ' + x);

    $('.items-list li:lt(' + x + ')').addClass('show disappear');
    setTimeout(function () {
            $('.items-list li:lt(' + x + ')').removeClass('disappear');    
        }, 300);

    $('#loadMore').click(function () {
        x = (x + 4 <= size_li) ? x + 4 : size_li;
        $('.items-list li:lt(' + x + '):gt(' + (x - 5) + ')').addClass('show disappear');
        setTimeout(function () {
            $('.items-list li:lt(' + x + '):gt(' + (x - 5) + ')').removeClass('disappear');    
        }, 300);

        if (x === size_li) {
            $('#loadMore').hide();
        }
        else $('#loadMore').show();
    });

});