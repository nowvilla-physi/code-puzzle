$('.search-btn').on('click', function () {
    $(this).toggleClass('open');
    $('.search-box-wrapper').toggleClass('open');
    $('.search-input').focus();
});
