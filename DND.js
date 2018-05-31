var i = 0;
var j = 0;
var url1 = "http://www.dnd5eapi.co/api/";
var url2 = "spells";

function loadUsers (){
	var http = new XMLHttpRequest();
	http.onreadystatechange = function(){
        console.log(http.readyState);
		if(http.readyState == 4){
            var response = JSON.parse(http.responseText);
            console.log(JSON.stringify(response));
			clearBox("div1");
			var tbl=$("<table/>").attr("name","mytable");
            $("#div1").append(tbl);
            console.log(response.results.length);
		    $("#mytable").append("<tr>" + "<th>ID</th>" + "</tr>");
 				var count = 0;
 				if(i == response.results.length){
 					i=0;
 				}
		    for (i = i; i < response.results.length; i++) {
			    if(count == 10){
			    	break;
			    }
			    var tr="<tr>";
                var td1="<td>"+response.results[i]["name"]+"</td></tr>";
                console.log(response.results[i]["name"]);
		        count++;
		       $("#mytable").append(tr+td1); 
			}
		}
	}
	http.open("GET", url1 + url2, true);
	http.send();
}

function getSpecificUser() {
	var http = new XMLHttpRequest();
	http.onreadystatechange = function(){
		if(http.readyState == 4){
			var response = JSON.parse(http.responseText);
			clearBox("div1");
			var tbl=$("<table/>").attr("id","mytable");
		    $("#div1").append(tbl);
		    $("#mytable").append("<tr>" + "<th>ID</th>" + "<th>Status</th>" + 
		    	"<th>User Name</th>" + "<th>Interests</th>" + "<th>Biography</th>" + "</tr>");
 				var count = 0;
 				if(i == response.users.length){
 					i=0;
 				}
		    for (i = i; i < response.users.length; i++) {
			    if(count == 10){
			    	break;
			    }
			    var tr="<tr>";
		        var td1="<td>"+response.users[i]["id"]+"</td>";
		        var td2="<td>"+response.users[i]["status"]+"</td>";
		        var td3="<td>"+response.users[i]["userName"]+"</td>";
		        var td4="<td>"+response.users[i]["interests"]+"</td>";
		        var td5="<td>"+response.users[i]["bio"]+"</td></tr>";
		        count++;
		       $("#mytable").append(tr+td1+td2+td3+td4+td5); 
			}
		}
	}
    var x, y, text;
    id = document.getElementById("UserID").value;
    var request = url2 + "/ben/users/" + id;
   
    http.open("GET", request, true);
	http.send();
}


function goAdminHome() {
	 window.location="AdminHome.html";
}

function goAdminUser() {
	window.location="AdminUser.html";
}

function goModerator() {
	window.location="../Moderator/ModeratorHome.html";
}

function goLogin() {
	window.location="../Login.html";
}

function goAdminSpecificUser() {
	window.location="AdminSpecificUser.html";
}

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}