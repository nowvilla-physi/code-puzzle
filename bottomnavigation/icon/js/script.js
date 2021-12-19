$('.list-item > a').on('click', function () {
    $('.list-item > a').removeClass('active');
    $(this).addClass('active');
});
