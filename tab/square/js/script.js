$('.tab').on('click',function(){
    const tabs = $('.tab');
    tabs.removeClass('active');
    $(this).addClass('active');
    const index = tabs.index(this);
    $('.item').removeClass('active').eq(index).addClass('active');
});
