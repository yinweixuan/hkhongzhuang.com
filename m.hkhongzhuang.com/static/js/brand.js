 $(function(){
             if (!$('.brand .m2 .swiper-container')) return;
            var brandswiper = new Swiper('.brand .m2 .swiper-container', {
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.brand .m6 .swiper-pagination',
                    clickable: true,
                }
            });
            var brandswiper2 = new Swiper('.brand .m6 .swiper-container', {
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.brand .m6 .swiper-pagination',
                    clickable: true,
                }
            });
        })