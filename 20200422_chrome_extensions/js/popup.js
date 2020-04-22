const btnChangeColor = document.querySelector('#btn-change-color');

chrome.storage.sync.get('color', data => {
    btnChangeColor.style.backgroundColor = data.color;
    btnChangeColor.innerText = data.color;
    btnChangeColor.dataset.color = data.color;
});

btnChangeColor.addEventListener('click' , _ => {
    const color = btnChangeColor.dataset.color;
    chrome.tabs.query({
        active : true,
        currentWindow : true
    },
    tabs => {
        console.log(tabs);
        chrome.tabs.executeScript(
            tabs[0].id,
            {
                code : `document.body.style.backgroundColor = "${color}";`
            }
        );
    });
});