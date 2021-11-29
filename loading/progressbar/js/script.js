$(document).ready(function () {
    // ProgressBarインスタンスを生成する
    const progressBar = new ProgressBar.Line('#loading-bar', {
        strokeWidth: 0.2,   // 進捗ゲージの太さ
        color: 'skyblue',   // 進捗ゲージの色
        duration: 1000,     // ローディングの時間(ms)
        trailWidth: 0.2,    // ベースゲージの太さ
        trailColor: 'gray', // ベースゲージの色
        text: {
            autoStyleContainer: false  // デフォルトのスタイルを使用するかどうか
        }
    });

    // アニメーション開始(1.0で100%まで描画する)
    progressBar.animate(1.0, function () {
        // アニメーションが終わったらfadeOutする
        $('#loading').delay(300).fadeOut(1000);
    })
});
