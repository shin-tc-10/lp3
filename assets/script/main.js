$(() => {
    // お客様の声スライド
    const $items = $('.reviews__item');
    $('.reviews__items').slick({
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '40px',
        arrows: false,
        dots: true,
        infinite: true,
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
                slidesToShow: 3,
                centerMode: false,
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