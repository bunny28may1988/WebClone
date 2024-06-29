function validateForm()
{
    var e = {
        username:jQuery("#userName").val(), 
        password:jQuery("#password").val(),
        challenge:jQuery("#hidChallenge").val()
    }, 
            r = document.getElementById("userName").value.trim();
        if (null == r || "" == r)return $(".alert-warning").html("Please enter UAN number"),
           $(".alert-warning").removeClass("hide"), !1; 
   
    if ("" != validate_required(document.getElementById("userName"), "Enter member uan", "uan", "Please enter 12 digits UAN number"))
        return $(".alert-warning").html("Please enter 12 digits UAN No."),
            $(".alert-warning").removeClass("hide"), !1; 
    if ("" != validate_required(document.getElementById("userName"), "Enter member uan.", "d", "UAN number contains digit only"))
        return $(".alert-warning").html("UAN number contains digit only"), $(".alert-warning").removeClass("hide"),
            !1; if (12 !== r.length)return $(".alert-warning").html("UAN number should be 12 digit"), 
            $(".alert-warning").removeClass("hide"), !1;
    if (e.username || ($(".alert-warning").html("Please enter UAN number"), $(".alert-warning").removeClass("hide")), 
    e.password || ($(".alert-warning").html("Please enter password."), $(".alert-warning").addClass("alert alert-warning show")), e.password || e.username || ($(".alert-warning").html("Please enter valid credentials."), $(".alert-warning").addClass("alert alert-warning show")), e.username && e.password)
    
    
    
            {
                for (var a = CryptoJS.MD5(e.password), r = $("#lblChallange").html(),
                                a = hex_sha512("kr9rk" + a.toString() + "kr9rk"),
                                a = hex_sha512(r + a), 
                                n = e.password.length, 
                                t = e.password = "", l = 0; l < n; l++)
                    
        t += "r";
    
    for(n1 = e.password.length, 
                                t1 = e.password = "", l1 = 0; l1 < n; l1++) t1+="r";
     encrypt(e.username);
     $("#hidPassword").val(a);
    return $("#userName").val(t1),
            $("#password").val(t),
            
            $(".btn-logging").prop("disabled", !0), !0
        }


return!1

}

function encrypt(input)
    {
        $.ajax({
            url: ajaxurl,
            type: "GET",
            async: false,
            dataType: 'json',
            contentType: "application/json",
            success: function (data)
            {
                var aesUtil = new AesUtil(128, 10000);
                var ciphertext = aesUtil.encrypt(data.salt, data.iv, data.passphrase, input);
                var aesField = (data.iv + "::" + data.salt + "::" + ciphertext);
                var encField = btoa(aesField);
                document.getElementById('userName').type = 'password';
                $("#hidUserName").val(encField);
                
            },
            error: function (e) {
                console.log("ERROR: ", e);
            },
            done: function (e) {
                console.log("DONE");
            }
        });    
    }


function reset(e){
    
    document.AuthenticationForm.action = e, document.AuthenticationForm.submit()
}function forgotPassword(){document.AuthenticationForm.action = hostname + "/no-auth/forgotPass/viewForgotPass", document.AuthenticationForm.submit()}jQuery(document).ready(function(){$("#loginBoxId").show(), $("#warning").addClass("alert alert-warning hide"), $(".btn-logging").prop("disabled", !1)}), String.prototype.trim = function(){return a = this.replace(/^\s+/, ""), a.replace(/\s+$/, "")};
