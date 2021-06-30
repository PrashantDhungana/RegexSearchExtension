console.log("This is a background test");
chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab){
	let msg = {
		txt : "Namastey"
	}
	chrome.tabs.sendMessage(tab.id, msg);
}