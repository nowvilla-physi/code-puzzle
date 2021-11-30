$(document).ready(function () {
    ScrollReveal().reveal('.image', {
        delay: 300,         // fadeInアニメーションを開始するまでの時間(ms)
        distance: '400px',  // スライドする要素の移動距離
        duration: 1000,     // fadeInアニメーションの時間(ms)
        origin: 'left',     // どの方向からスライドするか
        reset: false        // fadeInアニメーションをスクロールする度に発火させるかどうか
    });
});
