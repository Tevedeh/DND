var i = 0;
var j = 0;
var url1 = "http://www.dnd5eapi.co/api/classes/";
var url2 = "";

function loadUsers(class_){
    url2 = class_;
    console.log(url1+url2);
	var http = new XMLHttpRequest();
	http.onreadystatechange = function(){
        console.log(http.readyState);
		if(http.readyState == 4){
            var response = JSON.parse(http.responseText);
            console.log(JSON.stringify(response));
			}
		}
	
	http.open("GET", url1 + url2, true);
	http.send();
}

var qsParm = new Array();
function qs() {
	var query = window.location.search.substring(1);
	console.log(query);
    var parms = query.split('&');
    for (var i=0; i < parms.length; i++) {
        var pos = parms[i].indexOf('=');
        if (pos > 0) {
            var key = parms[i].substring(0, pos);
            var val = parms[i].substring(pos + 1);
            qsParm[key] = val;
        }
    }
    console.log(qsParm["spell"]);
    console.log(qsParm["hi"]);
}

function buildQuery(directory, file, key1, val1){
    //"<td><a href=\"Spell.html?spell="+ i + "\">" + response.results[i]["name"] + "</a></td></tr>";
    var send = "<a href=\"" + directory + "/" + file + ".html?" + key1 + "=" + val1 + "\">";
    
    return send;
}