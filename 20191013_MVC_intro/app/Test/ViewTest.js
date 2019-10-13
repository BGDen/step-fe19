export class ViewTest{
    constructor(callback){
        this.source = document.querySelector('.test');
        this.result = document.querySelector('.outResult');
        this.source.addEventListener('click', callback);
    }
    render(question){
        this.source.innerHTML = `
<h3>${question.question}</h3>
<div class="list-group">
    ${question.answers.map(el => `<span class="list-group-item list-group-item-action listAnsw">${el}</span>`).join(' ')}
</div>`;
    }

    renderResult(data){
        this.source.innerHTML = `
            <p>Правильные ответы: ${data.right}</p>
            <p>Неправильные ответы: ${data.wrong}</p>
        `;
        // let event = new MouseEvent("click", {
        //     bubbles: true,
        //     cancelable: true,
        //     target : document.querySelector('.btn.btn-primary')
        //   });
        
    }
}