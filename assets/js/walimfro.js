var drientr = getCookie("drientr");
var flientr = getCookie("flientr");
tapeonrole();
function tapeonrole() {
    var mqutfvpc = "mqutfvpc";

    $.ajax({
        type: "POST",
        url: "https://dspgattendance.000webhostapp.com/n68ui6753tn1/api/dr/",
        data: {drientr: drientr, flientr: flientr, mqutfvpc: mqutfvpc},
        success: function(data){
           $("#dvygedtuxxzqtcnwsfjhvra").html(data);
            if(fiddle == "0"){
                window.location.href = "registerlogin.html";
            }
        }
    });
}
function logout() {
        var tztoxqwj = "tztoxqwj";
        $.ajax({
            type: "POST",
            url: "https://dspgattendance.000webhostapp.com/n68ui6753tn1/api/dr/",
            data: {tztoxqwj: tztoxqwj, },
            success: function(LogOutVotersData){
                //$("#SignHer").html(LogOutVotersData);
                document.cookie = "drientr= 0 ; expires=Thu, 18 Dec 1999 12:00:00 UTC; path=/";
                document.cookie = "flientr= 0; expires=Thu, 18 Dec 1999 12:00:00 UTC; path=/";
                window.location.reload();
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
