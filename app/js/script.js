// --UNDER-HEADER-SLIDER--
$('#slider-present').slick({
  dots: true,
  infinite: true,
  speed: 800,
  fade: true,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: 'linear',
  prevArrow: '<div class="prev-head-slider"><img src="/dist/img/prev-head-slider.svg"></div>',
  nextArrow: '<div class="next-head-slider"><img src="/dist/img/next-head-slider.svg"></div>',
  customPaging : function(slider, i) {
        return '<a class="pager"></a>';
    }
});


// --GOODS-SLIDER--
$('#goods-slider').slick({
  lazyLoad: 'ondemand',
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 9,
  slidesToScroll: 1,
  prevArrow: '<div class="prev-review-slider"><img src="/dist/img/prev-review-slider.svg"></div>',
  nextArrow: '<div class="next-review-slider"><img src="/dist/img/next-review-slider.svg"></div>',
});

// --REVIEWS-SLIDER--
$('#reviews').slick({
  lazyLoad: 'ondemand',
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<div class="prev-review-slider"><img src="/dist/img/prev-review-slider.svg"></div>',
  nextArrow: '<div class="next-review-slider"><img src="/dist/img/next-review-slider.svg"></div>',
});

// --FOOD-SLIDER--
$('#foodSlider').slick({
  lazyLoad: 'ondemand',
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 9,
  slidesToScroll: 1,
  prevArrow: '<div class="prev-review-slider"><img src="/dist/img/prev-review-slider.svg"></div>',
  nextArrow: '<div class="next-review-slider"><img src="/dist/img/next-review-slider.svg"></div>',
});

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
});


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

// --MODAL--

function openProductDetail() {
  $('.product-details').css('display', 'block');
  $('.background').css('display', 'block');
}

function closeProductDetail() {
  $('.product-details').css('display', 'none');
  $('.background').css('display', 'none');
}

$('.background').click(function() {
  $('.background').css('display', 'none');
  $('.product-details').css('display', 'none');
})

$(document).ready(function(e) {
try {
$("select").msDropDown();
} catch(e) {
alert(e.message);
}
});
