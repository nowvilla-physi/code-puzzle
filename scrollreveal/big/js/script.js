$(document).ready(function () {
    ScrollReveal().reveal('.image', {
        delay: 300,     // fadeInアニメーションを開始するまでの時間(ms)
        duration: 1000, // fadeInアニメーションの時間(ms)
        scale: 0.1,     // fadeInアニメーション開始時の大きさ(0.1で0.1倍となる)
        reset: false    // fadeInアニメーションをスクロールする度に発火させるかどうか
    });
});
