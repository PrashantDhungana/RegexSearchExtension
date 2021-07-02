let txtField = document.getElementById('test')
txtField.addEventListener('input', execute);

function execute(){
	let params = {
		active:true,
		currentWindow:true
	}
	chrome.tabs.query(params, gotTabs);

	function gotTabs(tabs){
		let msg = {
			txt : txtField.value
		}
		chrome.tabs.sendMessage(tabs[0].id, msg);
	}
}
