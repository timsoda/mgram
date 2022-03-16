var drientr = getCookie("drientr");
var flientr = getCookie("flientr");
var lsusglobe = "";
var lsusglobeCount = 0;
var lsmtglobe = "";
var lsmtglobeCount = 0;
var myModal = new bootstrap.Modal(document.getElementById("verticalycentered"), {});

wetaUsers();
whatallbal();
function whatallbal() {
  var whihjsdeq = "whihjsdeq";
    $.ajax({
    type: "POST",
    url: "https://dspgattendance.000webhostapp.com/n68ui6753tn1/api/mg/",
	dataType: "json",
    data: {drientr: drientr, flientr: flientr, whihjsdeq: whihjsdeq},
        success: function(allBalResponds){
          var slf = allBalResponds;
          document.getElementById("wingsum").innerHTML = "&#8358;"+slf.balanceall;
        },
        error : function(jqXHR, textStatus, errorThrown) {

          if(jqXHR.responseText == "reload404"){window.location.reload()}
        }
    });
}
function wetaUsers() {
    var xhmyrqms = "xhmyrqms";
    $.ajax({
    type: "POST",
    url: "https://dspgattendance.000webhostapp.com/n68ui6753tn1/api/mg/",
	dataType: "json",
    data: {drientr: drientr, flientr: flientr, xhmyrqms: xhmyrqms},
        success: function(ListResponds){
            lsusglobe = ListResponds;
            lsusglobeCount = 1;
            frdblist(1);
            wetaMonths();
        },
        error : function(jqXHR, textStatus, errorThrown) {

          if(jqXHR.responseText == "reload404"){window.location.reload()}
        }
    });
}
function wetaMonths() {
  var zhibkey = "zhibkey";
    $.ajax({
			type: "POST",
			url: "https://dspgattendance.000webhostapp.com/n68ui6753tn1/api/mg/",
      dataType: 'json',
			data: {drientr: drientr, flientr: flientr, zhibkey: zhibkey},
				success: function(monthsData){
				  lsmtglobe = monthsData;
          lsmtglobeCount = 1;
				},
        error : function(jqXHR, textStatus, errorThrown) {

          if(jqXHR.responseText == "reload404"){window.location.reload()}
        }
			});
}
function frdblist(wvzh) { //users list
          var dnewuserglobe = [];
	        dnewuserglobe = lsusglobe.concat(dnewuserglobe);

            if(wvzh == 1){
              var userPack = dnewuserglobe.filter(wwxe => wwxe.saveUPstatus == "active");
            }else if(wvzh == 2){
              var userPack = dnewuserglobe.filter(wwxe => wwxe.saveUPstatus == "pending");
            }else if(wvzh == 3){
              var userPack = dnewuserglobe
            }


            var no = 1;
            var PIT = "";
            PIT += `<table id="lscustomers" class="table table-borderless datatable">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Status</th>
                </tr>
                </thead>
                <tbody>`;
            var ListPack = userPack;
            ListPack.forEach(function(item, index) {
                PIT +='<tr>';
                PIT += '<td>';
                PIT += no++;
                PIT += '</td>';
                PIT += `<td>${item.fullName}</td>
                    <td><a href="javascript:;" id="view${item.cci}" class="text-primary">${item.phoneNo}</a></td>`;
                if(item.saveUPstatus == "pending"){
                    PIT +=  `<td id="td${item.cci}"><span class="badge bg-warning">${item.saveUPstatus}</span></td>`;
                }else if(item.saveUPstatus == "active"){
                    PIT +=  `<td id="td${item.cci}"><span class="badge bg-success">${item.saveUPstatus}</span></td>`;
                }else if(item.saveUPstatus == "deactivated"){
                    PIT +=  `<td id="td${item.cci}"><span class="badge bg-danger">${item.saveUPstatus}</span></td>`;
                }else if(item.saveUPstatus == "rejected"){
                  PIT +=  `<td id="td${item.cci}"><span class="badge bg-danger">${item.saveUPstatus}</span></td>`;
                }

                PIT +='</tr>';
            });
            PIT += `</tbody>
            </table>`;
            $("#lsbody").html(PIT);
            const select = (el, all = false) => { //from the template we used
                el = el.trim()
                if (all) {
                  return [...document.querySelectorAll(el)]
                } else {
                  return document.querySelector(el)
                }
              }
            const datatables = select('#lscustomers', true)
            datatables.forEach(datatable => {
                new simpleDatatables.DataTable(datatable);
            })
            ListPack.forEach(function(item, index) {
                $('#lscustomers').on('click', '#view'+item.cci+'', function(event) {
                  var kcns = item.cci;
                   actionListedUsers(kcns, wvzh);
                  });
                });
}
function  actionListedUsers(kcns, wvzh){ //active/pending/all users
    var zbdu = lsusglobe.filter(wwxe => wwxe.cci == kcns);
    var username = zbdu.map(qlxm => qlxm.username);
    var saveUPaccountNo = zbdu.map(qlxm => qlxm.saveUPaccountNo);
    var fullName = zbdu.map(qlxm => qlxm.fullName);
    var gender = zbdu.map(qlxm => qlxm.gender);
    var phoneNo = zbdu.map(qlxm => qlxm.phoneNo);
    var emailAddress = zbdu.map(qlxm => qlxm.emailAddress);
    var passport = zbdu.map(qlxm => qlxm.passport);
    var whatsappNo = zbdu.map(qlxm => qlxm.whatsappNo);
    var aboutme = zbdu.map(qlxm => qlxm.aboutme);
    var bankName = zbdu.map(qlxm => qlxm.bankName);
    var bankAccountNumber = zbdu.map(qlxm => qlxm.bankAccountNumber);
    var bankAccountName = zbdu.map(qlxm => qlxm.bankAccountName);
    var saveUPstatus = zbdu.map(qlxm => qlxm.saveUPstatus);
    var activatedby = zbdu.map(qlxm => qlxm.activatedby);
    var cci = zbdu.map(qlxm => qlxm.cci);
    var userAs = zbdu.map(qlxm => qlxm.userAs);
    var datejoined = zbdu.map(qlxm => qlxm.datejoined);
    var ipjoined = zbdu.map(qlxm => qlxm.ipjoined);



    var LTT = ` <div id="uldivforallusers"></div>
                <div class="tab-pane fade show active profile-overview" id="profile-overview">
                <div class="row mb-3">
                <label for="profileImage" class="col-md-4 col-lg-3 col-form-label" style="font-weight: 600; color: rgba(1, 41, 112, 0.6);">Profile Image</label>
                <div class="col-md-8 col-lg-9" id="prfadmedit1"> `;
        if(passport != "" && passport != null){ //using != because its not exactly a string its ['null']
          LTT += '<img src="https://dspgattendance.000webhostapp.com/n68ui6753tn1/tfjxliwojcj/img/'+passport+'" alt="Profile" width="120px"> &nbsp;&nbsp; <span id="prfadmeditcl1"></span>';
        }else{
          LTT += '<img src="assets/img/nophoto.png" alt="Profile" width="120px"> &nbsp;&nbsp; <span id="prfadmeditcl1"></span>';
        }

    LTT +=     `</div>
            </div>`;

    LTT += `
                  <h5 class="card-title">Profile Details</h5>

                  <div class="row" style="margin-bottom: 20px; font-size: 15px;">
                  <div class="col-lg-3 col-md-4 label" style="font-weight: 600; color: rgba(1, 41, 112, 0.6);">Username</div>
                  <div class="col-lg-9 col-md-8">${username} </div>
                  </div>

                  <div class="row" style="margin-bottom: 20px; font-size: 15px;">
                  <div class="col-lg-3 col-md-4 label" style="font-weight: 600; color: rgba(1, 41, 112, 0.6);">saveUP ACC. NO.</div>
                  <div class="col-lg-9 col-md-8">${saveUPaccountNo} </div>
                  </div>

                  <div class="row" style="margin-bottom: 20px; font-size: 15px;">
                  <div class="col-lg-3 col-md-4 label" style="font-weight: 600; color: rgba(1, 41, 112, 0.6);">Full Name</div>
                  <div class="col-lg-9 col-md-8">${fullName}</div>
                  </div>

                  <div class="row" style="margin-bottom: 20px; font-size: 15px;">
                      <div class="col-lg-3 col-md-4 label" style="font-weight: 600; color: rgba(1, 41, 112, 0.6);">Phone</div>
                      <div class="col-lg-9 col-md-8" id="prfadmedit2">${phoneNo} &nbsp;&nbsp; <span id="prfadmeditcl2"></span></div>
                  </div>

                  <div class="row" style="margin-bottom: 20px; font-size: 15px;">
                      <div class="col-lg-3 col-md-4 label" style="font-weight: 600; color: rgba(1, 41, 112, 0.6);">Email</div>
                      <div class="col-lg-9 col-md-8" id="prfadmedit3">${emailAddress} &nbsp;&nbsp; <span id="prfadmeditcl3"></span></div>
                  </div>

                  <div class="row" style="margin-bottom: 20px; font-size: 15px;">
                      <div class="col-lg-3 col-md-4 label" style="font-weight: 600; color: rgba(1, 41, 112, 0.6);">Gender</div>
                      <div class="col-lg-9 col-md-8" id="prfadmedit4">${gender} &nbsp;&nbsp; <span id="prfadmeditcl4"></span></div>
                  </div>

                  <div class="row" style="margin-bottom: 20px; font-size: 15px;">
                      <div class="col-lg-3 col-md-4 label" style="font-weight: 600; color: rgba(1, 41, 112, 0.6);">WhatsApp No</div>
                      <div class="col-lg-9 col-md-8" id="prfadmedit5">${whatsappNo} &nbsp;&nbsp; <span id="prfadmeditcl5"></span></div>
                  </div>

                  <div class="row" style="margin-bottom: 20px; font-size: 15px;">
                      <div class="col-lg-3 col-md-4 label" style="font-weight: 600; color: rgba(1, 41, 112, 0.6);">About Me</div>
                      <div class="col-lg-9 col-md-8" id="prfadmedit6">${aboutme} &nbsp;&nbsp; <span id="prfadmeditcl6"></span></div>
                  </div>

                  <div class="row" style="margin-bottom: 20px; font-size: 15px;">
                    <div class="col-lg-3 col-md-4 label" style="font-weight: 600; color: rgba(1, 41, 112, 0.6);">Date</div>
                    <div class="col-lg-9 col-md-8">${datejoined}</div>
                  </div>

                  <div class="row" style="margin-bottom: 20px; font-size: 15px;">
                    <div class="col-lg-3 col-md-4 label" style="font-weight: 600; color: rgba(1, 41, 112, 0.6);">IP</div>
                    <div class="col-lg-9 col-md-8">${ipjoined}</div>
                  </div>

                  <div class="row" style="margin-bottom: 20px; font-size: 15px;">
                    <div class="col-lg-3 col-md-4 label" style="font-weight: 600; color: rgba(1, 41, 112, 0.6);">Status</div>
                    <div class="col-lg-9 col-md-8">
                    ${saveUPstatus} &nbsp;&nbsp; <button id="lsurspadrbt" onclick="lsurspadrbtck()" class="btn btn-primary btn-sm" style="font-weight:bold;"> <i class="ri-add-line"></i> </button>
                    </div>
                  </div>


                  <div class="row" id="lsurspadrrow" style="margin-bottom: 20px; font-size: 15px; display:none;">
                    <div class="col-lg-3 col-md-4 label"></div>
                    <div class="col-lg-9 col-md-8">

                    <div id="lsurspadr" class="col-md-3" >
                    <br><br>
                    <form onsubmit="return false;" method="post">
                    <input type="hidden" id="lsmkuid" name="lsmkuid" value="${cci}">
                    <input type="number" id="lsmkamt" name="lsmkamt" class="form-control col-sm-3" placeholder="Amount" required="required"><br>
                    <select id="lsmkatv" class="form-select col-md-3" id="" required="">
                    <option selected="" disabled="" value="">Choose...</option>
                    <option value="pending">Pending</option>
                    <option value="active">Active</option>
                    <option value="rejected">Rejected</option>
                    <option value="deactivated">Deactivated</option>
                    </select>
                    <button onclick="lsurssubmit()" style="margin-top:5px;" class="btn btn-primary btn-sm">Submit</button>
                    </form>
                    <br><br>
                    </div>

                    </div>
                  </div>

                  <div class="row" id="acdppaymsg" style="padding-top:40px;">

                  </div>


                  <div class="row" id="vbpback" style="padding-top:50px">
                    <div class="col-lg-3 col-md-4 label">
                    <button onclick="lsgoback()" type="button" class="btn btn-warning btn-sm"><i class="bx bxs-share"></i> Back</button>
                    </div>
                  </div>
                </div>`;
    $("#viewbody").html(LTT);



    if(wvzh == 1){
      document.getElementById("lsurspadrbt").style.display = "none";
      document.getElementById("vbpback").style.display = "none";
      dpFixdpay(kcns);
    }else if(wvzh == 2){
      $("#lsurspadrbt").show();
    }else if(wvzh == 3){
      $("#lsurspadrbt").hide();
      document.getElementById("uldivforallusers").innerHTML = `<ul class="nav nav-tabs nav-tabs-bordered">
      <li class="nav-item">
        <button id="prfoverview" class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
      </li>
      <li class="nav-item">
        <button id="prfeditpr" class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
      </li>
      <li class="nav-item">
        <button id="prfchangepass" class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
      </li>
      </ul>`;
      document.getElementById("prfoverview").addEventListener("click", function() {
        changepassdivbringin(1);
      });
      document.getElementById("prfeditpr").addEventListener("click", function() {
        changepassdivbringin(2);
      });
      document.getElementById("prfchangepass").addEventListener("click", function() {
        changepassdivbringin(3);
      });
    }



    function changepassdivbringin(ele) {
      if(ele == 1){
        $("#lsurspadrbt").hide();
        $("#profile-change-password").hide();
        document.getElementById("lsurspadrrow").style.display = "none";
        for (let i = 1; i < 7; i++) {
          document.getElementById(`prfadmeditcl${[i]}`).innerHTML = '';
        }
      }else if(ele == 2){
        $("#lsurspadrbt").show();
        $("#profile-change-password").hide();
        for (let i = 1; i < 7; i++) {
          document.getElementById(`prfadmeditcl${[i]}`).innerHTML = `<a href="javascript:;" onclick="prfeditdel('${cci}',${[i]})"> <span class="badge bg-warning"><i class="bi bi-exclamation-octagon me-1"></i> Delete</span> </a>`;
        }

        if(passport == "" || passport == null){
          document.getElementById("prfadmeditcl1").innerHTML = "";
        }if(phoneNo == "" || phoneNo == null){
          document.getElementById("prfadmeditcl2").innerHTML = "";
        }
        if(emailAddress == "" || emailAddress == null){
          document.getElementById("prfadmeditcl3").innerHTML = "";
        }
        if(gender == "" || gender == null){
          document.getElementById("prfadmeditcl4").innerHTML = "";
        }
        if(whatsappNo == "" || whatsappNo == null){
          document.getElementById("prfadmeditcl5").innerHTML = "";
        }
        if(aboutme == "" || aboutme == null){
          document.getElementById("prfadmeditcl6").innerHTML = "";
        }
      }else if(ele == 3){
        $("#lsurspadrbt").hide();
        document.getElementById("lsurspadrrow").style.display = "none";
        for (let i = 1; i < 7; i++) {
          document.getElementById(`prfadmeditcl${[i]}`).innerHTML = '';
        }
        $("#profile-change-password").show();
        //$("#profile-change-password").fadeIn("slow");
      }
    }
    document.getElementById("dvmembutton").style.display = "none";
    document.getElementById("lsbody").style.display = "none";
    document.getElementById("viewbody").style.display = "block";
}
function lsgoback() { //go back
    $("#dvmembutton").show();
    document.getElementById("lsbody").style.display = "block";
    document.getElementById("viewbody").innerHTML = "";
    document.getElementById("dpfrfixdrow").innerHTML = "";
}
function lsurspadrbtck() { //+ button
  document.getElementById("lsurspadrbt").style.display = "none";
  //document.getElementById("lsurspadrrow").style.display = "block";
  $("#lsurspadrrow").show();
}
function prfeditdel(shonicc, shonino) { //delete any data from edit profile
  //console.log(shonicc, shonino)
  var acmemid = shonicc;
  var presise = shonino;
  var tuqzbra = "tuqzbra";
  document.getElementById(`prfadmeditcl${shonino}`).innerHTML =`<div class="spinner-border text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;
  var imgdate1 = Date.now(); //for network timing
  $.ajax({
    type: "POST",
    url: "https://dspgattendance.000webhostapp.com/n68ui6753tn1/api/mg/",
    dataType: 'json',
    data: {drientr: drientr, flientr: flientr, tuqzbra: tuqzbra, acmemid: acmemid, presise: presise},
      success: function(data){
        var slf = data;
        if(slf.ErrorNote == "none"){
          //document.getElementById(`prfadmeditcl${shonino}`).innerHTML = '';
          document.getElementById(`prfadmedit${shonino}`).innerHTML = '';

          myModal.show();
          document.getElementById("prf-modal-title").classList.remove("text-danger");
          document.getElementById("prf-modal-title").classList.add("text-success");
          document.getElementById("prf-modal-title").innerHTML = "Successful!";
          document.getElementById("prf-modal-body").innerHTML = "Removed Successfuly";
          // var rxuc = lsusglobe.filter(qpdy => qpdy.cci == shonicc);
          //   var saveUPstatus = rxuc.map(xgwn => xgwn.saveUPstatus = lsmkatv);
          var zbdu = lsusglobe.filter(wwxe => wwxe.cci == shonicc);
          zbdu.map(qlxm => qlxm.gender = slf.gender);
          zbdu.map(qlxm => qlxm.phoneNo = slf.phone);
          zbdu.map(qlxm => qlxm.emailAddress = slf.email);
          zbdu.map(qlxm => qlxm.passport = slf.passport);
          zbdu.map(qlxm => qlxm.whatsappNo = slf.whatsapp);
          zbdu.map(qlxm => qlxm.aboutme = slf.about);
        }else{
          document.getElementById(`prfadmeditcl${shonino}`).innerHTML =`<a href="javascript:;" onclick="prfeditdel('${shonicc}',${shonino})"> <span class="badge bg-warning"><i class="bi bi-exclamation-octagon me-1"></i> Delete</span> </a>`;
          myModal.show();
          document.getElementById("prf-modal-title").classList.remove("text-success");
          document.getElementById("prf-modal-title").classList.add("text-danger");
          document.getElementById("prf-modal-title").innerHTML = "Ooops!";
          document.getElementById("prf-modal-body").innerHTML = slf.ErrorMsg;
        }
      },
      error : function(jqXHR, textStatus, errorThrown) {
        if(jqXHR.responseText == "reload404"){window.location.reload()}
        document.getElementById(`prfadmeditcl${shonino}`).innerHTML =`<a href="javascript:;" onclick="prfeditdel('${shonicc}',${shonino})"> <span class="badge bg-warning"><i class="bi bi-exclamation-octagon me-1"></i> Delete</span> </a>`;
        var imgdate2 = Date.now();
          var alldate = imgdate2 - imgdate1;
          if(alldate > 40000){ //40 secs
            myModal.show();
            document.getElementById("prf-modal-title").classList.remove("text-success");
            document.getElementById("prf-modal-title").classList.add("text-danger");
            document.getElementById("prf-modal-title").innerHTML = "Ooops!";
            document.getElementById("prf-modal-body").innerHTML = "Please Check your network and try again...";
          }else{
            var myModal = new bootstrap.Modal(document.getElementById("verticalycentered"), {});
            myModal.show();
            document.getElementById("prf-modal-title").classList.remove("text-success");
            document.getElementById("prf-modal-title").classList.add("text-danger");
            document.getElementById("prf-modal-title").innerHTML = "Ooops!";
            document.getElementById("prf-modal-body").innerHTML = "This is not your fault. Please try again...";
          }
      }
  });
}
function lsurssubmit() { //make pending/active/deactive/rejected
  var lsmkuid = document.getElementById("lsmkuid").value;
  var lsmkatv = document.getElementById("lsmkatv").value;
  var lsmkamt = document.getElementById("lsmkamt").value;

  if(lsmkatv.length>3){
    //console.log(lsmkuid)
    //console.log(lsmkatv)
    $.ajax({
      type: "POST",
      url: "https://dspgattendance.000webhostapp.com/n68ui6753tn1/api/mg/",
      dataType: "json",
      data: {drientr: drientr, flientr: flientr, lsmkuid: lsmkuid, lsmkatv: lsmkatv, lsmkamt: lsmkamt},
        success: function(actionData){
          //lsusglobe
          var slf = actionData;
          if(slf.ErrorNote == "none"){
            var rxuc = lsusglobe.filter(qpdy => qpdy.cci == lsmkuid);
            var saveUPstatus = rxuc.map(xgwn => xgwn.saveUPstatus = lsmkatv);
            //var activatedby = rxuc.map(xgwn => xgwn.activatedby = lsmkuid);

            lsgoback();
            if(saveUPstatus == "pending"){
              document.getElementById("td"+lsmkuid).innerHTML =  `<span class="badge bg-warning">${saveUPstatus}</span>`;
            }else if(saveUPstatus == "active"){
              document.getElementById("td"+lsmkuid).innerHTML =  `<span class="badge bg-success">${saveUPstatus}</span>`;
            }else if(saveUPstatus == "deactivated"){
              document.getElementById("td"+lsmkuid).innerHTML =  `<span class="badge bg-danger">${saveUPstatus}</span>`;
            }else if(saveUPstatus == "rejected"){
              document.getElementById("td"+lsmkuid).innerHTML =  `<span class="badge bg-danger">${saveUPstatus}</span>`;
            }
          }else{
            //console.log("did not work")
          }
        },
        error : function(jqXHR, textStatus, errorThrown) {

          if(jqXHR.responseText == "reload404"){window.location.reload()}
        }
    });
  }
}
function memlschange(elem) { //slide differen user type buttons {active/pending/all}
  if(elem == 1){
    // actmb btn-light btn-success
    // pndmb btn-warning
    // allmb btn-secondary
    document.getElementById("actmb").classList.remove("btn-light");
    document.getElementById("actmb").classList.add("btn-secondary");

    document.getElementById("pndmb").classList.remove("btn-secondary");
    document.getElementById("pndmb").classList.add("btn-light");

    document.getElementById("allmb").classList.remove("btn-secondary");
    document.getElementById("allmb").classList.add("btn-light");

    lsgoback()
    frdblist(1);

  }else if(elem == 2){
    document.getElementById("pndmb").classList.remove("btn-light");
    document.getElementById("pndmb").classList.add("btn-secondary");

    document.getElementById("actmb").classList.remove("btn-secondary");
    document.getElementById("actmb").classList.add("btn-light");

    document.getElementById("allmb").classList.remove("btn-secondary");
    document.getElementById("allmb").classList.add("btn-light");

    lsgoback()
    frdblist(2);

  }else if(elem == 3){
    document.getElementById("allmb").classList.remove("btn-light");
    document.getElementById("allmb").classList.add("btn-secondary");

    document.getElementById("pndmb").classList.remove("btn-secondary");
    document.getElementById("pndmb").classList.add("btn-light");

    document.getElementById("actmb").classList.remove("btn-secondary");
    document.getElementById("actmb").classList.add("btn-light");

    lsgoback()
    frdblist(3);
  }
}
function dpFixdpay(kcns){ //fixed save function
var actfixamount = "";
var actdpchannel = "";
var UDL = `<div class="card">
          <div class="card-body">
          <h5 class="card-title" id="actitle"><b>Fixed saveUP</b></h5>
          <div id="acfmplub"><button id="lsurspadrbt" onclick="onacdpfm(1)" class="btn btn-primary btn-sm" style="font-weight:bold;"> <i class="ri-add-line"></i> </button></div>
            <div id="acdivfmdp" style="display:none;">
              <form name="acdpform" id="acdpform" action="" onsubmit="return false;" class="row g-3" method="POST">
              <input type="hidden" name="indpfxin" id="indpfxin" required>
              <input type="hidden" name="indpmthid" id="indpmthid" required>
              <input type="hidden" name="indpmth" id="indpmth" required>
                <div class="col-12">
                  <label for="indpamount" class="form-label">Amount</label>
                  <input oninput="indpnotecopy()" type="number" class="form-control col-sm-4" id="indpamount" id="indpamount" autocomplete="off" required>
                  <div id="indpamountDF" class="help-block"></div>
                </div>

                <div class="col-12">
                <input class="form-check-input" type="radio" name="indppm"  value="cash">
                <label class="form-check-label" for="gridRadios1">
                  Cash
                </label> &nbsp;&nbsp;
                <input class="form-check-input" type="radio" name="indppm" value="transfer">
                <label class="form-check-label" for="gridRadios1">
                  Transfer
                </label> &nbsp;&nbsp;
                <input class="form-check-input" type="radio" name="indppm" value="pos">
                <label class="form-check-label" for="gridRadios1">
                  POS
                </label> &nbsp;&nbsp;
                <input class="form-check-input" type="radio" name="indppm" value="deposit">
                <label class="form-check-label" for="gridRadios1">
                  Bank Deposit
                </label>
                <div id="indppmDF" class="help-block"></div>
                </div>

                <div class="col-12">
                  <label for="indpnote" class="form-label">Note</label>
                  <textarea  class="form-control" id="indpnote" name="indpnote" rows="5" required></textarea>
                  <div id="indpnoteDF" class="help-block"></div>
                </div>


                <div class="text-center">
                  <button id="acindpsm" onclick="acdpinput('${kcns}')" type="submit" class="btn btn-primary"  style="display:none;">Submit</button>
                  <button id="acindpsmdb" type="submit" class="btn btn-primary" disabled>
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submit
                  </button>
                  <button type="reset" class="btn btn-secondary">Reset</button>
                  <button type="button" class="btn btn-secondary" onclick="onacdpfm(2)"><i class="bi bi-file-earmark-minus"></i></button>
                </div>
              </form>
          </div>


          <h3 align="center" style="padding-top:30px;" id="actabletitle"></h3>
                <div id="actablefdp">

                </div>

                  <div class="row" id="vbacback" style="padding-top:30px">
                    <div class="col-lg-3 col-md-4 label">
                    <button onclick="lsgoback()" type="button" class="btn btn-warning btn-sm"><i class="bx bxs-share"></i> Back</button>
                    </div>
                  </div>

        </div>
        </div>`;
    document.getElementById("dpfrfixdrow").innerHTML = UDL;
    var warcrvj = "warcrvj";
    var acmemid = kcns;
    $.ajax({
			type: "POST",
			url: "https://dspgattendance.000webhostapp.com/n68ui6753tn1/api/mg/",
      dataType: 'json',
			data: {drientr: drientr, flientr: flientr, warcrvj: warcrvj, acmemid: acmemid},
				success: function(fixamtData){

          actfixamount = fixamtData;
				  fxdpfrsv()
				},
        error : function(jqXHR, textStatus, errorThrown) {

          if(jqXHR.responseText == "reload404"){window.location.reload()}
        }
			});

      function fxdpfrsv() {
        var usemntid = JSON.stringify(actfixamount.map(qlxm => qlxm.currentmonthid)).replace(/[\[\]"]+/g,"");
        if(usemntid == ""){
          usemntid = 1;
        }
        var pgfjwhej = "pgfjwhej";
        $.ajax({
          type: "POST",
          url: "https://dspgattendance.000webhostapp.com/n68ui6753tn1/api/mg/",
          dataType: 'json',
          data: {drientr: drientr, flientr: flientr, pgfjwhej: pgfjwhej, acmemid: acmemid, usemntid:usemntid},
            success: function(fxdpData){
              actdpchannel = fxdpData;
              listfixeddp()
            },
            error : function(jqXHR, textStatus, errorThrown) {

              if(jqXHR.responseText == "reload404"){window.location.reload()}
            }
          });
      }

      function listfixeddp() {
        $("#acindpsmdb").hide();//submit disabled
        $("#acindpsm").show(); //submit
        var fixedamount = actfixamount.map(qlxm => qlxm.fixedamount);
        var currentmonthid = JSON.stringify(actfixamount.map(qlxm => qlxm.currentmonthid)).replace(/[\[\]"]+/g,"");
        document.getElementById("indpfxin").value = fixedamount;


        //lsmtglobe {month global}
        //var cxiCHK = actdpchannel.map(bill => bill.cxi);
        //var dpmonthidCHK = actdpchannel.map(bill => bill.dpmonthid);
        //var dpmonthCHK = actdpchannel.map(bill => bill.dpmonth);
        if(currentmonthid == ""){ //check if fixed dp is empty
          document.getElementById("actitle").innerHTML = `<b>Fixed saveUP for Janurary (&#x20A6;${fixedamount})</b>`;
          document.getElementById("actabletitle").innerHTML = 'January';
          document.getElementById("indpmthid").value = "1";
          document.getElementById("indpmth").value = "January"
        }else{
          //dpmonthidCHK = dpmonthidCHK.pop();
          //dpmonthCHK = dpmonthCHK.pop();
          var dpmonthidCHK =  lsmtglobe.filter(bill => bill.mcc == currentmonthid).map(bill => bill.mcc);
          var dpmonthCHK =  lsmtglobe.filter(bill => bill.mcc == currentmonthid).map(bill => bill.month);
          document.getElementById("actitle").innerHTML = `<b>Fixed saveUP for ${dpmonthCHK} (&#x20A6;${fixedamount})</b>`;
          document.getElementById("actabletitle").innerHTML = dpmonthCHK;
          document.getElementById("indpmthid").value = dpmonthidCHK;
          document.getElementById("indpmth").value = dpmonthCHK;
        }
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
        actdpchannel.forEach(function(item, index) {
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
        $("#actablefdp").html(RJW);
      }
      //lsmtglobe {month global}
}
function indpnotecopy(){ //oninput amount to note
  var indpamount = document.getElementById("indpamount").value
  document.getElementById("indpnote").innerHTML = "Payed N"+indpamount;
}
function onacdpfm(ele) { //+ && - of daily pay form
  if(ele == 1){
    $("#acfmplub").hide();
    $("#acdivfmdp").show();
  }else if(ele == 2){
    $("#acdivfmdp").hide();
    $("#acfmplub").show();
  }
}
function acdpinput(kcns) { //submit dp fixed
  var indpamount  = document.getElementById("indpamount").value;
  var indppm  = document.acdpform.indppm.value;
	var indpnote  = document.getElementById("indpnote").value;
  //hidden
  var fixedamount = document.getElementById("indpfxin").value;
  //var indpmmmid = document.getElementById("indpmmmid").value;
  //console.log(indpmmmid)
	var indpamountDF = indppmDF = indpnoteDF = true;

    if(myTrim(indpamount) == "") {
        printError("indpamountDF", "");
    } else {
        var regex = /^[1-9]/;
    if(regex.test(indpamount) === false) {
        printError("indpamountDF", "Enter The Right Amount");
    }else if(myTrim(indpamount) < Number(fixedamount)){
			printError("indpamountDF", " Amount Below expected");
		} else{
            var rem = Number(indpamount)%Number(fixedamount);
            if(Number(rem) == 0){
              printError("indpamountDF", "");
              indpamountDF = false;
            }else{
              var vse = Number(indpamount)/Number(fixedamount);
              var vseSg = vse.toFixed(0)
              var vseSg2 = Number(vseSg)-1;
              var rightF1 = Number(fixedamount)*Number(vseSg);
              var rightF2 = Number(fixedamount)*Number(vseSg2);
              printError("indpamountDF", "Amount Not Accepted. Recommended &#x20A6;"+rightF1+" or &#x20A6;"+rightF2);
            }
        }
    }
  /*
    if(document.querySelector('input[name="indppm"]:checked')){
      indppm = document.querySelector('input[name="indppm"]:checked').value
      console.log(indppm)
    }else{
      console.log("na error o")
    }*/

    if(myTrim(indppm) == "") {
        printError("indppmDF", " Select Payment Method");
    } else {
    //if(myTrim(indppm) === "checked"){
    if(myTrim(indppm) == "cash" || myTrim(indppm) == "transfer" || myTrim(indppm) == "pos" || myTrim(indppm) == "deposit"){
          printError("indppmDF", "");
          indppmDF = false;
		} else{
        	printError("indppmDF", "No payment method selected");
        }
    }

		if(myTrim(indpnote) == "") {
        printError("indpnoteDF", "");
    } else {
        // Check if its lesser than 0
        if(myTrim(indpnote).length < 2) {
            printError("indpnoteDF", "Enter a valid note");
        } else{
            printError("indpnoteDF", "");
            indpnoteDF = false;
        }
    }
		// Prevent the form from being submitted if there are any errors
	if ((indpamountDF || indppmDF || indpnoteDF) == true) {
	   return false;
    } else {
      acdpserve(kcns);
    }
}
function acdpserve(kcns) {
  var imgdate1 = Date.now(); //for network timing
  var indpamount  = document.getElementById("indpamount").value;
  var indppm  = document.acdpform.indppm.value;
	var indpnote  = document.getElementById("indpnote").value;
  //hidden
  var fixedamount = document.getElementById("indpfxin").value;
  var indpmthid = document.getElementById("indpmthid").value;
  var indpmth = document.getElementById("indpmth").value;
  var acmemid = kcns;
  var indpammlt = Number(indpamount)/Number(fixedamount);

  $("#acindpsm").hide();
  $("#acindpsmdb").show();

  $.ajax({
		type: "POST",
		url: "https://dspgattendance.000webhostapp.com/n68ui6753tn1/api/mg/",
		dataType: "json",
		data: {drientr: drientr, flientr: flientr, acmemid: acmemid, indpamount: indpamount, indppm: indppm, indpnote: indpnote, fixedamount: fixedamount, indpmthid: indpmthid, indpmth: indpmth, indpammlt: indpammlt},
		success: function(data){
      var slf = data;
      if(slf.ErrorNote == "none"){
        //dpFixdpay(kcns);
        document.getElementById("acdppaymsg").innerHTML = `<div class="col-lg-12">
                                                                  <div class="alert alert-success alert-dismissible fade show" role="alert" style="margin-top: 40px;">
                                                                  <i class="bi bi-check-circle me-1"></i>
                                                                  Successful!
                                                                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                                  </div>


                                                            </div>`;
         whatallbal();
         dpFixdpay(kcns);
      }else{
        $("#acindpsmdb").hide();
        $("#acindpsm").show();
        document.getElementById("acdppaymsg").innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                                                <i class="bi bi-exclamation-octagon me-1"></i>
                                                                Ooops! Something went wrong. Please refresh...
                                                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                          </div>`;
      }
		},
    error : function(jqXHR, textStatus, errorThrown) {
          if(jqXHR.responseText == "reload404"){window.location.reload()}
      var imgdate2 = Date.now();
      var alldate = imgdate2 - imgdate1;
      //var networkshow = onlineoffline();

      if(alldate > 30000){ //30 secs
      //if (onlineoffline() == 0) {} //THIS CHECKS NETWORK IN THE REMOTE SERVER
        document.getElementById("acdppaymsg").innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                                                <i class="bi bi-exclamation-octagon me-1"></i>
                                                                Ooops! Please Check your network and refresh...
                                                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                          </div>`;
      }else{
        document.getElementById("acdppaymsg").innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                                                <i class="bi bi-exclamation-octagon me-1"></i>
                                                                Ooops! This is not your fault. Please refresh...
                                                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                          </div>`;
      }
      $("#acindpsmdb").hide();
      $("#acindpsm").show();
  }

	});
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
