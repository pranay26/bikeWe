var submitLoginForm = false;
var formAction, formValues;
$(document).ready(function(){
    /*--POPUP--*/
    $('.header_profile_menu').click(function(){
        $("div#user_dropdown").toggleClass("active");
        $("#login_popup").removeClass("active");
        $("#register_popup").removeClass("active");
    });
    $("#login_link_button").on("click",function(){
        $("#login_popup").addClass("active");
        $("#user_dropdown").removeClass("active");
    });
    $("#signup_link_button").on("click",function(){
        $("#register_popup").addClass("active");
        $("#user_dropdown").removeClass("active");
    });
    $(".create_account").on("click",function(){
        $("#login_popup").removeClass("active");
        $("#register_popup").addClass("active");
    });
    /*NEW USER CHECK*/
    $(".header_profile_menu").on("click",function(){
        var loginCheck = $("#login_popup").attr("data-login");
        if(loginCheck == "false"){
            $(".after_login").hide();
            $(".before_login").show();
        }
        else {  
            $(".before_login").hide();
            $(".after_login").show();
        }
    });
    /*END NEW USER CHECK*/
    /*--POPUP--*/
    /*--FLOAT LABEL FUNCTION--*/
    $('.form_input_field').each(function() {
        if ($(this).val().length > 0) {
            $(this).addClass('input-valid');
        } else {
            $(this).removeClass('input-valid');
        }
    });
    $('.form_input_field').blur(function() {
        if ($(this).val().length > 0) {
            $(this).addClass('input-valid');
        } else {
            $(this).removeClass('input-valid');
        }
    });
    /*--END FLOAT LABEL FUNCTION--*/
    /*--VALIDATION--*/
    $(document).on( "click", "#signin_button", function() { 
        if($("#login_email").val()=="") {
            $('#email_error').html('Please enter Email ID');
            $("#login_email").focus();
            return false;
        }
        else {
            $('#email_error').html('');
        }
        if($("#login_email").val().indexOf("@") == -1 || $("#login_email").val().indexOf(".") == -1) {
            $('#email_error').html('Please enter valid Email ID');
            $("#login_email").focus();
            return false;
        }
        else {
            $('#email_error').html('');
        } 

        if($("#login_password").val()=="") {
            $('#password_error').html('Please enter Password');
            $("#login_password").focus();
            return false;
        }

        else {
            $('.input_error').html('');
            // $("div.webike_popup").removeClass("active");
            // $("#login_popup").attr("data-login",'true');
            submitLoginForm = true;
            // return false;
        }
        if(submitLoginForm) {
            formAction = $(this).closest('form').attr('action');
            formValues = $(this).closest('form').serializeArray();
            // formValues = JSON.stringify(formValues);
            login();
        }
    });
    $(document).on( "click", "#signup_button", function() { 
        if($("#register_email").val()=="") {
            $('#register_email_error').html('Please enter Email ID');
            $("#register_email").focus();
            return false;
        }
        else {
            $('#register_email_error').html('');
        }
        if($("#register_email").val().indexOf("@") == -1 || $("#register_email").val().indexOf(".") == -1) {
            $('#register_email_error').html('Please enter valid Email ID');
            $("#register_email").focus();
            return false;
        }
        else {
            $('#register_email_error').html('');
        } 

        if($("#register_password").val()=="") {
            $('#register_password_error').html('Please enter Password');
            $("#register_password").focus();
            return false;
        }
        else {
            $('#register_password_error').html('');
        }

        if($("#register_confirm_password").val()=="") {
            $('#confirm_password_error').html('Please enter Confirm Password');
            $("#register_confirm_password").focus();
            return false;
        }
        else {
            $('#confirm_password_error').html('');
        }
        var password = $("#register_password").val();
        var confirmPassword = $("#register_confirm_password").val();
        if (password != confirmPassword) {
            $('#register_password_error').html('Password does not match the confirm password');
            $("#register_confirm_password").focus();
            return false;
        }
        else {
            $('#register_password_error').html('');
        }

        if($("#register_mobile_number").val()=="") {
            $('#mobile_number_error').html('Please enter Mobile Number');
            $("#register_mobile_number").focus();
            return false;
        }
        else {
            $('#mobile_number_error').html('');
        }
        if($("#register_mobile_number").val().length < 10){
            $('#mobile_number_error').html('Please enter Valid Mobile Number');
            $("#register_mobile_number").focus();
            return false;
        }
        else {
            $('#mobile_number_error').html('');
            $('.input_error').html('');
            // $("div.webike_popup").removeClass("active");
            // return true;
            submitSignupForm = true;

        }
        if(submitSignupForm) {
            formAction = '';
            formValues = [];
            formAction = $(this).closest('form').attr('action');
            formValues = $(this).closest('form').serializeArray();
            // formValues = JSON.stringify(formValues);
            console.log(formValues);
            register();
        }
    });
    $("#register_mobile_number").on("keypress keyup blur",function (event) {  
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });
/*--END VALIDATION--*/
});

function login() {
    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    });
    //
    $('#email_error').html('');
    $('#password_error').html('');
    //
    $.ajax({
       type:'POST',
       url:'/login-user',
       data : formValues,
       success:function(data){

            if(data=='email') {
                $('#email_error').html("Email address not found!");
                $("#login_email").focus();
            }
            if(data=='password') {
                $('#password_error').html("Incorrect password");
                $("#login_password").focus();
            }
            if(data!='email' && data!='password') {
                $("div.webike_popup").removeClass("active");
                $("#login_popup").attr("data-login",'true');
                location.reload();
            }
            // console.log(data);
       },
       error: function(xhr, status, error) {
          var responseText = xhr.responseText;
       }
    });
}

function register() {
    $('#register_email_error').html('The email has already been taken.');
    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    });
}