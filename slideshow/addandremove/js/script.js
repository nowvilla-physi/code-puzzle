$(document).ready(function () {
    $('.slide-container').slick({
        dots: true,
        slidesToShow: 3,
    });
    let slideIndex = 1;
    $('#add').on('click', function () {
        slideIndex++;
        $('.slide-container').slick('slickAdd', '<div class="slide-item"><p class="text">' + slideIndex + '</p></div>');
    });
    $('#remove').on('click', function () {
        $('.slide-container').slick('slickRemove', slideIndex - 1);
        if (slideIndex > 0) {
            slideIndex--;
        }
    });
});
