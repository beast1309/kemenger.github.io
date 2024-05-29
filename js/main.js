$('.header__btn').on('click', function () {
    $('.header__form').toggleClass('--active');
});

$('.header__form-close').on('click', function () {
    $('.header__form').removeClass('--active');
});

$('.more-btn-1').on('click', function () {
    $('.catalog__slider-item__text.hidden-1').toggleClass('--active');
});

$('.more-btn-2').on('click', function () {
    $('.catalog__slider-item__text.hidden-2').toggleClass('--active');
});

$('.more-btn-3').on('click', function () {
    $('.catalog__slider-item__text.hidden-3').toggleClass('--active');
});

$('.more-btn-4').on('click', function () {
    $('.catalog__slider-item__text.hidden-4').toggleClass('--active');
});

$('.more-btn-5').on('click', function () {
    $('.catalog__slider-item__text.hidden-5').toggleClass('--active');
});

$('.more-btn-6').on('click', function () {
    $('.catalog__slider-item__text.hidden-6').toggleClass('--active');
});

$('.header__burger').on('click', function () {
    $('.header__navigation').toggleClass('--active');
});

$('.catalog__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.catalog__slider-navigation__prev',
    nextArrow: '.catalog__slider-navigation__next',
    responsive: [
        {
            breakpoint: 1281,
            settings: "unslick"
        },
    ]
});

$('.about__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.about__slider-navigation__prev',
    nextArrow: '.about__slider-navigation__next',
    responsive: [
        {
            breakpoint: 1281,
            settings: "unslick"
        },
    ]
});