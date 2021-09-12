/*document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("startProgram").addEventListener('click', idekAnymore());;     
});
function idekAnymore(){
	//var w4 = document.getElementsByClassName("csgofloat-itemfloat");
	var w4 = document.getElementsByClassName("hover_item_name")[0];
	console.log(w4);

}
chrome.runtime.onInstalled.addListener(function(){
	chrome.storage.sync.set({hide:true}, function(){
		console.log("I FUCKING HOPE THIS WORKS");
	});
});

var yourCustomJavaScriptCode = '...';
var script = document.createElement('script');
var code = document.createTextNode('(function() {' + yourCustomJavaScriptCode + '})();');
script.appendChild(code);
(document.body || document.head).appendChild(script);
*/
chrome.tabs.getSelected(null, function(tab){
	chrome.tabs.executeScript(tab.id, {code: "var w4 = document.getElementsByClassName('csgofloat-itemfloat');"});
	chrome.tabs.executeScript(tab.id, {code: "beginProgram(w4)"});

});