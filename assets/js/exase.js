document.getElementById("createF").addEventListener("click", function() {
    registerFrm();
    //var esre = "The number you are using is already in use";
    //var esre = "Account Created Successfully";
    //displayRegMssg("regmess", esre, 1);
});
document.getElementById("loginE").addEventListener("click", function() {
    loginFrm();
});


function registerFrm() {
	var fullname  = document.getElementById("fullname").value;
	var phonenumber  = document.getElementById("phonenumber").value;
	var email  = document.getElementById("email").value;
	var password  = document.getElementById("password").value;
	var fullnameY = phonenumberY = emailY = passwordY = true;

    if(myTrim(fullname).length < 4){
        printError("fullnameY", "Enter Your Full Name");
        document.getElementById("fullname").classList.remove('form-control');
        document.getElementById("fullname").classList.add('control-error-box');
        document.getElementById("fullname").classList.add('form-guild-error');
        document.getElementById("fullnameY").style.display = "block";
    } else if(myTrim(fullname).length > 45){
        printError("fullnameY", "Your name is too long");
        document.getElementById("fullname").classList.remove('form-control');
        document.getElementById("fullname").classList.add('control-error-box');
        document.getElementById("fullname").classList.add('form-guild-error');
        document.getElementById("fullnameY").style.display = "block";
    } else{
        printError("fullnameY", "");
        document.getElementById("fullname").classList.remove('control-error-box');
        document.getElementById("fullname").classList.remove('control-error-box');
        document.getElementById("fullname").classList.add('form-control');
        fullnameY = false;
    }


    if(myTrim(phonenumber).length !== 11){
        printError("phonenumberY", "Please Enter Your Valide Phone Number");
        document.getElementById("phonenumber").classList.remove('form-control');
        document.getElementById("phonenumber").classList.add('control-error-box');
        document.getElementById("phonenumber").classList.add('form-guild-error');
        document.getElementById("phonenumberY").style.display = "block";
    } else{
        printError("phonenumberY", "");
        document.getElementById("phonenumber").classList.remove('control-error-box');
        document.getElementById("phonenumber").classList.remove('form-guild-error');
        document.getElementById("phonenumber").classList.add('form-control');
        phonenumberY = false;
    }

    if(myTrim(email).length > 0) {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailY", "Please enter a valid email address");
            document.getElementById("email").classList.remove('form-control');
            document.getElementById("email").classList.add('control-error-box');
            document.getElementById("email").classList.add('form-guild-error');
            document.getElementById("emailY").style.display = "block";
        } else{
            printError("emailY", "");
            document.getElementById("email").classList.remove('control-error-box');
            document.getElementById("email").classList.remove('form-guild-error');
            document.getElementById("email").classList.add('form-control');
            emailY = false;
        }
    }else{
        printError("emailY", "");
        emailY = false;
    }

    if(myTrim(password).length < 6){
        printError("passwordY", "Password should be up to 6 characters");
        document.getElementById("password").classList.remove('form-control');
        document.getElementById("password").classList.add('control-error-box');
        document.getElementById("password").classList.add('form-guild-error');
        document.getElementById("passwordY").style.display = "block";
    } else if(myTrim(password).length > 50){
        printError("passwordY", "Password is too long");
        document.getElementById("password").classList.remove('form-control');
        document.getElementById("password").classList.add('control-error-box');
        document.getElementById("password").classList.add('form-guild-error');
        document.getElementById("passwordY").style.display = "block";
    } else{
        printError("passwordY", "");
        document.getElementById("password").classList.remove('control-error-box');
        document.getElementById("password").classList.remove('form-guild-error');
        document.getElementById("password").classList.add('form-control');
        passwordY = false;
    }


	if ((fullnameY || phonenumberY || emailY || passwordY) == true) {
	   return false;
    } else {
        registerMem();
    }
}
function registerMem(){

	var fullname  = document.getElementById("fullname").value;
	var phonenumber  = document.getElementById("phonenumber").value;
	var email  = document.getElementById("email").value;
	var password  = document.getElementById("password").value;

    document.getElementById("cFg").style.display = "none";
    document.getElementById("cFw").style.display = "block";

	$.ajax({
		type: "POST",
		url: "https://dspgattendance.000webhostapp.com/n68ui6753tn1/api/in/", 
		dataType: "json",
		data: {fullname: fullname, phonenumber: phonenumber, email: email, password: password},
		success: function(data){
            var slf = data;
            if(slf.ErrorNote == "none"){
                document.getElementById("vRegister").style.display = "none";
                document.getElementById("vLogin").style.display = "block";
                var scmsg = "Your Account was creted successfully. Please login with your Phone Number and Password";
                displayRegMssg("regmessLg", scmsg, 1);// DISPLAY LOGIN PAGE, HIDE REGISTER, AND DISPLAY IN THE RESMESSAG OF LOGIN
                document.getElementById("lginDiv").style.display = "none";
            }else{
                displayRegMssg("regmess", slf.ErrorMessage, 0);
                document.getElementById("cFg").style.display = "block";
                document.getElementById("cFw").style.display = "none";
            }
		},
        error : function(jqXHR, textStatus, errorThrown) {
            document.getElementById("cFg").style.display = "block";
            document.getElementById("cFw").style.display = "none";
            var throserr = "An Unexpected Error Occured. Please Refresh The page and Try Again!";
            displayRegMssg("regmess", throserr, 0);
      }
	});
}
function displayRegMssg(dfxl, msgg, elv) {
    if(elv == 0){
        document.getElementById(dfxl).innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                                        <i class="bi bi-exclamation-octagon me-1"></i>
                                                        ${msgg}
                                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                    </div>`;
    }else if(elv == 1){
        document.getElementById(dfxl).innerHTML = ` <div class="alert alert-success alert-dismissible fade show" role="alert">
                                                        <i class="bi bi-check-circle me-1"></i>
                                                        ${msgg}
                                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                    </div>`;
    }
}
function swcSL(dnvs) {
    if(dnvs == 1){
        document.getElementById("vRegister").style.display = "none";
        document.getElementById("regM").reset();
        document.getElementById("vLogin").style.display = "block";
    }else if(dnvs == 2){
        document.getElementById("vRegister").style.display = "block";
        document.getElementById("vLogin").style.display = "none";
        document.getElementById("signM").reset();
    }
}

function loginFrm() {

	var yourUsername  = document.getElementById("yourUsername").value;
	var yourPassword  = document.getElementById("yourPassword").value;
	var yourUsernameY = yourPasswordY = true;


    if(myTrim(yourUsername).length < 4) {
        printError("yourUsernameY", " Invalid Username.");
        document.getElementById("yourUsername").classList.remove('form-control');
        document.getElementById("yourUsername").classList.add('control-error-box');
        document.getElementById("yourUsername").classList.add('form-guild-error');
        document.getElementById("yourUsernameY").style.display = "block";
    } else{
        printError("yourUsernameY", "");
        document.getElementById("yourUsername").classList.remove('control-error-box');
        document.getElementById("yourUsername").classList.remove('control-error-box');
        document.getElementById("yourUsername").classList.add('form-control');
        yourUsernameY = false;
    }


    if(myTrim(yourPassword).length < 6){
        printError("yourPasswordY", "Invalid Password");
        document.getElementById("yourPassword").classList.remove('form-control');
        document.getElementById("yourPassword").classList.add('control-error-box');
        document.getElementById("yourPassword").classList.add('form-guild-error');
        document.getElementById("yourPasswordY").style.display = "block";
    } else if(myTrim(yourPassword).length > 40){
        printError("yourPasswordY", "Invalid Long Password");
        document.getElementById("yourPassword").classList.remove('form-control');
        document.getElementById("yourPassword").classList.add('control-error-box');
        document.getElementById("yourPassword").classList.add('form-guild-error');
        document.getElementById("yourPasswordY").style.display = "block";
    } else{
        printError("yourPasswordY", "");
        document.getElementById("yourPassword").classList.remove('control-error-box');
        document.getElementById("yourPassword").classList.remove('control-error-box');
        document.getElementById("yourPassword").classList.add('form-control');
        yourPasswordY = false;
    }

		// Prevent the form from being submitted if there are any errors
	if ((yourUsernameY || yourPasswordY) == true) {
	   return false;
    } else {
        loginMem();
    }
};
function loginMem(){

	var yourUsername  = document.getElementById("yourUsername").value;
	var yourPassword  = document.getElementById("yourPassword").value;

    document.getElementById("loginE").style.display = "none";
    document.getElementById("lEw").style.display = "block";


	$.ajax({
		type: "POST",
		url: "https://dspgattendance.000webhostapp.com/n68ui6753tn1/api/in/",
		dataType: "json",
		data: {yourUsername: yourUsername, yourPassword: yourPassword, },
		success: function(data){

            var slf = data;
            if(slf.Ijxtxt == "1"){
		document.cookie = "drientr = "+Ijxtxt.coni+"; expires=Thu, 22 Dec 2022 12:00:00 UTC; path=/";
                document.cookie = "flientr = "+Ijxtxt.ctwi+"; expires=Thu, 22 Dec 2022 12:00:00 UTC; path=/";
                document.getElementById("regmessLg").innerHTML = ` <div class="alert alert-success alert-dismissible fade show" role="alert">
                                                                        <i class="bi bi-check-circle me-1"></i>
                                                                        Loggin In...
                                                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                                    </div>`;
                 window.location.href = "./";
            }else{
                document.getElementById("loginE").style.display = "block";
                document.getElementById("lEw").style.display = "none";
                document.getElementById("regmessLg").innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                                                    <i class="bi bi-exclamation-octagon me-1"></i>
                                                                    Invalid Username or Password
                                                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                                </div>`;
            }
		},
        error : function(jqXHR, textStatus, errorThrown) {
            document.getElementById("loginE").style.display = "block";
            document.getElementById("lEw").style.display = "none";
            document.getElementById("regmessLg").innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                                                <i class="bi bi-exclamation-octagon me-1"></i>
                                                                Ooops! An Unexpected Error Occured. Please Refresh The page and Try Again!
                                                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                            </div>`;
      }

	});

}

function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}
String.prototype.nl2br = function(){
    return this.replace(/\n/g, "<br />");
}
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
