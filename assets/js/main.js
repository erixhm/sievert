jQuery(function (e) {
	"use strict";
	e("#mainnav").slicknav({
		closeOnClick: !0,
		allowParentLinks: !0,
		prependTo: "#header",
		closedSymbol: '<i class="fa fa-plus"></i>',
		openedSymbol: '<i class="fa fa-minus"></i>'
	}), e(".navbar-toggler").on("click", function () {
		e(this).toggleClass("in"), e(".slicknav_menu").toggleClass("show")
	}), e(".slicknav_nav").removeClass("slicknav_hidden").change(['aria-hidden="false"']).show(), e(".slicknav_btn").remove(), e("#sidemenu_toggle").on("click", function () {
		e(".side-menu").addClass("side-menu-active"), e("#close_side_menu").fadeIn(700)
	}), e("#close_side_menu").on("click", function () {
		e(".side-menu").removeClass("side-menu-active"), e(this).fadeOut(400)
	}), e("#btn_sideNavClose").on("click", function () {
		e(".side-menu").removeClass("side-menu-active"), e("#close_side_menu").fadeOut(300)
	}), e("body").scrollspy({
		offset: 65
	}), e(window).on("load", function () {
		e("#pageLoad").fadeOut("fast"), e("a.nav-link[href*=#]:not([href=#]), a.scroll-indicator[href*=#]:not([href=#]), #view-more[href*=#]:not([href=#]), .logo[href*=#]:not([href=#]), #scroll_to_id[href*=#]:not([href=#])").on("click", function () {
			if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
				var i = e(this.hash);
				if (i = i.length ? i : e("[name=" + this.hash.slice(1) + "]"), e(window).width() >= 992) {
					if (i.length) return e("html, body").animate({
						scrollTop: i.offset().top - 65 + "px"
					}, 1e3, "easeInOutExpo"), !1
				} else if (i.length) return e("html, body").animate({
					scrollTop: i.offset().top
				}, 1e3, "easeInOutExpo"), !1
			}
		})
	}), e(window).on("scroll", function () {
		e(document).scrollTop() < e("#header").height() ? (e("#header").removeClass("fixed-position"), e("#header.header-bg-light").removeClass("bg-light"), e("#header.header-bg-light .navbar").addClass("navbar-dark").removeClass("navbar-light"), e("#header.header-bg-light navbar").removeClass("navbar-dark"), e("#header.header-bg-dark").removeClass("bg-dark")) : (e("#header").addClass("fixed-position"), e("#header.header-bg-light").addClass("bg-light"), e("#header.header-bg-light .navbar").removeClass("navbar-dark").addClass("navbar-light"), e("#header.header-bg-dark").addClass("bg-dark")), e(".slicknav_menu").removeClass("show")
	}), e(window).on("load resize orientationchange", function () {
		setTimeout(function () {
			e(window).trigger("fontresize"), e(".bg-stretch").each(function () {
				var a = e(this),
					t = a.find("img");
				i.resizeImage(t, a)
			})
		}, 200);
		var i = {
			getDimensions: function (e) {
				var i = e.imageRatio || e.imageWidth / e.imageHeight,
					a = e.maskWidth,
					t = a / i;
				return t < e.maskHeight && (a = (t = e.maskHeight) * i), {
					width: a,
					height: t,
					top: (e.maskHeight - t) / 2,
					left: (e.maskWidth - a) / 2
				}
			},
			getRatio: function (e) {
				if (e.prop("naturalWidth")) return e.prop("naturalWidth") / e.prop("naturalHeight");
				var i = new Image;
				return i.src = e.prop("src"), i.width / i.height
			},
			imageLoaded: function (e, i) {
				var a = this,
					t = function () {
						i.call(a)
					};
				e.prop("complete") ? t() : e.one("load", t)
			},
			resizeHandler: function () {
				var i = this;
				e.each(this.imgList, function (e, a) {
					a.image.prop("complete") && i.resizeImage(a.image, a.container)
				})
			},
			resizeImage: function (e, i) {
				this.imageLoaded(e, function () {
					var a = this.getDimensions({
						imageRatio: this.getRatio(e),
						maskWidth: i.width(),
						maskHeight: i.height()
					});
					e.css({
						width: a.width,
						height: a.height,
						marginTop: a.top,
						marginLeft: a.left
					})
				})
			},
			add: function (i) {
				var a = e(i.container ? i.container : window),
					t = "string" == typeof i.image ? a.find(i.image) : e(i.image);
				this.resizeImage(t, a), this.win || (this.resizeHandler = e.proxy(this.resizeHandler, this), this.imgList = [], this.win = e(window), this.win.on("resize orientationchange", this.resizeHandler)), this.imgList.push({
					container: a,
					image: t
				})
			}
		}
	}), /*e("#contactUs input,#contactUs textarea").jqBootstrapValidation({
		preventSubmit: !0,
		submitError: function (e, i, a) {},
		submitSuccess: function (i, a) {
			a.preventDefault();
			var t = e("input#name").val(),
				n = e("input#email").val(),
				s = e("input#phone").val(),
				o = e("textarea#message").val(),
				r = t;
			r.indexOf(" ") >= 0 && (r = t.split(" ").slice(0, -1).join(" ")), e.ajax({
				url: "././php/contact_me.php",
				type: "POST",
				data: {
					name: t,
					phone: s,
					email: n,
					message: o
				},
				cache: !1,
				success: function () {
					e("#success").html("<div class='alert alert-success'>"), e("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"), e("#success > .alert-success").append("<strong> your message has been sent successfully. </strong>"), e("#success > .alert-success").append("</div>"), e("#contactForm").trigger("reset")
				},
				error: function () {
					e("#success").html("<div class='alert alert-danger'>"), e("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"), e("#success > .alert-danger").append("<strong>Sorry " + r + ", it seems that my mail server is not responding. Please try again later!"), e("#success > .alert-danger").append("</div>"), e("#contactForm").trigger("reset")
				}
			})
		},
		filter: function () {
			return e(this).is(":visible")
		}
	}),*/ e('a[data-toggle="tab"]').on("click", function (i) {
		i.preventDefault(), e(this).tab("show")
	}), e("#name").on("focus", function () {
		e("#success").html("")
	}), e("body").addClass("js-ready");
	var i = e("body").hasClass("js-ready");
	e(".same-height").each(function () {
		e(".height").matchHeight({
			byRow: i
		})
	}), (new WOW).init(), e(".flexslider").flexslider({
		animation: "fade",
		prevText: "",
		nextText: "",
		controlNav: !0,
		directionNav: !1,
		slideshowSpeed: 3e4,
		animationSpeed: 2500,
		start: function (i) {
			e("body").removeClass("loading")
		}
	});
	var a = e(".client-list");
	a.owlCarousel({
		items: 5,
		itemsDesktop: [1199, 4],
		itemsDesktopSmall: [979, 3],
		itemsTablet: [768, 2],
		itemsTabletSmall: !0,
		itemsMobile: [479, 1],
		navigation: !1,
		pagination: !1,
		autoPlay: !0
	}), (a = e(".team-list")).owlCarousel({
		items: 3,
		itemsDesktop: [1199, 3],
		itemsDesktopSmall: [979, 3],
		itemsTablet: [768, 2],
		itemsTabletSmall: !0,
		itemsMobile: [479, 1],
		navigation: !1,
		pagination: !0,
		navigationText: ["<i class='glyphicon glyphicon-menu-left'></i>", "<i class='glyphicon glyphicon-menu-right'></i>"]
	}), (a = e("#review-list")).owlCarousel({
		items: 1,
		navigationText: ["", ""],
		navigation: !0,
		singleItem: !0
	}), e(".counter").counterUp({
		delay: 10,
		time: 2e3
	});
	var t = e(".grid").masonry({
		itemSelector: ".grid-item",
		percentPosition: !0
	});
	t.imagesLoaded().progress(function () {
		t.masonry()
	}), e(function () {
		e(".inner-wrapper").slimScroll({
			height: "100%",
			allowPageScroll: !0,
			opacity: 0
		})
	}), e(".lightbox").magnificPopup({
		delegate: "a",
		type: "image",
		closeOnContentClick: !1,
		closeBtnInside: !1,
		mainClass: "mfp-with-zoom mfp-img-mobile",
		image: {
			verticalFit: !0,
			titleSrc: function (e) {
				return e.el.attr("data-title") + '&middot; <a class="image-source-link" href="' + e.el.attr("data-source") + '" target="_blank"></a>'
			}
		},
		gallery: {
			enabled: !0
		},
		zoom: {
			enabled: !0,
			duration: 300,
			opener: function (e) {
				return e.find("img")
			}
		}
	}),
	//var singlePage = $('#js-singlePage-container').children('div'),
	e('#js-grid-slider-projects').cubeportfolio({
	layoutMode: 'grid',
	drag: true,
	auto: false,
	autoTimeout: 5000,
	autoPauseOnHover: true,
	showNavigation: true,
	showPagination: false,
	rewindNav: false,
	scrollByPage: false,
	caption: 'zoom',
	gridAdjustment: 'responsive',
	mediaQueries: [{
		width: 1500,
		cols: 4
	}, {
		width: 1100,
		cols: 4
	}, {
		width: 800,
		cols: 3
	}, {
		width: 480,
		cols: 1,
		options: {
			gapVertical: 10
		}
	}],
	gapHorizontal: 20,
	gapVertical: 20,

	displayType: 'fadeIn',
	displayTypeSpeed: 100,

	// lightbox
	lightboxDelegate: '.cbp-lightbox',
	lightboxGallery: true,
	lightboxTitleSrc: 'data-title',
	lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

	// singlePage popup
	/*singlePageDelegate: '.cbp-singlePage',
	singlePageDeeplinking: true,
	singlePageStickyNavigation: true,
	singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
	singlePageAnimation: 'fade',
	singlePageCallback: function(url, element) {
		// to update singlePage content use the following method: this.updateSinglePage(yourContent)
		var indexElement = $(element).parents('.cbp-item').index(),
		item = singlePage.eq(indexElement);

		item.find('img').each(function(index, el) {
			var attr = el.getAttribute('data-cbp-src');

			if (attr) {
				el.setAttribute('src', attr);
				el.removeAttribute('data-cbp-src');
			}
		});

		this.updateSinglePage(item.html());
	},*/
}),

	/* e("#video_popup").magnificPopup({
		type: "iframe",
		iframe: {
			markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title">Some caption</div></div>'
		},
		callbacks: {
			markupParse: function (e, i, a) {
				i.title = a.el.attr("title")
			}
		}
	}),*/ e(".sorting-nav ul li").on("click", function () {
		e(".sorting-nav ul li").removeClass("active"), e(this).addClass("active")
	}), e(".filtr-container") && e(".filtr-container").length && e(".filtr-container").imagesLoaded(function () {
		e(".filtr-container").filterizr({
			layout: "sameSize"
		})
	}), e(".filtr-container.packed") && e(".filtr-container.packed").length && e(".filtr-container").imagesLoaded(function () {
		e(".filtr-container.packed").filterizr({
			layout: "packed"
		})
	})
}, "jQuery");