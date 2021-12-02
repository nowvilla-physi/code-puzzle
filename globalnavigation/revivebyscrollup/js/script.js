let preScrollTop = 0;

$(window).scroll(function () {
    const scrollTop = $(window).scrollTop();

    // 上スクロール
    if (scrollTop < preScrollTop) {
        $('#header').removeClass('down');
        $('#header').addClass('up');
    // 下スクロール
    } else {
        $('#header').removeClass('up');
        $('#header').addClass('down');
    }

    preScrollTop = scrollTop
});
