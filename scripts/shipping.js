$(document).on('ready', function() {
	$(".address_section").on("click", function(){
		$(".address_section").removeClass("active");
		$(this).addClass("active");
		$(".address_section").find(".buttons").removeClass("button");
		$(this).find(".buttons").addClass("button");
	});
	$(".address_section .close").on("click", function(){
		event.stopPropagation();
	});


	$(".ioscheckbox input:checkbox").click(function() {
		if ($(this).is(":checked")) {			 
			$(".select_type input:checkbox").prop("checked", false);
			$(this).prop("checked", true);
			$(".descrip").removeClass("active");
			$(this).parents(".checkbox_wrapper").find(".descrip").addClass("active");
		} else {
			$(this).prop("checked", true);
		}
	});
	$(".add_address_btn").on("click", function(){
		$("div#add_new_address").addClass("active");
		$(".popup_overlay").show();
	});
	$("#add_popup_close").on("click", function(){
		$("div#add_new_address").removeClass("active");
		$(".popup_overlay").hide();
	});

	 /*MOBILE CART*/
    if ($(window).width() < 530) {
        
        /*-Estimation Wrapper-*/
        $(".grand_total_wrapper").prepend("<span class='estimation_toggle_btn icon-Pause-01'></span>");
        $(".estimation_wrapper").prepend("<span class='estimation_close_btn icon-Cancel'></span>");
        $(".estimation_toggle_btn").on("click",function(){
            $(this).slideToggle();
            $(".estimation_wrapper").slideToggle();
        });
        $(".estimation_close_btn").on("click",function(){
            $(".estimation_toggle_btn").slideDown();
            $(".estimation_wrapper").slideUp();
        });
        /*-End Estimation Wrapper-*/
    }

});
/*--FIXED BOTTOM SECTION--*/
function checkOffset() {
	if($('.proceed_checkout_wrapper').offset().top + $('.proceed_checkout_wrapper').height() 
		>= $('.webike_footer').offset().top - 10)
		$('.proceed_checkout_wrapper').css('position', 'relative');
	if($(document).scrollTop() + window.innerHeight < $('.webike_footer').offset().top)
		$('.proceed_checkout_wrapper').css('position', 'fixed');  
}
$(document).scroll(function() {
	checkOffset();
});
/*--END FIXED BOTTOM SECTION--*/
