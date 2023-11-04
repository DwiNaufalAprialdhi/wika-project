const overlay = document.querySelector('.overlay')
const dropdownMenu = document.querySelector('.dropdownMenu')
const navLink = document.querySelectorAll('.nav_link')

// Nav Link Active
navLink.forEach(navLink => {
  navLink.addEventListener('click', () => {
      document.querySelector('.nav_active')?.classList.remove('nav_active');
      navLink.classList.add('nav_active');
  });
});

// Toggle Menu Overlay Mobile
function navToggle() {
    overlay.classList.toggle('overlay_active')
}

// Dropdown
function dropdownToggle(){
    console.log('masuk')
    dropdownMenu.classList.toggle('flex')
}

 // Slider Hot Topic
 var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      676: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Slider Pertanyaan
  var swiperQuestion = new Swiper(".mySwiperQuestion", {
    spaceBetween: 0,
    loop: true,
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      676: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

    // Slider KMTV
    var swiperKmtv = new Swiper(".mySwiperKmtv", {
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        keyboard: {
          enabled: true,
        },
        breakpoints: {
          992: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          676: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });