
$(document).on('ready', function() {


	/*--TOP BANNER SLIDER--*/
	

	var $status = $('#pagingInfo');
	var $slickElement = $('.regular');
	var val;

	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html("<span class='count'>" + i +"</span>" + '/'+"<span class='total'>" + slick.slideCount +"</span>");
    });

	$(".regular").slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 50000, 
		slidesToScroll: 1,

	});

	/*--TOP BANNER SLIDER NEXT AND PREV IMAGE--*/

	$(".regular").append("<div class='nav_img left_img'><img src='images/Rectangle 83.png' id='nav_left_img'/></div><div class='nav_img right_img'><img id='nav_right_img' src='images/Rectangle 83.png'/></div>");

	var nextImageSrc = $(".nextSlider .slider-img img").attr("src");
	var prevImageSrc = $(".prevSlider .slider-img img").attr("src");

	
	$( ".banner_slider .slick-next" ).on("click",function(){
		
		$(".slider-card").removeClass("nextSlider");
		$(".slider-card").removeClass("prevSlider");
		$(".slick-active").next().addClass("nextSlider");
		$(".slick-active").prev().addClass("prevSlider");
		var nextImageSrc = $(".nextSlider .slider-img img").attr("src");
		var prevImageSrc = $(".prevSlider .slider-img img").attr("src");
		$('.nav_img.left_img img').attr('src',prevImageSrc);
		$('.nav_img.right_img img').attr('src',nextImageSrc);
	});
	$(".nav_img.right_img").on("click",function(){
		$(".banner_slider button.slick-prev.slick-arrow").click();
	});
	$( ".nav_img.left_img").on("click",function(){
		$(".banner_slider button.slick-next.slick-arrow").click();
	});

	/*--END TOP BANNER SLIDER NEXT AND PREV IMAGE--*/


	/*-----TOP NEWS Slider------*/

	$(".model_slider").slick({
		dots: true,
		infinite: true,
		slidesToShow: 3,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToScroll: 3,
		responsive: [ 
		{
			breakpoint: 750,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},		 
		{
			breakpoint: 520,
			settings: { 
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	}); 

	/*-------End TOP NEWS slider-------*/

	/*----------Event Slider----------*/
	$(".event_slider").slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToScroll: 1	 
	}); 
	$(".event_slider button.slick-next.slick-arrow").append("<span class='icon-Next'></span");
	$(".event_slider button.slick-prev.slick-arrow").append("<span class='icon-Previous'></span");


	/*----------End Event Slider----------*/



	/*--------Newsletter Section---------*/

	$("ul.accessories_header li").on("click",function(){
		$("ul.accessories_header li").removeClass("active");
		$(this).addClass("active");
	});
	$("li#motorcycle_review").on("click",function(){
		$("li.moto_list").hide();
		$("li#moto_review").show();
	});

	$("li#motorcycle_issues").on("click",function(){
		$("li.moto_list").hide();
		$("li#moto_issues").show();
	});

	$("li#motorcycle_using").on("click",function(){
		$("li.moto_list").hide();
		$("li#moto_using").show();
	});

	/*--------End Newsletter Section---------*/
	/*-------Video section-------*/
	
    //next click function
    $('#next').click(function(){
    	if ($('.active').next('.video_img').length) {
    		$('.active').removeClass('active')
    		.next('.video_img')
    		.addClass('active').find(".play_img").click();
    	}

    });


    //prev click function
    $('#prev').click(function(){
    	if ($('.active').prev('.video_img').length) {
    		$('.active').removeClass('active')
    		.prev('.video_img')
    		.addClass('active').find(".play_img").click();
    	}
    });

    //video change on menu click 
    $(".info-one p").click(function(){
    	var videoId = $(this).attr("data-class");
    	$(".videos").css("display" , "none");
    	$("#play_"+videoId).css("display" , "block");
    });

    //video play icon click funtion
    $('.play_img').click(function(event) {
    	$('.video_img').removeClass('active');
    	$(this).parents(".video_img").addClass('active');
    	var videoSrc = $(this).attr("data-src");
    	$(".video_play").slideDown();
    	$("source").attr('src','videos/'+videoSrc+'.mp4');
    	$("video")[0].load();
    });

    //close the video
    $("#close_video").click(function(){
    	$(".video_play").fadeOut(500);

    });
    $(".loading").remove();

    $('.close_video_meu').click(function(){
    	$(".video-info").fadeOut(500);
    });

    $('.mobile_video_menu').click(function(){
    	$(".video-info").fadeIn(500);
    });


});
