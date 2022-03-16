tapeonrole();
function tapeonrole() {
    var mqutfvpc = "mqutfvpc";
    
    $.ajax({
        type: "POST",
        url: "api/dr/", 
        data: {mqutfvpc: mqutfvpc},
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
            url: "api/dr/", 
            data: {tztoxqwj: tztoxqwj, },
            success: function(LogOutVotersData){
                //$("#SignHer").html(LogOutVotersData);  
                document.cookie = "drientr= 0 ; expires=Thu, 18 Dec 1999 12:00:00 UTC; path=/";
                document.cookie = "flientr= 0; expires=Thu, 18 Dec 1999 12:00:00 UTC; path=/";
                window.location.reload();
            } 
        });
    
}