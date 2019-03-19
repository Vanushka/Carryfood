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
		setTimeout(function() {
			if ($('#goods-slider .slick-track').children().length < 3) {
				$('#goods-slider .slick-track').css({'display': 'flex', 'width': '100%'});
				$('#goods-slider .good').css('width', '134px');
			}
		},800);
	} else {
		$('#goods-slider').slick({
			lazyLoad: 'ondemand',
			infinite: true,
			speed: 800,
			autoplay: true,
			autoplaySpeed: 5000,
			slidesToShow: 2,
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
		setTimeout(function() {
			if ($('#foodSlider .slick-track').children().length < 3) {
				$('#foodSlider .slick-track').css({'display': 'flex', 'width': '100%'});
				$('#foodSlider .food').css('width', '134px');
			}
		},800);
	} else {
		$('#foodSlider').slick({
			lazyLoad: 'ondemand',
			infinite: true,
			speed: 800,
			autoplay: true,
			autoplaySpeed: 5000,
			slidesToShow: 2,
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
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				}
			},
		],
	});
	setTimeout(function() {
		if ($('#smartSlider .slick-track').children().length < 3) {
			$('#smartSlider .slick-track').css({'display': 'flex', 'width': '100%'});
			$('#smartSlider .good').css('width', '134px');
		}
	},800);


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

	//--LOGIN--
	function openLogin() {
		$('.login').css('display', 'block');
		$('#login .background').css('display', 'block');
		$('body').css('overflow', 'hidden');
		$('.registration').css('display', 'none');
		$('#registration .background').css('display', 'none');
		if($('.login').css('display') == 'block') {
			$('#navToggle').toggleClass("active");
			$(".overlay").toggleClass("open");
			$("body").toggleClass("locked");
		}
	}
	//--REGISTRATION--
	function openReg() {
		$('.registration').css('display', 'block');
		$('#registration .background').css('display', 'block');
		$('body').css('overflow', 'hidden');
		$('.login').css('display', 'none');
		$('#login .background').css('display', 'none');
	}
	// --MODAL--
	function openProductDetail() {
		$('.product-details').css('display', 'block');
		$('#modal .background').css('display', 'block');
		$('body').css('overflow', 'hidden');
	}

	function closeProductDetail() {
		$('.product-details').css('display', 'none');
		$('#modal .background').css('display', 'none');
		$('body').css('overflow', 'scroll');
	}

	$('.background').click(function() {
		$('.background').css('display', 'none');
		$('.product-details').css('display', 'none');
		$('.login').css('display', 'none');
		$('.registration').css('display', 'none');
		$('body').css('overflow', 'scroll');
	})

	// переключатель состояния мобильного меню
	$("#navToggle").click(function() {
			$(this).toggleClass("active");
			$(".overlay").toggleClass("open");
			// this line ▼ prevents content scroll-behind
			$("body").toggleClass("locked");
	});


		if ($('#basket').css('display') == 'block') {
			$('body').css('background', '#f6f6f5');
		}
		if ($('#order').css('display') == 'block') {
			$('body').css('background', '#f6f6f5');
		}
		function hideallDropdowns() {
			$(".dropped .choose-shop-menu-sub").hide();
			$(".dropped").removeClass('dropped');
			$(".dropped .choose-shop-menu-sub .title").unbind("click");
		}

		function showDropdown(el) {
			var el_li = $(el).parent().addClass('dropped');
			el_li
				.find('.title')
				.click(function () {
						hideallDropdowns();
				})
				.html($(el).html());

			el_li.find('.choose-shop-menu-sub').show();
		}

		$(".choose-shop-down").click(function(){
			showDropdown(this);
		});

		$(document).mouseup(function () {
			hideallDropdowns();
		});



	// Табуляция инфы в модальном окне товара

		$(".block-info a").click(function() { // Событие нажатия на элемент меню вкладок
			if (!$(this).hasClass("active")) { // Проверка, не нажали ли мы на уже активный пункт
				var i = $(this).index(); // Получаем порядковый номер нажатого пункта, отстче идет от 0 (0,1,2)
				$(".block-info a.active").removeClass("active"); // Удаляем активный класс у прошлого пункта меню
				$(".text").hide().removeClass("active"); // Скрываем и удаляем активный класс у прошлого контейнера с содержимым
				$(this).addClass("active"); // Добавляем нажатому пункту меню активный класс
				$($(".block-text").children(".text")[i]).fadeIn(1000).addClass("active"); // Показываем и добавляем активный класс соответствующему контейнеру
				return false;
			}
		});

		$(".block-info-product a").click(function() {
			if (!$(this).hasClass("active")) {
				var i = $(this).index();
				$(".block-info-product a.active").removeClass("active");
				$(".text-product").hide().removeClass("active");
				$(this).addClass("active");
				$($(".block-text-product").children(".text-product")[i]).fadeIn(1000).addClass("active");
				return false;
			}
		});


		$(".links-profile a").click(function() {
			if (!$(this).hasClass("active")) {
				var i = $(this).index();
				$(".links-profile a.active").removeClass("active");
				$(".profile-section").hide().removeClass("active");
				$(this).addClass("active");
				$($("#basket").children(".profile-section")[i]).fadeIn(1000).addClass("active");
				return false;
			}
		});

		$(".change-order label").click(function() {
			if (!$(this).hasClass("active")) {
				var i = $(this).index();
				$("i.fa.fa-check").remove();
				$(".change-order label.active").removeClass("active");
				$(this).addClass("active");
				$($(this).append('<i aria-hidden="true" class="fa fa-check" />'));
				return false;
			}
		});

		// Переключение вкладок повторения заказа в корзине
		$(".the-sum a").click(function() {
			if ($(this).hasClass("repeat")) {
				var parentThis = $(this).parents('.basket-inside');
				console.log(parentThis);
				var childThis = parentThis.children('.products');
				console.log(childThis);
				$(".the-sum a").addClass("repeat");
				$(".basket-inside .products").hide().removeClass("active-product");
				$(this).removeClass("repeat");
				$(childThis).fadeIn(1000).addClass("active-product");
				return false;
			}
		});

		// Переключение блоков изменении заказов при редактировании
		$(".main-fields a").click(function() {
			var parentGeneral = $(this).parents('.order-details');
			var parent = parentGeneral;
			var flex = parent.children()
			var main = flex.children();
			var order = main.children('.body-order');
			if($(this).hasClass('repeat')) {
				var i = $(this).index();
				var body = $(this).parent();
				if ($('.parts').children("a").hasClass("pred")) {
					$($('.parts').children("a.pred")).addClass("repeat");
				}
				$(this).removeClass("repeat");
				if ($(".body-order").hasClass('active')) {
					$(".body-order").css('display', 'none');
					$(".body-order").removeClass("active");
				}
				$(main).css('display', 'block');
				$(order).fadeIn(1000).addClass("active");
				$(order).css('display', 'block');
			}
		});
		// Переключение блоков оформления заказа
		$(".next").click(function() {
			var parentGeneral = $(this).parents('.order-details');
			var nextParent = parentGeneral.next();
			var nextFlex = nextParent.children()
			var nextMain = nextFlex.children();
			var nextOrder = nextMain.children('.body-order');
			var nextPart = nextMain.children('.parts');
			var parent = parentGeneral.children('.flex-profile');
			var child = parent.children('.main-fields');
			var little = child.children('.body-order');
			var parts = child.children('.parts');
			if (little.hasClass('active')) {
				$(little).css('display', 'none');
				$(child).css('display', 'flex');
				$(little).removeClass("active");
				if (!$(nextPart).children("a").hasClass("repeat")) {
					$($(parts).children("a")).addClass("repeat");
					$($(parts).children("a")).addClass("pred");
				} else if ($(nextPart).children("a").hasClass("repeat")) {
					$(nextPart).children('a').removeClass('repeat');
					$($(parts).children("a")).addClass("repeat");
					$($(parts).children("a")).addClass("pred");
				}
				if (!$(child).css('display') == 'flex') {
					$(nextOrder).fadeIn(1000).addClass("active");
				} else {
					$(child).css('display', 'block');
					$(nextOrder).fadeIn(1000).addClass("active");
				}
			}
				return false;
		});

	// LIKES
	$('a.heart').click(function() {
		$('a.heart').toggleClass('active');
	});

	// Отмена action button
	$('.next button').click(function(e) {
		e.preventDefault();
	})
