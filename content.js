let paragraphs = document.getElementsByTagName('p');
let images = document.getElementsByTagName('img');

chrome.runtime.onMessage.addListener(DisplayPopup);
chrome.runtime.onMessage.addListener(imageChange);

function gotMessage(message, sender, sendResponse){
	if(message.txt == "Namastey"){
		for(x of paragraphs){
			x.style['background-color'] = "#FF6633";
		}
	}
}


function DisplayPopup(message, sender, sendResponse){
	for(x of paragraphs){
			x.innerHTML = message.txt;
		}

}

function imageChange(message, sender, sendResponse){
	if(message.txt == "Namastey"){
		for(img of images){
			let url = chrome.extension.getURL("images/code.jpg");
			img.src = url;
			console.log(url);
		}
	}
}


