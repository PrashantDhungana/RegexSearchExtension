let paragraphs = document.getElementsByTagName('p');


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
	if(message.txt == "Namastey"){
		for(x of paragraphs){
			x.style['background-color'] = "#FF6633";
		}
	}
}