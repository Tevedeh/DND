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


function loadUsers (){
	var http = new XMLHttpRequest();
	http.onreadystatechange = function(){
        console.log(http.readyState);
		if(http.readyState == 4){
            var response = JSON.parse(http.responseText);
            console.log(JSON.stringify(response));
			clearBox("div1");
            var ul=$("<ul/>").attr("id","mytable");
            
            $("#div1").append(ul);
 				var count = 0;
 				if(i == response.results.length){
 					i=0;
 				}
		    for (i = i; i < response.results.length; i++) {
                /*
			    if(count == 10){
			    	break;
                }
                */
				var value = 2;
			    var tr="<tr>";
				var li="<li>" + buildQuery(".", "spell", "spell", i+1) + response.results[i]["name"] + "</a></li>";
                console.log(response.results[i]["name"]);
		        count++;
		       $("#mytable").append(li); 
            }
            $("#mytable").append("</ul>"); 
		}
	}
	http.open("GET", url1 + url2, true);
	http.send();
}

function buildQuery(directory, file, key1, val1){
	//"<td><a href=\"Spell.html?spell="+ i + "\">" + response.results[i]["name"] + "</a></td></tr>";
	if(directory === ""){
		var send = "<a href=\"" + file + ".html?" + key1 + "=" + val1 + "\">";
	}else{
		var send = "<a href=\"" + directory + "/" + file + ".html?" + key1 + "=" + val1 + "\">";
	}    
    return send;
}

function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("mytable");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}


function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}