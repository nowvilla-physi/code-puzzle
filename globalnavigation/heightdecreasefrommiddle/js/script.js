$(window).scroll(function () {
    const scrollTop = $(window).scrollTop();

    // 800pxスクロールした位置でクラスisMinimumを付与する
    if (scrollTop > 800) {
        $('#header').addClass('isMinimum');
    } else {
        $('#header').removeClass('isMinimum');
    }
});
