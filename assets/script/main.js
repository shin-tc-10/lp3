$(() => {
    // お客様の声スライド
    const $items = $('.reviews__item');
    $('.reviews__items').slick({
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '40px',
        arrows: false,
        variableWidth: true,
        dots: true,
        infinite: false,
        speed: 500,
        customPaging: function (slider, i) {
            return '<span class="reviews__dot"></span>';
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '40px',
                }
            },
            {
                breakpoint: 9999,
                settings: {
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            }
        ]
    });

    // スライド切り替え時にis-activeをつける
    $('.reviews__items').on('afterChange', function (event, slick, currentSlide) {
        $items.removeClass('is-active');
        $items.eq(currentSlide).addClass('is-active');
    });
    // 初期is-active設定
    $items.removeClass('is-active');
    $items.eq(0).addClass('is-active');
});