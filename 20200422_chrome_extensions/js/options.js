(
    _ => {
        const btnContainer = document.querySelector('.btns-container');
        const chooserText = document.querySelector('.hide');

        ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'].forEach(color => {
            const btn = document.createElement('button');
            btn.classList.add('m10');
            btn.style.backgroundColor = color;
            btn.addEventListener('click', _=>{
                chrome.storage.sync.set({color}, _=>{
                    console.log(`Now color is ${color}`);
                    chooserText.style.display = 'block';
                    chooserText.style.color = color;
                });
            });

            btnContainer.appendChild(btn);
        });
    }
)();