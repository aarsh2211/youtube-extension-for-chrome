var action = ' ';  
toggle = 1;
toggle2 = 0;
var y;
chrome.runtime.onMessage.addListener(function(message) {
     action = message.action; 
 
    implementAction();
 });
function implementAction()
{
    if(action=='forward')
        { console.log(action);
            chrome.tabs.executeScript(null,{code:'document.querySelector(".ytp-next-button.ytp-button").click()'});
        }
    if(action=='skip')
        { console.log(action);
            toggle = 1 - toggle;
           if(!toggle)
             chrome.tabs.executeScript(null,{code:'document.getElementsByTagName("video")[0].playbackRate = 10'});
        else
             chrome.tabs.executeScript(null,{code:'document.getElementsByTagName("video")[0].playbackRate = 1'});
        }


if(action=='pause')
    {   
        // chrome.tabs.executeScript(null,{code:'console.log(document.getElementsByClassName("ytp-play-button ytp-button")[0]["title"])'});
        chrome.tabs.executeScript(null,{code:'document.querySelector(".ytp-play-button.ytp-button").click()'});

         
  
        chrome.tabs.executeScript(null,{code:'document.getElementsByClassName("ytp-play-button ytp-button")[0].title'}, function(x){
            y=x;
        });
     chrome.runtime.sendMessage({toggler: y});
        
      
    
       
    }
}