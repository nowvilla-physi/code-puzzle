$('#open-btn').on('click', function () {
    $('.modal').fadeIn(500);
});

$( '.modal, #close-btn').on('click', function () {
    $('.modal').fadeOut(500);
});
