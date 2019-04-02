toggle2 = 0;
document.addEventListener('click', function(event){
chrome.runtime.sendMessage({action: event.target.id});
    });

chrome.runtime.onMessage.addListener(function(message) {
    var y = message.toggler;
     });
