$(document).ready(function(){
	$(".subscribe_submit_button").on("click",function(){
		if($(".subscribe_input").val()=="") {
			$('.subscribe_input_error').html('Please enter Email ID');
			$(".subscribe_input").focus();
			return false;
		}
		else {
			$('.subscribe_input_error').html('');
		}
		if($(".subscribe_input").val().indexOf("@") == -1 || $(".subscribe_input").val().indexOf(".") == -1) {
			$('.subscribe_input_error').html('Please enter valid Email ID');
			$(".subscribe_input").focus();
			return false;
		}
		else {
			$('.subscribe_input_error').html('');
		} 
	});
});