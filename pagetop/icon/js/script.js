$('#page-top-btn').on('click', function () {
    $(this).addClass('scrollingTop');
    $('html, body').animate({scrollTop: 0}, 2000, function () {
        $('#page-top-btn').removeClass('scrollingTop');
    });
    return false;
});

$(window).scroll(function () {
    const scrollTop = $(window).scrollTop();

    // 400pxスクロールした位置でクラスactiveクラスを付与する
    if (scrollTop > 400) {
        $('#page-top-btn').addClass('active');
    } else {
        $('#page-top-btn').removeClass('active');
    }
});
