chrome.runtime.onInstalled.addListener( _=>{
    chrome.storage.sync.set({ color: "#9ffcf9" }, _=>{
        console.log('The color has been changed');
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, _=>{
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions : [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl : {
                            hostEquals : 'developer.chrome.com'
                        }
                    })
                ],
                actions : [
                    new chrome.declarativeContent.ShowPageAction()
                ]
            }
        ]);
    });
});

