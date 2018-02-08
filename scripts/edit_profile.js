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
	$("#add_address_btn").on("click", function(){
		$("div#add_new_address").addClass("active");
		$(".popup_overlay").show();
	});
	$("#add_popup_close").on("click", function(){
		$("div#add_new_address").removeClass("active");
		$(".popup_overlay").hide();
	});
});