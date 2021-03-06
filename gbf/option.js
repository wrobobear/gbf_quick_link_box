
//參考資源網址:https://github.com/Tzuhui/ticket-extension/blob/master/options.js

//用來儲存常用URL
function save_function()
{
	var boxURL = document.getElementById('boxURL').value;
	var URLx1= document.getElementById('URLx1').value;
	var URLx2= document.getElementById('URLx2').value;

	/*依模型新增
	var 自訂= document.getElementById('自訂').value;
	*/
	//依上方格式新增


	//alert("儲存");

	chrome.storage.local.set({
    		'boxURL':boxURL,
		'URLx1':URLx1,
		'URLx2':URLx2
		/*模型
		,'自訂':自訂
		*/

		//依上方格式新增
  	}, function() {
		setTimeout(() => {
      status.textContent = '';
    }, 750);
});
}

//重新整理時會加載上次紀錄的資料
function restore_options() {
//get內的'boxURL'...等加【,】後新增
  chrome.storage.local.get(['boxURL','URLx1','URLx2'], items => {
    if (items) {
      document.getElementById('boxURL').value = items.boxURL;
      document.getElementById('URLx1').value = items.URLx1;
      document.getElementById('URLx2').value = items.URLx2;

	/*模型:
	document.getElementById('自訂').value = items.自訂;
		*/
	//依上方格式新增

    }
  });
}


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_function);