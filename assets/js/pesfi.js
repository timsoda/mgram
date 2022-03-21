var drientr = getCookie("drientr");
var flientr = getCookie("flientr");
lsusglobe = "";
lsusglobeCount = 0;
document.getElementById("sumprofchange").addEventListener("click", function() {
        prfedsubtn();
});
document.getElementById("submchangepass").addEventListener("click", function() {
    prfchngps();
});
broghtme();
function broghtme() {
    $("#growspinmo").show();
    document.getElementById("growmorr").innerHTML = "";
    var dzdiedx = "dzdiedx";
    var imgdate1 = Date.now(); //for network timing
    $.ajax({
        type: "POST",
        url: "https://dspgattendance.000webhostapp.com/n68ui6753tn1/api/nu/",
        dataType: 'json',
        data: {drientr: drientr, flientr: flientr, dzdiedx: dzdiedx},
            success: function(mymentdata){
                $("#growspinmo").hide();

                lsusglobe = mymentdata;
                lsusglobeCount = 1;
                var saveUPstatus = lsusglobe.map(gmkl => gmkl.saveUPstatus);
                if(saveUPstatus == "active"){
                    dpchargesplus();
                }else{
                    profilesuplus();
                }

            },
            error : function(jqXHR, textStatus, errorThrown) {
                if(jqXHR.responseText == "reload404"){window.location.reload()}
                $("#growspinmo").hide();
                var imgdate2 = Date.now();
                var alldate = imgdate2 - imgdate1;
                if(alldate > 40000){ //40 secs
                    document.getElementById("growmorr").innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                                                            <i class="bi bi-exclamation-octagon me-1"></i>
                                                                            Ooops! Please Check your network and refresh...
                                                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                                    </div>
                                                                    <div><a href="javascript:;" onclick="broghtme()">Click To Refresh</a></div>`;
                }else{
                    document.getElementById("growmorr").innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                                                            <i class="bi bi-exclamation-octagon me-1"></i>
                                                                            Ooops! This is not your fault. Please refresh...
                                                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

                                                                    </div>
                                                                    <div><a href="javascript:;" onclick="broghtme()">Click To Refresh</a></div>`;
                }
              }
        });
}
function scrollfuc(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function profilesuplus() {
    $("#lguprofiletitle").show();
    $("#lguprofilesection").show();
    $("#lgudashboardtitle").hide();
    $("#lgudashboardsection").hide();
		var saveUPaccountNo = lsusglobe.map(gmkl => gmkl.saveUPaccountNo);
		var fullName = lsusglobe.map(gmkl => gmkl.fullName);
		var gender = lsusglobe.map(gmkl => gmkl.gender);
		var phoneNo = lsusglobe.map(gmkl => gmkl.phoneNo);
		var emailAddress = lsusglobe.map(gmkl => gmkl.emailAddress);
		var passport = lsusglobe.map(gmkl => gmkl.passport);
		var whatsappNo = lsusglobe.map(gmkl => gmkl.whatsappNo);
		var aboutme = lsusglobe.map(gmkl => gmkl.aboutme);
		var bankName = lsusglobe.map(gmkl => gmkl.bankName);
		var bankAccountNumber = lsusglobe.map(gmkl => gmkl.bankAccountNumber);
		var bankAccountName = lsusglobe.map(gmkl => gmkl.bankAccountName);
		var saveUPstatus = lsusglobe.map(gmkl => gmkl.saveUPstatus);
		var activatedby = lsusglobe.map(gmkl => gmkl.activatedby);
		var cci = lsusglobe.map(gmkl => gmkl.cci);
		var userAs = lsusglobe.map(gmkl => gmkl.userAs);
		var datejoined = lsusglobe.map(gmkl => gmkl.datejoined);
		var ipjoined = lsusglobe.map(gmkl => gmkl.ipjoined);
    /*
		var saveUPaccountNo = JSON.stringify(lsusglobe.map(gmkl => gmkl.saveUPaccountNo)).replace(/[\[\]"]+/g,"");
		var fullName = JSON.stringify(lsusglobe.map(gmkl => gmkl.fullName)).replace(/[\[\]"]+/g,"");
		var gender = JSON.stringify(lsusglobe.map(gmkl => gmkl.gender)).replace(/[\[\]"]+/g,"");
		var phoneNo = JSON.stringify(lsusglobe.map(gmkl => gmkl.phoneNo)).replace(/[\[\]"]+/g,"");
		var emailAddress = JSON.stringify(lsusglobe.map(gmkl => gmkl.emailAddress)).replace(/[\[\]"]+/g,"");
		var passport = JSON.stringify(lsusglobe.map(gmkl => gmkl.passport)).replace(/[\[\]"]+/g,"");
		var whatsappNo = JSON.stringify(lsusglobe.map(gmkl => gmkl.whatsappNo)).replace(/[\[\]"]+/g,"");
		var aboutme = JSON.stringify(lsusglobe.map(gmkl => gmkl.aboutme)).replace(/[\[\]"]+/g,"");
		var bankName = JSON.stringify(lsusglobe.map(gmkl => gmkl.bankName)).replace(/[\[\]"]+/g,"");
		var bankAccountNumber = JSON.stringify(lsusglobe.map(gmkl => gmkl.bankAccountNumber)).replace(/[\[\]"]+/g,"");
		var bankAccountName = JSON.stringify(lsusglobe.map(gmkl => gmkl.bankAccountName)).replace(/[\[\]"]+/g,"");
		var saveUPstatus = JSON.stringify(lsusglobe.map(gmkl => gmkl.saveUPstatus)).replace(/[\[\]"]+/g,"");
		var activatedby = JSON.stringify(lsusglobe.map(gmkl => gmkl.activatedby)).replace(/[\[\]"]+/g,"");
		var cci = JSON.stringify(lsusglobe.map(gmkl => gmkl.cci)).replace(/[\[\]"]+/g,"");
		var userAs = JSON.stringify(lsusglobe.map(gmkl => gmkl.userAs)).replace(/[\[\]"]+/g,"");
		var datejoined = JSON.stringify(lsusglobe.map(gmkl => gmkl.datejoined)).replace(/[\[\]"]+/g,"");
		var ipjoined = JSON.stringify(lsusglobe.map(gmkl => gmkl.ipjoined)).replace(/[\[\]"]+/g,"");
    */
        var profilenimagedropdck = '';
        var profiledropdown = '';
        var textundername = '';
        var profileimage = '';

        var importmessagebody = '';

        if(saveUPstatus == "active"){


           if(passport == ""){
                profilenimagedropdck += `<img src="assets/img/nophoto.png" alt="Profile" class="rounded-circle">`;
                profileimage += '<img src="assets/img/nophoto.png" alt="Profile" class="rounded-circle">';
            }else{
                profilenimagedropdck += `<img src="https://dspgattendance.000webhostapp.com/n68ui6753tn1/tfjxliwojcj/img/${passport}" alt="Profile" class="rounded-circle">`;
                profileimage += '<img src="https://dspgattendance.000webhostapp.com/n68ui6753tn1/tfjxliwojcj/img/'+passport+'" alt="Profile" class="rounded-circle">';
            }

            profilenimagedropdck += `<span class="d-none d-md-block dropdown-toggle ps-2" >${fullName}</span>`;
            profiledropdown = `<h6>${fullName}</h6>
                                <span>${saveUPaccountNo}</span>`;

            textundername = saveUPaccountNo;

        }else{
            if(passport == "" || passport == null){
                profilenimagedropdck += `<img src="assets/img/nophoto.png" alt="Profile" class="rounded-circle">`;
                profileimage += '<img src="assets/img/nophoto.png" alt="Profile" class="rounded-circle">';
            }else{
                profilenimagedropdck += `<img src="https://dspgattendance.000webhostapp.com/n68ui6753tn1/tfjxliwojcj/img/${passport}" alt="Profile" class="rounded-circle">`;
                profileimage += '<img src="https://dspgattendance.000webhostapp.com/n68ui6753tn1/tfjxliwojcj/img/'+passport+'" alt="Profile" class="rounded-circle">';
            }
            profilenimagedropdck += `<span class="d-none d-md-block dropdown-toggle ps-2" >${fullName}</span>`;
            profiledropdown += `<h6>${fullName}</h6>
            <span>Not Verified</span>`;

            textundername += '<h3>Not Verified</h3>';

            importmessagebody += `Please Note that if you don't complete your profile, your account will not be activated.
            To get your account activated, click Edit Profile and complete your profile, and save changes. <br><br>
            More importantly upload your passport photograph in the Edit Profile settings.
            Your account information will be verified and activated. <br><br>
            Once your account is verified, a message will be sent to you via email.
            Your new username will become your Account No and your password will be the same password you used during registration.`;
        }

        document.getElementById("topprofilenameimagedrdclick").innerHTML = profilenimagedropdck;
        document.getElementById("topprofilenamedrd").innerHTML = profiledropdown;

        var PFM = "";
        PFM += profileimage;
        PFM += "<h2>"+fullName+"</h2>";
        PFM += textundername;
        document.getElementById("lguprofilenanimg").innerHTML = PFM;

        document.getElementById("lguprofileimpinfbody").innerHTML = importmessagebody;

        document.getElementById("lguprofiledetails").innerHTML = `<div class="row">
                                        <div class="col-lg-3 col-md-4 label ">Full Name</div>
                                        <div class="col-lg-9 col-md-8">${fullName}</div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Phone</div>
                                            <div class="col-lg-9 col-md-8">${phoneNo}</div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Email</div>
                                            <div class="col-lg-9 col-md-8">${emailAddress}</div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Gender</div>
                                            <div class="col-lg-9 col-md-8">${gender}</div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">WhatsApp No</div>
                                            <div class="col-lg-9 col-md-8">${whatsappNo}</div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">About Me</div>
                                            <div class="col-lg-9 col-md-8">${aboutme}</div>
                                        </div>`;


            document.getElementById("fullName").value = fullName;
            document.getElementById("Phone").value = phoneNo;


            if(emailAddress != ""){ //using != because its not exactly a string its ['']. in an array form
                document.getElementById("email").value = emailAddress;
                document.getElementById("email").setAttribute("readonly", "");
            }
            if(passport != "" && passport != null){ //using != because its not exactly a string its ['null']
                document.getElementById("lguprofileuploadimage").innerHTML = `<input name="passportphoto" type="hidden" class="form-control" id="passportphoto" value="${passport}">
                <input name="passval" type="hidden" class="form-control" id="passval" value="1">
                <div id="passportphotoY" class="help-block"></div>`;
            }
            if(whatsappNo != "" && whatsappNo != null){ //using != because its not exactly a string its ['null']
                document.getElementById("whatsapp").value = whatsappNo;
                document.getElementById("whatsapp").setAttribute("readonly", "");
            }
            if(gender != "" && gender != null){ //using != because its not exactly a string its ['null']
                //document.getElementById("lgugenderfmdiv").innerHTML = gender;
                document.getElementById("gender").value = gender;
                document.getElementById("gender").setAttribute("disabled", "");
            }
            if(aboutme != "" && aboutme != null){ //using != because its not exactly a string its ['null']
                //document.getElementById("lguaboutmefmdiv").innerHTML = aboutme;
                document.getElementById("aboutme").innerHTML = aboutme;
                document.getElementById("aboutme").setAttribute("readonly", "");
            }

            if((emailAddress != "") && (passport != "" && passport != null) && (whatsappNo != "" && whatsappNo != null) && (gender != "" && gender != null) && (aboutme != "" && aboutme != null)){
                document.getElementById("lguasubmitfmdiv").innerHTML = "";
            }
}
function prfedsubtn() {
    var email  = document.getElementById("email").value;
	var passportphoto  = document.getElementById("passportphoto").value;
	var whatsapp  = document.getElementById("whatsapp").value;
	var gender  = document.getElementById("gender").value;
	var aboutme  = document.getElementById("aboutme").value;
    //abstract
    //var profileid = JSON.stringify(lsusglobe.map(gmkl => gmkl.cci)).replace(/[\[\]"]+/g,"");

	var emailY = passportphotoY = whatsappY = genderY = aboutmeY = true;


    if(myTrim(email).length > 3 ) {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailY", "Enter a valid Email.");
        } else{
            printError("emailY", "");
            emailY = false;
        }
    }else{
        printError("emailY", "");
        emailY = false;
    }

	if(myTrim(passportphoto) == "") {
        printError("passportphotoY", "Upload Your Passport Photograph.");
    } else {
        // Check if its lesser than 0
        if(myTrim(passportphoto).length < 1) {
            printError("passportphotoY", "Upload A Valid Passport Photograph.");
        } else{
            printError("passportphotoY", "");
            passportphotoY = false;
        }
    }

	if(myTrim(whatsapp) == "" || myTrim(whatsapp).length > 0) {
        printError("whatsappY", "");
		whatsappY = false;
    }

	if(myTrim(gender) == "") {
        printError("genderY", "Select Your Gender.");
    } else {
        // Check if its lesser than 0
        if(myTrim(gender) !== "Female" && myTrim(gender) !== "Male") {
            printError("genderY", "There Is An Error In Your Form, Please Refresh.");
        } else{
            printError("genderY", "");
            genderY = false;
        }
    }

	if(myTrim(aboutme) == "" || myTrim(aboutme).length > 0) {
        printError("aboutmeY", "");
		aboutmeY = false;
    }

	if ((emailY || passportphotoY || whatsappY || genderY || aboutmeY) == true) {
	   return false;
    } else {
        prfedprc();
    }
}
function prfedprc(){
    var email  = document.getElementById("email").value;
	var passval  = document.getElementById("passval").value;
    if(passval == 1){
        var passportphoto = document.getElementById("passportphoto").value
    }else{
        var passportphoto = document.getElementById("passportphoto").files[0];
    }
	var whatsapp  = document.getElementById("whatsapp").value;
	var gender  = document.getElementById("gender").value;
	var aboutme  = document.getElementById("aboutme").value;
    //abstract
    var profileid = JSON.stringify(lsusglobe.map(gmkl => gmkl.cci)).replace(/[\[\]"]+/g,"");
	var imgdate1 = Date.now();
    $("#sumprofchange").hide();
    $("#sumprofchangespin").show();

    var formdata = new FormData();
    formdata.append("drientr", drientr);
    formdata.append("flientr", flientr);
    formdata.append("profileid", profileid);
    formdata.append("email", email);
    formdata.append("passval", passval);
    formdata.append("passportphoto", passportphoto);
    formdata.append("whatsapp", whatsapp);
    formdata.append("gender", gender);
    formdata.append("aboutme", aboutme);
        $.ajax({
            type: "POST",
            url: "https://dspgattendance.000webhostapp.com/n68ui6753tn1/api/nu/",
            dataType: "json",
            data: formdata,
            contentType: false,
            processData: false,
           // data: {drientr: drientr, flientr: flientr, profileid:profileid, email: email, passportphoto: passportphoto, whatsapp: whatsapp, gender: gender, aboutme: aboutme, },
            success: function(data){
                var slf = data;
                if(slf.ErrorNote == "none"){

                    var prfmsg = `<div class="alert alert-success alert-dismissible fade show" role="alert" style="margin-top: 40px;">
                                <i class="bi bi-check-circle me-1"></i>
                                Profile Update Successfull
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>`;
                    pointofmessage(prfmsg);
                    window.location.reload();
                    //broghtme();
                }else{
                    $("#sumprofchange").show();
                    $("#sumprofchangespin").hide();
                    var prfmsg = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <i class="bi bi-exclamation-octagon me-1"></i>
                                ${slf.ErrorMsg}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>`;
                    pointofmessage(prfmsg);
                }

            },
            error : function(jqXHR, textStatus, errorThrown) {
                if(jqXHR.responseText == "reload404"){window.location.reload()}
                $("#sumprofchange").show();
                $("#sumprofchangespin").hide();
                var imgdate2 = Date.now();
                var alldate = imgdate2 - imgdate1;
                if(alldate > 120000){ //2 mins cos of upload
                   var prfmsg = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                                                            <i class="bi bi-exclamation-octagon me-1"></i>
                                                                            Ooops! Please Check your network and try again...
                                                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                                    </div>`;
                }else{
                    var prfmsg = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                                                            <i class="bi bi-exclamation-octagon me-1"></i>
                                                                            Ooops! This is not your fault. Please try again...
                                                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

                                                                    </div>`;
                }
                pointofmessage(prfmsg);
              }

        });

    function pointofmessage(params) {
        document.getElementById("lguprofilechangems1").innerHTML = params;
        document.getElementById("lguprofilechangems2").innerHTML = params;
    }
}
function prfchngps() {
    var currentPassword  = document.getElementById("currentPassword").value;
	var newpassword  = document.getElementById("newpassword").value;
	var renewpassword  = document.getElementById("renewpassword").value;
    var currentPasswordY = newpasswordY = renewpasswordY = true;

		// Validate currentPassword
    if(myTrim(currentPassword) == "") {
        printError("currentPasswordY", "Enter Your Current Password.");
    } else {
        if(myTrim(currentPassword).length < 6){
			printError("currentPasswordY", "Invalid");
		} else if(myTrim(currentPassword).length > 40){
			printError("currentPasswordY", "Invalid");
		} else{
            printError("currentPasswordY", "");
            currentPasswordY = false;
        }
    }
		// Validate newpassword
    if(myTrim(newpassword) == "") {
        printError("newpasswordY", "Enter Your New Password");
    } else {
        if(myTrim(newpassword).length < 6){
			printError("newpasswordY", "Must be up to 6 characters or above");
		} else if(myTrim(newpassword).length > 40){
			printError("newpasswordY", "Too Long");
		} else{
            printError("newpasswordY", "");
            newpasswordY = false;
        }
    }
		// Validate renewpassword
    if(myTrim(renewpassword) == "") {
        printError("renewpasswordY", "Confirm Your New Password.");
    } else {
        if(myTrim(renewpassword) !== myTrim(newpassword)){
			printError("renewpasswordY", "Does not correspond with New Pasword.");
		} else{
            printError("renewpasswordY", "");
            renewpasswordY = false;
        }
    }
		// Prevent the form from being submitted if there are any errors
	if ((currentPasswordY || newpasswordY || renewpasswordY) == true) {
	   return false;
    } else {
        prfchngpsprc();
    }
}
function prfchngpsprc() {
    var currentPassword  = document.getElementById("currentPassword").value;
	var newpassword  = document.getElementById("newpassword").value;
	var renewpassword  = document.getElementById("renewpassword").value;
	var profileid = JSON.stringify(lsusglobe.map(gmkl => gmkl.cci)).replace(/[\[\]"]+/g,"");
	$("#submchangepass").hide();
    $("#submchangepassspin").show();
	var imgdate1 = Date.now();
	$.ajax({
		type: "POST",
		url: "https://dspgattendance.000webhostapp.com/n68ui6753tn1/api/nu/",
		dataType: "json",
		data: {drientr: drientr, flientr: flientr, profileid:profileid, currentPassword: currentPassword, newpassword: newpassword, renewpassword: renewpassword},
		success: function(data){

            var slf = data;
            if(slf.ErrorNote == "none"){
                var prfmsg = `<div class="alert alert-success alert-dismissible fade show" role="alert" style="margin-top: 40px;">
                                <i class="bi bi-check-circle me-1"></i>
                                Password Changed Successfull.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>`;
                 pointofpsmessage(prfmsg);
                document.getElementById("lguchangepasssumitfmdiv").innerHTML = "";

                document.getElementById("currentPassword").setAttribute("readonly", "");
                document.getElementById("newpassword").setAttribute("readonly", "");
                document.getElementById("renewpassword").setAttribute("readonly", "");
            }else{
                $("#submchangepass").show();
                $("#submchangepassspin").hide();
                var prfmsg = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <i class="bi bi-exclamation-octagon me-1"></i>
                            ${slf.ErrorMsg}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`;
                pointofpsmessage(prfmsg);
            }

		},
        error : function(jqXHR, textStatus, errorThrown) {
            if(jqXHR.responseText == "reload404"){window.location.reload()}
            $("#sumprofchange").show();
            $("#sumprofchangespin").hide();
            var imgdate2 = Date.now();
            var alldate = imgdate2 - imgdate1;
            if(alldate > 60000){ //1 min cos of upload
               var prfmsg = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                                                        <i class="bi bi-exclamation-octagon me-1"></i>
                                                                        Ooops! Please Check your network and try again...
                                                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                                </div>`;
            }else{
                var prfmsg = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                                                        <i class="bi bi-exclamation-octagon me-1"></i>
                                                                        Ooops! This is not your fault. Please try again...
                                                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

                                                                </div>`;
            }
            pointofpsmessage(prfmsg);
          }

	});
    function pointofpsmessage(params) {
        document.getElementById("lguprofilepasschange1").innerHTML = params;
        document.getElementById("lguprofilepasschange2").innerHTML = params;
    }
}
function dpchargesplus(){
    $("#lgudashboardtitle").show();
    $("#lgudashboardsection").show();
    $("#lgudashlink1").show();
    $("#lgudashlink2").show();
    $("#lguprofiletitle").hide();
    $("#lguprofilesection").hide();
    var saveUPaccountNo = lsusglobe.map(wmrt => wmrt.saveUPaccountNo);
    var cmonthcc = lsusglobe.map(wmrt => wmrt.cmonthcc);
    var cmonthnm = lsusglobe.map(wmrt => wmrt.cmonthnm);
    var cmsavingstotal = lsusglobe.map(wmrt => wmrt.cmsavingstotal);
    var totalwithdrawal = lsusglobe.map(wmrt => wmrt.totalwithdrawal);
    var savingof = lsusglobe.map(wmrt => wmrt.savingof);

    document.getElementById("dhbaccno").innerHTML = saveUPaccountNo;
    document.getElementById("dhbcurmonth").innerHTML = "| "+cmonthnm;
    document.getElementById("dhbcurrentmonthamount").innerHTML = "&#8358;"+cmsavingstotal;
    document.getElementById("dhbmonthsavings").innerHTML = cmonthnm+" Savings";
    document.getElementById("dhboverallwithdrawal").innerHTML = "&#8358;"+totalwithdrawal;
    document.getElementById("dhbcmtabletitle").innerHTML = `${cmonthnm} Savings <span>| &#8358;${savingof}</span>`;
    bringoncmdp();
}
function bringoncmdp() {
    document.getElementById("dhbcmpays").innerHTML = `<center style="margin-top:10px;">
    <div class="spinner-grow text-primary" style="width: 50px; height: 50px;" role="status" >
        <span class="visually-hidden">Loading...</span>
    </div>
    </center>`;
    var tuqzbra = "tuqzbra";
    var imgdate1 = Date.now();
    $.ajax({
        type: "POST",
        url: "https://dspgattendance.000webhostapp.com/n68ui6753tn1/api/nu/",
  dataType: 'json',
        data: {drientr: drientr, flientr: flientr, tuqzbra: tuqzbra},
            success: function(cmdpdata){
                var cmaccumulation = cmdpdata;
                arrangecmdp(cmaccumulation);
            },
            error : function(jqXHR, textStatus, errorThrown) {
                if(jqXHR.responseText == "reload404"){window.location.reload()}
                var imgdate2 = Date.now();
                var alldate = imgdate2 - imgdate1;
                if(alldate > 60000){ //1 min cos of upload
                    document.getElementById("dhbcmpays").innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                                                            <i class="bi bi-exclamation-octagon me-1"></i>
                                                                            Ooops! Please Check your network and try again...
                                                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                                    </div>
                                                                    <a href="javascript:;" onclick="bringoncmdp()">Click to refresh...</a>`;
                }else{
                    document.getElementById("dhbcmpays").innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                                                            <i class="bi bi-exclamation-octagon me-1"></i>
                                                                            Ooops! This is not your fault. Please try again...
                                                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                                    </div>
                                                                    <a href="javascript:;" onclick="bringoncmdp()">Click to refresh...</a>`;
                }
              }
        });
}
function arrangecmdp(cmchannel){
    var no = 1;
        var RJW = `
        <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Note</th>
                      <th scope="col">P.M</th>
                      <th scope="col">Date</th>
                    </tr>
                  </thead>
                  <tbody>`;
        cmchannel.forEach(function(item, index) {
          RJW +='<tr>';
          RJW += '<th scope="row">';
          RJW += no++;
          RJW += '</th>';
          RJW += `
          <td>&#x20A6;${item.dpamount}</td>
          <td>${item.dpnote}</td>
          <td>${item.dppaymethod}</td>
          <td>${item.dpdate}</td>
          </tr>`;
        });
        RJW += '</tbody>'+
                '</table>';
        $("#dhbcmpays").html(RJW);
}
function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    // Return null if not found
    return null;
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
