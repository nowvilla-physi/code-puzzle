$('.question').on('click', function () {
    $('.answer').slideUp();

    const answerElement = $(this).next('.answer');
    $(answerElement).slideToggle();

    if ($(this).hasClass('close')) {
        $(this).removeClass('close');
    } else {
        $(this).addClass('close');
    }
});
