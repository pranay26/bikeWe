$(document).on('ready', function() {

	$(".segment-teaser__button").addClass("icon-Next");
	
	$(".model_slider").slick({
		dots: true,
		infinite: true,
		slidesToShow: 3,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToScroll: 3,
		responsive: [ 
		{
			breakpoint: 720,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},		 
		{
			breakpoint: 420,
			settings: { 
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	}); 


	

	$(".rank_slider").slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		vertical: true,
		slidesToScroll: 1
	});

	$(".blog_news_slider").slick({
		dots: false,
		infinite: true,
		slidesToShow: 3,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToScroll: 3,
		responsive: [		
		{
			breakpoint: 720,
			settings: {

				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 420,
			settings: { 
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	}); 
	/*--TOP BANNER SLIDER--*/
	$(".regular").slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 5000, 
		slidesToScroll: 1
	});

	/*--SHOP BY CATEGORIES SLIDER FOR MOBILE--*/
	if ($(window).width() < 800) {

		$(".categories_images").slick({
			dots: true,
			infinite: true,
			slidesToShow: 2,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 5000,
			slidesToScroll: 2,
			responsive: [ 
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},		 
			{
				breakpoint: 450,
				settings: { 
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			]
		}); 
	}



	/*$('.recent_slider').slick({
		centerMode: true,
		dots: true,
		infinite: true,
		slidesToShow: 3,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToScroll: 5,
		centerPadding: '200px',
		responsive: [
		{
			breakpoint: 1000,
			settings: {
				centerPadding: '150px',
				slidesToShow: 2
			}
		},
		{
			breakpoint: 780,
			settings: {
				centerPadding: '230px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 720,
			settings: {
				centerPadding: '190px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 600,
			settings: { 
				centerPadding: '150px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 500,
			settings: { 
				centerPadding: '100px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 420,
			settings: { 
				centerMode: false,
				centerPadding: '30px',
				slidesToShow: 1
			}
		}
		] 
	});
	*/

	var progressBarOptions = {
		startAngle: -1.55,
		size: 25,		 
		fill: {
			color: '#ccc'
		}
	}

	$('.circle-c').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {});
	$( ".circle-c" ).each(function() {
		var val = $(this).find("input").val()/5; 	

		$(this).circleProgress({
			value : val,
			fill: {
				gradient: ["#ED1C24", "#E95B0B"]
			}
		});
	});


	/*--END SHOP BY CATEGORIES SLIDER FOR MOBILE--*/
	
	if ($(window).width() < 900) {
		$(".grid__item").appendTo(".top_offers_slider main");
	}

	/*--TOP BANNER SLIDER NEXT AND PREV IMAGE--*/

	$(".regular").append("<div class='nav_img left_img'><img  id='nav_left_img'/></div><div class='nav_img right_img'><img id='nav_right_img'/></div>");

	$(".slider-card").removeClass("nextSlider");
	$(".slider-card").removeClass("prevSlider");
	$(".slick-active").next().addClass("nextSlider");
	$(".slick-active").prev().addClass("prevSlider");
	var nextImageSrc = $(".nextSlider .slider-img img").attr("src");
	var prevImageSrc = $(".prevSlider .slider-img img").attr("src");
	$('.nav_img.left_img img').attr('src',nextImageSrc);
	$('.nav_img.right_img img').attr('src',prevImageSrc);
	
	$( ".banner_slider .slick-arrow" ).on("click",function(){		
		$(".slider-card").removeClass("nextSlider");
		$(".slider-card").removeClass("prevSlider");
		$(".slick-active").next().addClass("nextSlider");
		$(".slick-active").prev().addClass("prevSlider");
		var nextImageSrc = $(".nextSlider .slider-img img").attr("src");
		var prevImageSrc = $(".prevSlider .slider-img img").attr("src");
		$('.nav_img.left_img img').attr('src',nextImageSrc);
		$('.nav_img.right_img img').attr('src',prevImageSrc);
	});
	
	$(".nav_img.right_img").on("click",function(){
		$(".banner_slider button.slick-prev.slick-arrow").click();
	});
	$( ".nav_img.left_img").on("click",function(){
		$(".banner_slider button.slick-next.slick-arrow").click();
	});

	/*--END TOP BANNER SLIDER NEXT AND PREV IMAGE--*/


	
	$("#slider_brands").hide();
	$("#slider_offers").hide();
	$("#recomended_products").hide();

	$("ul.brands .brand_list").on("click",function(){
		$("ul.brands .brand_list").removeClass("active");
		$(this).addClass("active");
	});

	$("#option_model").on("click",function(){
		$("#slider_brands").hide();
		$("#slider_offers").hide();
		$("#slider_model").css("display","block");
		$(".model_slider button.slick-prev.slick-arrow").click();
	});

	$("#option_brand").on("click",function(){
		$("#slider_brands").css("display","block");
		$("#slider_offers").hide();
		$("#slider_model").hide();
		$(".model_slider button.slick-prev.slick-arrow").click();
	});

	$("#option_offers").on("click",function(){
		$("#slider_brands").hide();
		$("#slider_offers").css("display","block");
		$("#slider_model").hide();
		$(".model_slider button.slick-prev.slick-arrow").click();
	});

	$("ul.brands .recent_views").on("click",function(){

		$("ul.brands .recent_views").removeClass("active");
		$(this).addClass("active");
	});
	sliderfunction();
	$("#option_recent").on("click",function(){		  
		sliderfunction();
		$("#recomended_products").hide();	
		$("#recent_products").fadeIn();
		$(".recent_slider button.slick-prev.slick-arrow").click();
	});

	$("#option_recomended").on("click",function(){		 
		sliderfunction();
		$("#recent_products").hide();
		$("#recomended_products").fadeIn();		 
		$(".recent_slider button.slick-prev.slick-arrow").click();
	});
	var h = $(".grid").height();
	$(".grid-pages").height(h);
	$(".bike_image img").css("width","100%");

	/*$(".brand_sliders .slide_cart" ).mouseover(function() {
		$(this).animate({ 'padding-bottom' : '0px' });
		$(this).find( ".buy_now" ).slideDown();
		$(this).find(".cart_section").css("box-shadow","rgba(0, 0, 0, 0.1) 0px 2px 15px 2px");
	});


	$(".brand_sliders .slide_cart" ).mouseleave(function() {
		$(this).find( ".buy_now" ).slideUp();
		$(this).find(".cart_section").css("box-shadow","none");
		$(this).animate({ 'padding-bottom' : '50px' });
	});

	var heig = $(".cart_section").height();
	$(".recent_slider .buy_now").css("top",heig);*/
	
	$("#dropdown_cc").on("click",function(){
		$(".model_select").slideUp();
		$(".brand_select").slideUp();
	});
	$(".webike_wrapper").on("click",".dropdown_search.active_border",function(){
		$(this).parents(".prod_dropdown").find(".list_dropdown").slideToggle();
	});
	$("#prod-dropdown1 .drop_list").on("click",function(){
		$(this).parents(".prod_dropdown").find(".drop_list").removeClass("active");
		$(this).addClass("active");
		$("#prod-dropdown2 #dropdown-brand").addClass("active_border");
		$(".cc_select").slideUp();
	});
	$("#prod-dropdown2 .drop_list").on("click",function(){
		$(this).parents(".prod_dropdown").find(".drop_list").removeClass("active");
		$(this).addClass("active");
		$("#prod-dropdown3 #dropdown-model").addClass("active_border");
		$(".brand_select").slideUp();
	});
	$("#prod-dropdown3 .drop_list").on("click",function(){
		$(this).parents(".prod_dropdown").find(".drop_list").removeClass("active");
		$(this).addClass("active");
		/*$("#prod-dropdown3 #dropdown-model").addClass("active_border");*/
		$(".model_select").slideUp();
	});
});


(function() {
	var render = function(gridItems, action) {
		for(var i = 0, len = gridItems.length; i < len; ++i) {
			var item = gridItems[i],
			captionEl = item.el.querySelector('.caption');

			if( captionEl ) {
				if( action === 'uncover' ) {
					captionEl.style.opacity = 0;
					captionEl.style.transform = captionEl.style.WebkitTransform = 'translateY(50px)';
				}
				anime({
					targets: captionEl,
					opacity : action === 'uncover' ? 1 : 0,
					translateY : action === 'uncover' ? 0 : 50,
					duration : 500,
					easing : 'easeInOutQuad'
				});
			}

			if( action === 'uncover' ) {
				item.el.style.transform = item.el.style.WebkitTransform = 'translateY(50px)';
			}

			anime({
				targets: item.el,
				translateY : action === 'uncover' ? 0 : 50,
				duration : 600,
				delay : item.delay,
				easing : 'easeInOutQuad'
			});
		};
	}
	new GridSlideshow(document.querySelector('.grid-pages'), {
		onCover : function(direction, gridEl, gridItems) {
			render(gridItems, 'cover');
		},
		onUncover : function(direction, gridEl, gridItems) {
			render(gridItems, 'uncover');
		}
	});
})();



function sliderfunction(){
	$('.recent_slider').slick({
		centerMode: true,
		dots: true,
		infinite: true,
		slidesToShow: 3,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToScroll: 5,
		centerPadding: '200px',
		responsive: [
		{
			breakpoint: 1000,
			settings: {
				centerPadding: '150px',
				slidesToShow: 2
			}
		},
		{
			breakpoint: 780,
			settings: {
				centerPadding: '230px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 720,
			settings: {
				centerPadding: '190px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 600,
			settings: { 
				centerPadding: '150px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 500,
			settings: { 
				centerPadding: '100px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 420,
			settings: { 
				centerMode: false,
				centerPadding: '30px',
				slidesToShow: 1
			}
		}
		] 
	});

}