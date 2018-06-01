var i = 0;
var j = 0;
var url1 = "http://www.dnd5eapi.co/api/spells/";
var url2 = "";

var qsParm = new Array();
var x;

var name ="";
var range = "";
var page = "";
var duartion = "";


function response(url, callback){
	var http = new XMLHttpRequest();
	http.onreadystatechange = function(){
		if(http.readyState == 4){
            callback(JSON.parse(http.responseText));
			}
		}
	
	http.open("GET", url, true);
    http.send();
}

$(document).ready(function(){
    
    getQueryParam();
    response(load);

    
    $("#but1").click(function(){
    });
});

function load(json){
    $("#div1").text(JSON.stringify(json));
}

function parse(){
    
}

function urlBuilder(){
    
}

function getQueryParam() {
    var send = "";
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
}

function buildQuery(directory, file, key1, val1){
    //"<td><a href=\"Spell.html?spell="+ i + "\">" + response.results[i]["name"] + "</a></td></tr>";
    var send = "<a href=\"" + directory + "/" + file + ".html?" + key1 + "=" + val1 + "\">";
    
    return send;
}