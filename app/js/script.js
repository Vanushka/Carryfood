$(document).ready(function(){
  // --UNDER-HEADER-SLIDER--
  $('#slider-present').slick({
    dots: true,
    infinite: true,
    speed: 800,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    prevArrow: '<div class="prev-head-slider"><img src="./dist/img/prev-head-slider.svg"></div>',
    nextArrow: '<div class="next-head-slider"><img src="./dist/img/next-head-slider.svg"></div>',
    customPaging : function(slider, i) {
      return '<a class="pager"></a>';
    },
  });


  // --GOODS-SLIDER--
  if ($(window).width() >= 768) {
    $('#goods-slider').slick({
      lazyLoad: 'ondemand',
      infinite: true,
      speed: 800,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 9,
      slidesToScroll: 1,
      prevArrow: '<div class="prev-review-slider"><img src="./dist/img/prev-review-slider.svg"></div>',
      nextArrow: '<div class="next-review-slider"><img src="./dist/img/next-review-slider.svg"></div>',
    });
  } else {
    $('#goods-slider').slick({
      lazyLoad: 'ondemand',
      infinite: true,
      speed: 800,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<div class="prev-review-slider"><img src="./dist/img/prev-review-slider.svg"></div>',
      nextArrow: '<div class="next-review-slider"><img src="./dist/img/next-review-slider.svg"></div>',
    });
  }


  // --REVIEWS-SLIDER--
  if ($(window).width() >= 768) {
    $('#reviews').slick({
      lazyLoad: 'ondemand',
      infinite: true,
      speed: 800,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 3,
      slidesToScroll: 1,
      mobileFirst:true,
      prevArrow: '<div class="prev-review-slider"><img src="./dist/img/prev-review-slider.svg"></div>',
      nextArrow: '<div class="next-review-slider"><img src="./dist/img/next-review-slider.svg"></div>',
    });
  } else {
    $('#reviews').slick({
      lazyLoad: 'ondemand',
      infinite: true,
      speed: 800,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst:true,
      prevArrow: '<div class="prev-review-slider"><img src="./dist/img/prev-review-slider.svg"></div>',
      nextArrow: '<div class="next-review-slider"><img src="./dist/img/next-review-slider.svg"></div>',
    });
  }

  // --FOOD-SLIDER--
  if($(window).width() >=768) {
    $('#foodSlider').slick({
      lazyLoad: 'ondemand',
      infinite: true,
      speed: 800,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 9,
      slidesToScroll: 1,
      mobileFirst:true,
      prevArrow: '<div class="prev-review-slider"><img src="./dist/img/prev-review-slider.svg"></div>',
      nextArrow: '<div class="next-review-slider"><img src="./dist/img/next-review-slider.svg"></div>',
    });
  } else {
    $('#foodSlider').slick({
      lazyLoad: 'ondemand',
      infinite: true,
      speed: 800,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst:true,
      prevArrow: '<div class="prev-review-slider"><img src="./dist/img/prev-review-slider.svg"></div>',
      nextArrow: '<div class="next-review-slider"><img src="./dist/img/next-review-slider.svg"></div>',
    });
  }

  // --SMART-SLIDER--
  $('#smartSlider').slick({
    lazyLoad: 'ondemand',
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 9,
    slidesToScroll: 1,
    prevArrow: '',
    nextArrow: '',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ],
  });


    // if ($(window).width() >= 768) {
    //   $('.goods-viewed').css('display', 'none')
    // }


  $(function () {
    parameters = {
      duration: 2000,
      progress: function (animation, progress) {
        $('#progress')
          .width(parseInt(progress * 100) + '%')
          .text(parseInt(progress * 100) + '%');
      },
      complete: function () {
        $('#progress')
          .css('width', '0%')
          .text('0%');
      }
    }
    $('.smart-search').click(function () {
        $('#smartSlider').slideToggle(parameters);
          if($('.button-hide').css('display') == 'none') {
            $('.line-gradient').css('display', 'block');
            setTimeout(function () {
              $('.button-hide').css('display', 'flex');
              $('.line-gradient').css('display', 'block');
              return false;
            }, 2000);
          } else {
            setTimeout(function () {
              $('.button-hide').css('display', 'none');
              $('.line-gradient').css('display', 'none');
            }, 2000);
          }
        return false;
    });
    $('.button-hide').click(function () {
        $('#smartSlider').slideToggle(parameters);
          setTimeout(function () {
            $('.button-hide').css('display', 'none');
            $('.line-gradient').css('display', 'none');
          }, 2000);
        return false;
    });
  });
});

  // --MODAL--
  function openProductDetail() {
    $('.product-details').css('display', 'block');
    $('.background').css('display', 'block');
    $('body').css('overflow', 'hidden');
  }

  function closeProductDetail() {
    $('.product-details').css('display', 'none');
    $('.background').css('display', 'none');
    $('body').css('overflow', 'scroll');
  }

  $('.background').click(function() {
    $('.background').css('display', 'none');
    $('.product-details').css('display', 'none');
    $('body').css('overflow', 'scroll');
  })

  // переключатель состояния бургера
  $('.burger').on('click', function(e) {
    e.preventDefault()
    $('.burger').toggleClass('is-active')
  });
  $('.popUp-nav-desktop .burger').on('click', function(e) {
    e.preventDefault()
  });





  $("#navToggle").click(function() {
      $(this).toggleClass("active");
      $(".overlay").toggleClass("open");
      // this line ▼ prevents content scroll-behind
      $("body").toggleClass("locked");
  });
