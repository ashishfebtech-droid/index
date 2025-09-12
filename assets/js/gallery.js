   new Swiper('.portrait-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: { 768: { slidesPerView: 2 } },
        pagination: { el: '.portrait-swiper .swiper-pagination', clickable: true },
        navigation: {
          nextEl: '.portrait-swiper .swiper-button-next',
          prevEl: '.portrait-swiper .swiper-button-prev',
        },
        on: {
          slideChangeTransitionStart: function () {
            this.slides.forEach(slide => {
              let video = slide.querySelector("video");
              if (video) video.pause();
            });
          },
          slideChangeTransitionEnd: function () {
            let video = this.slides[this.activeIndex].querySelector("video");
            if (video) video.play();
          }
        }
      });

      // Landscape videos swiper: 1 slide only
      new Swiper('.landscape-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: { el: '.landscape-swiper .swiper-pagination', clickable: true },
        navigation: {
          nextEl: '.landscape-swiper .swiper-button-next',
          prevEl: '.landscape-swiper .swiper-button-prev',
        },
        on: {
          slideChangeTransitionStart: function () {
            this.slides.forEach(slide => {
              let video = slide.querySelector("video");
              if (video) video.pause();
            });
          },
          slideChangeTransitionEnd: function () {
            let video = this.slides[this.activeIndex].querySelector("video");
            if (video) video.play();
          }
        }
      });