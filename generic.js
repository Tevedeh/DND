function buildQuery(directory, file, key1, val1){
    //"<td><a href=\"Spell.html?spell="+ i + "\">" + response.results[i]["name"] + "</a></td></tr>";
    var send = "<a href=\"" + directory + "/" + file + ".html?" + key1 + "=" + val1 + "\">";
    
    return send;
}