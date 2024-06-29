/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    var toastTemplateForCaptcha = '<span id="message_disabled_key" style="position:absolute; bottom: 45px; left: 50%;"><div class="inner-span" style="position:relative;left:-50%; padding:5px 10px; background-color:rgba(0,0,0,0.8); border-radius:5px; /*letter-spacing:0.05em*/; color:white;">Cut Copy or Paste action is not allowed !</div></span>';
    $("#captcha, #otp").bind('cut copy paste drop', function (e) {
        e.preventDefault();
        _showToast();
    });

    _showToast = function () {
        $("#message_disabled_key").remove();
        $("body").append(toastTemplateForCaptcha);
        var animationDuration = 500;
        setTimeout(function () {
            $("#message_disabled_key").fadeOut(animationDuration);
            setTimeout(function () {
                $("#message_disabled_key").remove();
            }, animationDuration);
        }, animationDuration);
    };

    $("body").on("click", "i.fa-captcha-refresh", function (control) {
        var reloadUrl = $("#captchaDiv").attr("data-url");
        $.ajax({
            type: 'GET',
            url: reloadUrl,
            success: function (data) {
                $("#captchaDiv").html(data);
            }
        });
    });


    $("form").submit(function () {
        loginOtpBlockUI();

        var otpErr = "";
        var captchaErr = "";
        otpErr = validateOtp();
        captchaErr = validateCaptha();
        
        if (otpErr !== "" || captchaErr !== "") {
            $.unblockUI();
            return false;
        } else {
            return true;
        }

    });

});

function validateOtp() {
    var a = "";
    a = validate_required(document.getElementById("otp"), "Enter 6 digit OTP.", "pin", "Enter valid 6 digit OTP.\n");
    setAndRemoveErrorMsg($("#otp"), a);
    return a;
}

function validateCaptha() {
    var msgcaptcha = "";
    msgcaptcha = validate_required(document.getElementById('captcha'), 'Enter captcha.', 'captcha', 'Captcha shall contain alpha-numeric values only.');
    setAndRemoveErrorMsg($("#captcha"), msgcaptcha);
    return msgcaptcha;
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function loginOtpBlockUI()
{

    $.blockUI({css: {
            border: 'none',
            padding: '2px',
            backgroundColor: '#000',
            '-webkit-border-radius': '5px',
            '-moz-border-radius': '5px',
            opacity: .5,
            color: '#fff'
        },
        message: "<span><i class='fa fa-cog fa-3x fa-spin'></i><h5>Loading...</h5></span>"});
}
