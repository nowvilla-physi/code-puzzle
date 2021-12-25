$('.question').on('click', function () {
    $('.answer').slideUp();

    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
    } else {
        $('.question').removeClass('open');
        $(this).addClass('open');
        $(this).next('.answer').slideDown();
    }
})
