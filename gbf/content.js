chrome.runtime.onMessage.addListener(

	//接收tab發出來的訊號
  function(request, sender, sendResponse) {

    if (request.greeting == "boxURL")
{
	//alert("get");
	var temp;
	
	chrome.storage.local.get(['boxURL'], items => 
	{
    	if (items) 
	{
      		temp=items.boxURL;

    	}
  	});
	//跳轉網頁用法
	setTimeout(function(){document.location.href = temp},500);

}
else if(request.greeting == "URLx1")
{
	var temp;
	chrome.storage.local.get(['URLx1'], items => 
	{
    	if (items) 
	{
      		temp=items.URLx1;

    	}
  	});
	setTimeout(function(){document.location.href = temp},500);

}
else if(request.greeting == "URLx2")
{
	var temp;
	chrome.storage.local.get(['URLx2'], items => 
	{
    	if (items) 
	{
      		temp=items.URLx2;

    	}
  	});
	setTimeout(function(){document.location.href = temp},500);

}
  	//setTimeout(function(){document.location.href = temp},500);

/*依照模型新增
else if(request.greeting == "自訂")
{
	var temp;
	chrome.storage.local.get(['自訂'], items => 
	{
    	if (items) 
	{
      		temp=items.自訂;

    	}
  	});
	setTimeout(function(){document.location.href = temp},500);

}

*/


}
);