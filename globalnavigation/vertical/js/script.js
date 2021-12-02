$(document).ready(function () {
    $('.nav-item').hover(
        // hover時
        function () {
            $(this).children('.drop-menu').addClass('open');
        },
        // hover解除時
        function () {
            $(this).children('.drop-menu').removeClass('open');
        }
    );
});
