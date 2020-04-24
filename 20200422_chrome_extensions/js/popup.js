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
                code : `document.body.style.backgroundColor = "${color}";
                document.body.style.cursor = "url('https://so2niko.github.io/step-fe19/20200422_chrome_extensions/img/arrow.cur'), auto";`
            }
        );
    });
});