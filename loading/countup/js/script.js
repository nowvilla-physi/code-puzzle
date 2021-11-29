$(document).ready(function () {
    // ProgressBarインスタンスを生成する
    const progressBar = new ProgressBar.Line('#loading-counter', {
        strokeWidth: 0,  // 進捗ゲージの太さ
        duration: 1000,  // ローディングの時間(ms)
        text: {
            autoStyleContainer: false  // デフォルトのスタイルを使用するかどうか
        },
        step: function (state, progressBar) {
            // ローディング用のカウンター表示
            progressBar.setText(Math.round(progressBar.value() * 100) + ' %');
        }
    });

    // アニメーション開始(1.0で100%まで描画する)
    progressBar.animate(1.0, function () {
        // アニメーションが終わったらfadeOutする
        $('#loading').delay(300).fadeOut(1000);
    })
});
