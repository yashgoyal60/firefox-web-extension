// background-script.js
"use strict";
var submit_button = document.getElementById('submit_button');
var text = document.getElementById('textarea');


submit_button.addEventListener('click',()=>{
	console.log('done');
	console.log(text.value);
	text.setAttribute("placeholder","text.value");
	var lines = text.value.split('\n');	

	console.log(lines);

	browser.tabs.query({
    currentWindow: true,
    active: true
  }).then(sendMessageToTabs).catch(onError);

	function sendMessageToTabs(tabs) {
  for (let tab of tabs) {
    browser.tabs.sendMessage(
      tab.id,
      {greeting: text.value}
    ).catch(onError);
  }
}
})



function onError(error) {
  console.error(`Error: ${error}`);
}







