$(document).ready(function () {
	"use strict";
	var header = $('.header');
	initMenu();
	initHomeSlider();
	initApp();
	initSvg();
	initScrolling();
	initServicesSlider();
	setHeader();
	$(window).on('resize', function () {
		setHeader();
		setTimeout(function () {
			$(window).trigger('resize.px.parallax');
		}, 375);
	});
	$(document).on('scroll', function () {
		setHeader();
	});

	function setHeader() {
		if ($(window).scrollTop() > 91) {
			header.addClass('scrolled');
		} else {
			header.removeClass('scrolled');
		}
	}

	function initMenu() {
		if ($('.menu').length) {
			var menu = $('.menu');
			var hamburger = $('.hamburger');

			hamburger.on('click', function () {
				closeApp();
				menu.toggleClass('active');
				hamburger.toggleClass('active');
			});
		}
	}

	/* 

	4. Init Home Slider

	*/

	function initHomeSlider() {
		if ($('.home_slider').length) {
			var homeSlider = $('.home_slider');
			var slideBar = $('.slide_bar > div');
			var slideNum = $('.slide_num');
			var currentPage = 0;

			// Initialized has to go before the slider initialization
			homeSlider.on('initialized.owl.carousel', function (event) {
				slideBar.css({
					width: "100%",
					transition: "width 8000ms"
				});
			});

			homeSlider.owlCarousel({
				items: 1,
				loop: true,
				autoplay: true,
				autoplayTimeout: 8000,
				nav: false,
				dots: false,
				smartSpeed: 1200,
				mouseDrag: false
			});

			homeSlider.on('translate.owl.carousel', function (event) {
				slideBar.css({
					width: "0%",
					transition: "width 0s"
				});
			});

			homeSlider.on('translated.owl.carousel', function (event) {
				//subtract smartSpeed value from the autoplayTimeout value
				slideBar.css({
					width: "100%",
					transition: "width 6800ms"
				});
				currentPage = (event.item.index - 1).toString();
				if (currentPage.length === 1) {
					currentPage = "0" + currentPage + ".";
				} else {
					currentPage = currentPage + ".";
				}
				slideNum.text(currentPage);
			});

			// Fired before current slide change
			homeSlider.on('change.owl.carousel', function (event) {
				var $currentItem = $('.home_slide', homeSlider).eq(event.item.index);
				var $elemsToanim = $currentItem.find("[data-animation-out]");
				setAnimation($elemsToanim, 'out');
			});

			// Fired after current slide has been changed
			homeSlider.on('changed.owl.carousel', function (event) {
				var $currentItem = $('.home_slide', homeSlider).eq(event.item.index);
				var $elemsToanim = $currentItem.find("[data-animation-in]");
				setAnimation($elemsToanim, 'in');
			});

			// add animate.css class(es) to the elements to be animated
			function setAnimation(_elem, _InOut) {
				// Store all animationend event name in a string.
				// cf animate.css documentation
				var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

				_elem.each(function () {
					var $elem = $(this);
					var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

					$elem.addClass($animationType).one(animationEndEvent, function () {
						$elem.removeClass($animationType); // remove animate.css Class at the end of the animations
					});
				});
			}

		}
	}

	function initApp() {
		if ($('.app').length) {
			var btn = $('.app_button');
			var close = $('.app_button_close');
			btn.on('click', function () {
				if (!$('.menu').hasClass('active')) {
					openApp();
				}
			});

			close.on('click', function () {
				closeApp();
			});
		}
	}

	function openApp() {
		var app = $('.app');
		var content = $('.app_content');
		app.addClass('active');
		content.addClass('active');
	}

	function closeApp(app, content) {
		var app = $('.app');
		var content = $('.app_content');
		app.removeClass('active');
		content.removeClass('active');
	}

	function initSvg() {
		if ($('img.svg').length) {
			jQuery('img.svg').each(function () {
				var $img = jQuery(this);
				var imgID = $img.attr('id');
				var imgClass = $img.attr('class');
				var imgURL = $img.attr('src');

				jQuery.get(imgURL, function (data) {
					// Get the SVG tag, ignore the rest
					var $svg = jQuery(data).find('svg');

					// Add replaced image's ID to the new SVG
					if (typeof imgID !== 'undefined') {
						$svg = $svg.attr('id', imgID);
					}
					// Add replaced image's classes to the new SVG
					if (typeof imgClass !== 'undefined') {
						$svg = $svg.attr('class', imgClass + ' replaced-svg');
					}

					// Remove any invalid XML tags as per http://validator.w3.org
					$svg = $svg.removeAttr('xmlns:a');

					// Replace image with new SVG
					$img.replaceWith($svg);
				}, 'xml');
			});
		}
	}

	function initScrolling() {
		if ($('.scroll_to').length) {
			var links = $('.scroll_to');
			links.each(function () {
				var ele = $(this);
				var target = ele.data('scroll-to');
				ele.on('click', function (e) {
					e.preventDefault();
					$(window).scrollTo(target, 1500, {
						offset: -75,
						easing: 'easeInOutQuart'
					});
				});
			});
		}
	}

	function initServicesSlider() {
		if ($('.services_slider').length) {
			var servicesSlider = $('.services_slider');
			servicesSlider.owlCarousel({
				items: 3,
				loop: true,
				autoplay: true,
				dots: false,
				nav: false,
				smartSpeed: 1200,
				margin: 35,
				responsive: {
					0: {
						items: 1
					},
					992: {
						items: 2
					},
					1441: {
						items: 3
					}
				}
			});
		}
	}
});

/////////////////////////////////////////////////////////////////////////////
$("#send_contact").click(function () {
	var full_name = document.getElementById("name").value;
	if (full_name == "") {
		$("#send_contact").prop('disabled', false);
		$("#fullname_error").html("Please Type your name");
		$("#fullName").css({
			"border-color": "red"
		});
		return;
	} else {
		$("#fullname_error").html(" &nbsp;");
		$("#fullName").css({
			"border-color": "#8888"
		});
	}
	var email = document.getElementById("email").value;
	if (email == "") {
		$("#send_contact").prop('disabled', false);
		$("#email_error").html("Please Type your Email");
		$("#email").css({
			"border-color": "red"
		});
		return;
	} else {
		$("#email_error").html(" &nbsp;");
		$("#email").css({
			"border-color": "#8888"
		});
	}
	var subject = document.getElementById("subject").value;
	var message = document.getElementById("message").value;
	if (message == "") {
		$("#message").css({
			"border-color": "red"
		});
		$("#click").prop('disabled', false);
		$("#message_error").html("Please Type your Message");
		return;
	} else {
		$("#message_error").html(" &nbsp;");
		$("#message").css({
			"border-color": "#8888"
		});
	}
	message = encodeURIComponent(encodeString(message));
	var data = JSON.stringify({
		"full_name": full_name,
		"message": message,
		"subject": subject,
		"email": email
	});
	var url = "contact?data=" + data;
	process_request_swal_no_response(url);
});