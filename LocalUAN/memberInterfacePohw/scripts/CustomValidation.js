String.prototype.trim = function () {
    a = this.replace(/^\s+/, "");
    return a.replace(/\s+$/, "");
};

function validate_required(g, e, f, d) {
    var b = "";
    var c = g.value.trim();
    if (c === null || c === "") {
        return e;
    } else {
        b = validate_expression(g, f, d);
        return b;
    }
}

function validate_expression(f, e, h) {
    var d = "";
    switch (e) {
        case "otp":
            d = "^[0-9]{4}$";
            break;
        case "pin":
            d = "^[0-9]{6}$";
            break;
        case "spChar":
            d = "^(?=.*[$-/:-?{-~!^_'[]]{2,}).{8,}$";
            break;
        case "alphanum":
            d = "^(?=.*w{4,}).{8,}$";
            break;
        case "a":
            d = "^[a-zA-Z. ]*$";
            break;
            //added by abhijeet
        case 'mname': // Only alphabets and space(s) 
            d = "^[a-zA-Z ]*$";
            break;
        case "pan":
            d = "[A-Za-z]{3}[pP]{1}[A-Za-z]{1}\\d{4}[A-Za-z]{1}";
            break;
        case "memId":
            d = "^[a-zA-Z0-9]{1,22}$";
            break;
        case "d":
            d = "^[0-9]*$";
            break;
        case "uan":
            d = "^[0-9]*.{12}$";
            break;
        case "d1":
            d = "^[0-9]{12}$";
            break;
        case "e":
            d = "^[a-zA-Z. ]{85}*$";
            break;
        case "f":
            d = "^[0-9]+$|^[0-9]+(?:(\\.|))[0-9]+$";
            break;
        case "g":
            d = "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$";
            break;
        case "h":
            d = "^[a-zA-Z0-9 -]*$";
            break;
        case "passport":
            d = "^[a-zA-Z0-9]{8,10}$";
            break;
        case "n":
            d = "^[a-zA-Z0-9 ]";
            break;
        case "o":
            d = "^[a-zA-Z. ]*$";
            break;
        case "p":
            d = "^[^<>';]*$";
            break;
        case "t":
            d = "^(((0[1-9]|[12]\\d|3[01])\\/(0[13578]|1[02])\\/((19|[2-9]\\d)\\d{2}))|((0[1-9]|[12]\\d|30)\\/(0[13456789]|1[012])\\/((19|[2-9]\\d)\\d{2}))|((0[1-9]|1\\d|2[0-8])\\/02\\/((19|[2-9]\\d)\\d{2}))|(29\\/02\\/((1[6-9]|[2-9]\\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$";
            break;
        case "w":
            d = "^[]{0,35}$";
        case "y":
            d = "^[1-9][0-9]*$";
            break;
        case "z":
            d = "^[1-9][0-9]* (?:(and|AND)) [1-9][0-9]*$";
            break;
        case "email":
            d = ".+@.+\\.[a-zA-Z]+";
            break;
        case "aadhaar":
            d = "^[0-9]{12}$";
            break;
        case "ifsc":
            d = "[A-Z|a-z]{4}[0][A-Z|a-z|0-9]{6}$";
            break;
        case "captcha":
            d = "^[a-zA-Z0-9]*$";
            break;
        case "mobile":
            d = "^[1-9]([0-9]{9})$";
            break;
        case 'address': //ADDED BY AKSHAY FOR NOMINATION
//            regex = "^[A-Za-z0-9\\\/'\.\,\s\-]{1,120}$";
//            regex = "^[^<>;$#%]{1,120}$";
            d = "^[0-9a-zA-Z\\s&'(),\-\.\/]{1,120}$";
            break;
        case "nominationName":    // Only alphabets, space(s), period[.] and apostrophe
            d = "^[a-zA-Z.' ]*$";
            break;
//changed by faizan from regex to d on 18th Feb 2021
        case 'nameWithApostrophe':    // Only alphabets, space(s), apostrophe and round brackets
            d = "^[a-zA-Z'() ]*$";  //ADDED ON 30/10/2019 TO ALLOW ROUND BRACKETS
            break;
        case "nameWithApostropheDot":
            d = "^[a-zA-Z.'() ]*$";
            break;
        case 'memberNameWithApostrophe':    // Only alphabets, space(s), apostrophe and  period[.] 
            d = "^[a-zA-Z.' ]*$";  //ADDED ON 22/03/2022 TO ALLOW apostrophe in name for FORGOT PASSWORD
            break;
        case "nameWithApostropheDotHyphenBracket":
            d = "^[a-zA-Z.'() -]*$"; ////ADDED ON 13/07/2022 TO ALLOW apostrophe in name for UAN ACtivation
            break;
        case "nameWithApostropheDotHyphenBracketSquareNumber":
            d = "^[a-zA-Z.\\/\\\\',()\\[\\]0-9 -]*$"; 
            break;
        case 'memberNameWithApostropheHyphen':    // Only alphabets, space(s), apostrophe and  period[.] 
            d = "^[a-zA-Z.' -]*$";  //ADDED ON 13/07/2022 TO ALLOW apostrophe in name 
            break;
        case 'memberId':
            d = "^[A-Za-z]{5}[0-9]{7}[a-zA-Z0-9]{3}[0-9]{7}$";
            break;
        case 'alphabetsOnly': // Only alphabets
            d = "^[a-zA-Z]*$";
            break;
        case 'ppoNum':
            d = "^[a-zA-Z]{5}[0-9]{8}$";
            break;
        case 'emailId'://added by bhanus
            d = "^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$";
            break;
        case "ackNumber":
            d = "^[2]([0-9]{20})$";
            break;
    }
    var c = f.value.trim();
    if (c.length > 0) {
        var b = new RegExp(d);
        var g = c.match(b);
        if (g !== null && g !== "") {
            return "";
        } else {
            return h;
        }
    } else {
        return "";
    }
}

function Get_Parameter(c) {
    var b = "[\\?&]" + c + "=([^&#]*)";
    var f = new RegExp(b);
    var e = window.location.href;
    var d = f.exec(e);
    if (d === null) {
        return "";
    } else {
        return d[1];
    }
}

function SearchEmpId(c, b) {
    if (c === "E") {
        alert("You don't have rights to see the list of employees.");
    } else {
        var d = window.open("/menumodule/svr/MiscellaneousServlet?status=EmpIdSearchView&idtxtbox=" + b, "", "top=10,left=10,resizable=1,height=500,width=740, scrollbars=1, status=yes");
        if (!d) {
            alert("Popup Blocked. Please Disable Pop Up Blocker.");
        }
    }
}

function SearchGroupEmpId(c, b) {
    if (c === "E") {
        alert("You don't have rights to see the list of employees.");
    } else {
        var d = window.open("/menumodule/svr/MiscellaneousServlet?status=EmpIdSearchView&idtxtbox=" + b, "", "top=10,left=10,resizable=1,height=500,width=740, scrollbars=1, status=yes");
        if (!d) {
            alert("Popup Blocked. Please Disable Pop Up Blocker.");
        }
    }
}

function SearchITSPNewId(c, b) {
    if (c === "E") {
        alert("You don't have rights to see the list of employees.");
    } else {
        var d = window.open("/menumodule/svr/ITSPAttendanceServlet?status=ITSPEmpSearchListView&idtxtbox=" + b, "", "top=10,left=10,resizable=1,height=500,width=740, scrollbars=1, status=yes");
        if (!d) {
            alert("Popup Blocked. Please Disable Pop Up Blocker.");
        }
    }
}

function validateRequiredEmpId(d, c, b) {
    if (c === "") {
        c = "Enter employee Id.\n";
    }
    if (b === "") {
        b = "Enter valid employee Id.\n";
    }
    return validate_required(d, c, "d", b);
}

function validateEmpId(b, c) {
    if (c === "") {
        c = "Enter valid employee Id.\n";
    }
    return validate_expression(b, "d", c);
}

function setAndRemoveErrorMsg(b, c) {
    if (c !== "") {
        b.next("p").remove();
        if (b.attr('id') !== undefined) {
            if ($("#" + b.attr('id') + "\\.errors").length !== 0) {
                $("#" + b.attr('id') + "\\.errors").remove();
            }
        }
        b.after('<p class="error" style="color:red;">' + c + "</p>");
        b.focus(function () {
            b.next("p").remove();
        });
    }
}
;

var toastTemplateForCaptcha = '<span id="message_disabled_key" style="position:absolute; bottom: 45px; left: 50%;"><div class="inner-span" style="position:relative;left:-50%; padding:5px 10px; background-color:rgba(0,0,0,0.8); border-radius:5px; /*letter-spacing:0.05em*/; color:white;">Cut Copy or Paste action is not allowed !</div></span>';

$(document).ready(function () {
    $("#captcha").bind("cut copy paste drop", function (e) {
        e.preventDefault();
        _showToast();
    });
    $("input[type='text']").bind('copy paste cut drop', function (e) {
        e.preventDefault();
    });
    $(":input, input[type=radio],input[type=file],input[type=checkbox]").focus(function () {
        if ($("#" + this.id + "\\.errors").length !== 0) {
            $("#" + this.id + "\\.errors").remove();
        }
    });
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

function isDateBetweenTwoDates(date1, date2, date3) {
    var dateParts1 = date1.split("/");
    var dateParts2 = date2.split("/");
    var dateParts3 = date3.split("/");
    var d1 = new Date(+dateParts1[2], dateParts1[1] - 1, +dateParts1[0]);
    var d2 = new Date(+dateParts2[2], dateParts2[1] - 1, +dateParts2[0]);
    var d3 = new Date(+dateParts3[2], dateParts3[1] - 1, +dateParts3[0]);
    if (d3 < d1 || d3 > d2) {
        return false;
    } else
        return true;
}
