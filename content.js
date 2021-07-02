let paragraphs = document.getElementsByTagName('p');
let images = document.getElementsByTagName('img');

chrome.runtime.onMessage.addListener(FindText);
// chrome.runtime.onMessage.addListener(imageChange);


function FindText(message, sender, sendResponse){
	let html = document.body.textContent;
	let query = message.txt;

	query = String.raw `${query}`;
	let re = new RegExp(query,'g');
	let matches = html.match(re);

	for(match of matches){
		console.log(match);
	}



}

// function imageChange(message, sender, sendResponse){
// 	if(message.txt == "Namastey"){
// 		for(img of images){
// 			let url = chrome.extension.getURL("images/code.jpg");
// 			img.src = url;
// 			console.log(url);
// 		}
// 	}
// }


