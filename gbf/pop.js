
function goBoxURL()
{
	//alert("goBoxURL");
	var temp;
	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "boxURL"}, function(response) {
    //console.log(response.farewell);
  });
});	
}

function goURLx1()
{
	//alert("goBoxURL");
	var temp;
	
	//把popup的控制訊號都出去給content script接收後操控web的html的dom文件
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "URLx1"}, function(response) {
    //console.log(response.farewell);
  });
});	
}

function goURLx2()
{
	//alert("goBoxURL");
	var temp;
	
	//把popup的控制訊號都出去給content script接收後操控web的html的dom文件
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "URLx2"}, function(response) {
    //console.log(response.farewell);
  });
});	
}

/* 依照此模型新增

function 自訂()
{
	//alert("goBoxURL");
	var temp;
	
	//把popup的控制訊號都出去給content script接收後操控web的html的dom文件
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
 	 chrome.tabs.sendMessage(tabs[0].id, {greeting: "自訂"}, function(response) {
 	   //console.log(response.farewell);
	  });
	});	
}

document.getElementById('自訂').addEventListener('click',自訂);

*/



document.getElementById('boxURL').addEventListener('click',goBoxURL);
document.getElementById('URLx1').addEventListener('click',goURLx1);
document.getElementById('URLx2').addEventListener('click',goURLx2);