$(document).ready(function () {
    ScrollReveal().reveal('.image', {
        delay: 300,      // fadeInアニメーションを開始するまでの時間(ms)
        duration: 1000,  // fadeInアニメーションの時間(ms)
        reset: false,    // fadeInアニメーションをスクロールする度に発火させるかどうか
        rotate: {        // 回転の設定(3次元で指定可能)
            x: 0,
            y: 0,
            z: -180
        },
    });
});
