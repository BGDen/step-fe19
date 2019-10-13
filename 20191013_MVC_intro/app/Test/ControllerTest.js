import {ModelTest} from '/app/Test/ModelTest.js';
import {ViewTest} from '/app/Test/ViewTest.js';

export class ControllerTest{
    constructor(){
        this.view = new ViewTest(this.checkAnswer.bind(this));
        this.model = new ModelTest();
        this.model.loadData().then(() => this.updateQuestion());
        this.question = 0;
        this.questionClassName = 'listAnsw';
    }

    checkAnswer(ev){
        if(ev.target.classList.contains(this.questionClassName)){
            this.model.setAnswer(
                this.question - 1,
                ev.target.innerText
            );
            this.updateQuestion();
        }
    }

    updateQuestion(){
        const data = this.model.getData(this.question);
        if(data){
            this.view.render(data);
            this.question++;
        }else{
            const result = this.model.checkTest();
            this.view.renderResult(result);
        }
    }
}