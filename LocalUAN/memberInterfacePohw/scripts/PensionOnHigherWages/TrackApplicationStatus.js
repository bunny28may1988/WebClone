

$(function () {

    if ($("#finalStatus").text() === "APPROVED BY FIELD OFFICE") {
        $("#finalStatus").addClass("greenClass");
    } else {
        $("#finalStatus").addClass("redClass");
    }
    var trackStatusTemp = $('#trackStatus').val();
    if (trackStatusTemp !== undefined && trackStatusTemp !== '') {
        if (trackStatusTemp === 'A') {
            $("#ppoNumber").attr("disabled", true);
            $("#uan").attr("disabled", true);
        } else if (trackStatusTemp === 'U') {
            $("#ppoNumber").attr("disabled", true);
            $("#acknowledgementNumber").attr("disabled", true);
        } else if (trackStatusTemp === 'P') {
            $("#acknowledgementNumber").attr("disabled", true);
            $("#uan").attr("disabled", true);
        }
    } else if (($("#ackRadio").is(':checked'))) {
        $("#ppoNumber").attr("disabled", true);
        $("#uan").attr("disabled", true);
    } else if (($("#uanRadio").is(':checked'))) {
        $("#ppoNumber").attr("disabled", true);
        $("#acknowledgementNumber").attr("disabled", true);
    } else if (($("#ppoRadio").is(':checked'))) {
        $("#uan").attr("disabled", true);
        $("#acknowledgementNumber").attr("disabled", true);
    } else {
//        if (!$("#ackRadio").is(':checked') && !$("#uanRadio").is(':checked') && !$("#ppoRadio").is(':checked')) {
        $("#ppoNumber").attr("disabled", true);
        $("#uan").attr("disabled", true);
        $("#acknowledgementNumber").attr("disabled", true);
    }



    $('#ackRadio').click(function () {
        $('#ppoNumber').val('');
        $("#ppoNumber").parent().find("P").remove();
        $("#ppoNumber").attr("disabled", true);
        $('#uan').val('');
        $("#uan").parent().find("P").remove();
        $("#uan").attr("disabled", true);
        $("#acknowledgementNumber").attr("disabled", false);
    });
    $('#uanRadio').click(function () {
        $('#ppoNumber').val('');
        $("#ppoNumber").parent().find("P").remove();
        $("#ppoNumber").attr("disabled", true);
        $('#acknowledgementNumber').val('');
        $("#acknowledgementNumber").parent().find("P").remove();
        $("#acknowledgementNumber").attr("disabled", true);
        $("#uan").attr("disabled", false);
    });

    $('#ppoRadio').click(function () {
        $('#uan').val('');
        $("#uan").parent().find("P").remove();
        $("#uan").attr("disabled", true);
        $('#acknowledgementNumber').val('');
        $("#acknowledgementNumber").parent().find("P").remove();
        $("#acknowledgementNumber").attr("disabled", true);
        $("#ppoNumber").attr("disabled", false);
    });
    if ($('#isOtpFlag').attr('isOtp') === 'y') {
        $('#validateOtpDetails').on('click', function (event) {
            var check = validateOtp();
            if (check) {
                $.blockUI();
                return true;
            } else {
                $.unblockUI();
                return false;
            }
        });
        $('#otp').on('blur', validateOtp);
    }

    $('#validateFormCheck').on('click', function (event) {
        return validateDetails();
//        var check = validateDetails();
//        if (check) {
//            $.blockUI();
//            //to do encryption
//            var aadhaar = $('#aadhaarvid').val();
//            var aadhaarMobile = $('#aadhaarLinkedMobile').val();
//
//            try {
//                let encryptedBase64Key = $('#pohwChallenge').html();
//                let parsedBase64Key = CryptoJS.enc.Base64.parse(encryptedBase64Key);
//                let encAadhaarvid = CryptoJS.AES.encrypt($('#aadhaarvid').val(), parsedBase64Key, {
//                    mode: CryptoJS.mode.ECB,
//                    padding: CryptoJS.pad.Pkcs7
//                });
//                let encAadhaarLinkedMobile = CryptoJS.AES.encrypt($('#aadhaarLinkedMobile').val(), parsedBase64Key, {
//                    mode: CryptoJS.mode.ECB,
//                    padding: CryptoJS.pad.Pkcs7
//                });
//                $('#aadhaarvid').val(encAadhaarvid);
//                $('#aadhaarLinkedMobile').val(encAadhaarLinkedMobile);
//                $('#aadhaarvid').attr('type', 'password');
//                $('#aadhaarLinkedMobile').attr('type', 'password');
//            } catch (e) {
//                $('#aadhaarvid').val(aadhaar);
//                $('#aadhaarLinkedMobile').val(aadhaarMobile);
//                $.unblockUI();
//                alert("ERR:ENC_DEC_00 Form Parameters Tampered. Try after sometime." + e);
//                return false;
//            }
//            return true;
//        } else {
//            $.unblockUI();
//            return false;
//        }
    });

    $('.numberOnly').on('keypress', function (event) {
        return isNumber(event);
    });

    $('#acknowledgementNumber').on('blur', validateAcknowledgementNumber);
    $('#uan').on('blur', validateUAN);
    $('#ppoNumber').on('blur', validatePpoNumber);

//    $('#memberId').on('blur', validateMemberId);
//    $('#name').on('blur', validateMemberName);
//    $('#dateOfBirth').on('blur', validateDob);
//    $('#dateOfBirth').on('change', validateDob);
//    $('#aadhaarvid').on('blur', validateAadhaarVid);
//    $('#aadhaarLinkedMobile').on('blur', validateMobileNo);
    $('#captcha').on('blur', validateCaptcha2);

    $('#uan #ppoNumber #acknowledgementNumber #captcha').bind('copy paste cut drop', function (e) {
        e.preventDefault();
    });

//    $("#dateOfBirth").datepicker({
//        onSelect: function () {
//            this.focus();
//            this.blur();
//        },
//        changeMonth: true,
//        changeYear: true,
//        dateFormat: "dd/mm/yy",
//        yearRange: "-100:",
//        defaultDate: "-12y-m-d",
//        maxDate: 0
//    });

    $("body").on("click", "i.fa-captcha-refresh", function (control) {
        var reloadUrl = $("#captchaDiv").attr("data-url");

        $.ajax({
            type: 'GET',
            url: reloadUrl,
            success: function (data) {
                $("#captchaDiv").html(data);
                $("#captcha").val("");
            }

        });
    });

});


function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function setFieldNextErrMessage(elem, msg) {
    elem.after("<span class='validation' style='color:red;margin-bottom: 20px;'>" + msg + "</span>");
}

function removeFieldNextErrMessage(elem) {
    elem.next(".validation").remove();
}
function validateUAN() {
    var a = validate_required(document.getElementById("uan"), "Enter UAN.", "d", "Enter 12-digit number only!\n");
    if (a !== "") {
        setAndRemoveErrorMsg($("#uan"), a);
        return false;
    }
    return true;
}


//function validateAadhaarVid() {
//    var msg = validate_required(document.getElementById('aadhaarvid'), 'Enter Aadhaar number', 'aadhaar', 'Enter a valid Aadhaar');
//    if (msg !== "") {
//        setAndRemoveErrorMsg($("#aadhaarvid"), msg);
//        return false;
//    }
//    return true;
//}
function openFile(urlName) {
    var myWindow = window.open(urlName, "_blank", "width=1000, height=1000");
}

if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

//function validateDob() {
//    var msg = validate_required(document.getElementById("dateOfBirth"), "Enter Date of birth.", "t", "Date of birth should have dd/mm/yyyy format.\n");
//    if (msg !== "") {
//        setAndRemoveErrorMsg($("#dateOfBirth"), msg);
//        return false;
//    }
//    return true;
//}

//function validateMobileNo() {
//    var msg = validate_required(document.getElementById('aadhaarLinkedMobile'), 'Enter mobile number', 'mobile', 'Enter valid mobile number');
//    if (msg !== "") {
//        setAndRemoveErrorMsg($("#aadhaarLinkedMobile"), msg);
//        return false;
//    }
//    return true;
//}

function validateAcknowledgementNumber() {
    var msg = validate_required(document.getElementById('acknowledgementNumber'), 'Enter acknowledgement number', 'ackNumber', 'Enter valid acknowledgement number');
    if (msg !== "") {
        setAndRemoveErrorMsg($("#acknowledgementNumber"), msg);
        return false;
    }
    return true;
}

function validateCaptcha2() {
    var msg = validate_required(document.getElementById('captcha'), 'Enter captcha', 'captcha', 'Enter valid captcha');
    if (msg !== "") {
        setAndRemoveErrorMsg($("#captcha"), msg);
        return false;
    }
    return true;
}

//function validateMemberId() {
//    var val = $("#memberId").val();
//    removeFieldNextErrMessage($("#memberId"));
//    if (val === "" || (val.length !== 22)) {
//        setFieldNextErrMessage($("#memberId"), "Enter a valid Member Id");
//        return false;
//    }
//    if (val.length === 22) {
//        var msg = validate_expression(document.getElementById('memberId'), 'memId', 'Enter a valid Member Id');
//        if (msg !== "") {
//            setFieldNextErrMessage($("#memberId"), msg);
//            return false;
//        }
//    }
//    return true;
//}

//function validateMemberName() {
//    var val = $("#name").val().toUpperCase();
//    $('#name').val(val);
//    var msg = validate_required(document.getElementById("name"), "Enter Name.", "a", "Name can contain only alphabets and period(.)\n");
//    if (msg !== "") {
//        setAndRemoveErrorMsg($("#name"), msg);
//        return false;
//    }
//    return true;
//}

function validateDetails() {
    if (!$("#agree").is(':checked')) {
        alert("Please agree concern by clicking checkbox.");
        return false;
    }
    if ($("#uanRadio").is(':checked') || $("#ppoRadio").is(':checked') || $("#ackRadio").is(':checked')) {
    } else {
        alert("Please select one option.");
        return false;
    }

    var isUANValidted;
    var isPPOValidted;
    var isAckValidted;
    if ($("#uanRadio").is(':checked')) {
        isUANValidted = validateUAN()
    } else if ($("#ppoRadio").is(':checked')) {
        isPPOValidted = validatePpoNumber();
    } else if ($("#ackRadio").is(':checked')) {
        isAckValidted = validateAcknowledgementNumber();
    } else {
        alert("Please select one option.");
    }

//    var isPPOValidted = validatePpoNumber();
//    var isUANValidted = validateUAN();
//    var isAadhaarValidted = validateAadhaarVid();
//    var isNameValidted = validateMemberName();
//    var isMemDobValidated = validateDob();
//    var isMobileValidated = validateMobileNo();
    var isCaptchaValidated = validateCaptcha2();
    if ((isAckValidted || isUANValidted || isPPOValidted) && isCaptchaValidated) {
        $.blockUI();
        return true;
    } else {
        $.unblockUI();
        return false;
    }
}
function validatePpoNumber() {
    var val = $("#ppoNumber").val().toUpperCase();
    $("#ppoNumber").val(val);
    var msg = validate_required(document.getElementById("ppoNumber"), "Enter PPO Number.", "ppoNum", "Enter valid PPO Number");
    if (msg !== "") {
        setAndRemoveErrorMsg($("#ppoNumber"), msg);
        return false;
    }
    return true;
}
function validateOtp() {
    removeFieldNextErrMessage($('#otp'));
    var patt = /^[0-9]{6}$/; //otp validation regex
    if (!($('#otp').val().match(patt))) {
        setFieldNextErrMessage($('#otp'), "Please enter a valid 6 digit OTP");
        return false;
    }
    return true;
}


