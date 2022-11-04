$('.employment-items > div').on('click', function(){
    $(this).parent('.employment-items').toggleClass('change-color');
    $(this).children('.employment-sub-item').children('.employment-items__icon').toggleClass('employment-items__icon-rotate');
    $(this).next('.employment__slide-text').slideToggle(300);
    $(this).children('.employment-sub-item').toggleClass('background-new');
})

$('.features-items > div').on('click', function(){
    $(this).next('.features-items__slide-text').slideToggle(300);
    $(this).children('.features-items__text').toggleClass('slide-color');
    $(this).children('.features-items__icon').children('.color').toggleClass('pic-color');
})