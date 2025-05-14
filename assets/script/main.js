$(() => {
    // お客様の声スライド
    const $items = $('.reviews__item');
    $('.reviews__items').slick({
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '0px',
        arrows: true,
        dots: false,
        variableWidth: false,
        arrows: false,
        infinite: false,
        customPaging: function (slider, i) {
            return '<span class="reviews__dot"></span>';
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 1,
                dots: true,
                initialSlide: 1,
                variableWidth: true,
                centerMode: true,
                centerPadding: '40px',
                }
            },
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