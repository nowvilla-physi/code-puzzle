$(document).ready(function () {
    ScrollReveal().reveal('.image', {
        delay: 300,     // fadeInアニメーションを開始するまでの時間(ms)
        duration: 1000, // fadeInアニメーションの時間(ms)
        scale: 2,       // fadeInアニメーション開始時の大きさ(2で2倍となる)
        reset: false    // fadeInアニメーションをスクロールする度に発火させるかどうか
    });
});
