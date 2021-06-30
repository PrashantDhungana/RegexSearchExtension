console.log("This is a background test");
chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(){
	console.log("button clicked");	
}