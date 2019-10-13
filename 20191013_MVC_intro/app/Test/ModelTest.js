export class ModelTest{
    constructor(){
        this.answers = [];
        this.questionsArrLength = 0;
        this.analy = {
            right : 0,
            wrong : 0
        };
    }

    loadData(){
        return fetch('app/data/data.json')
            .then(data => data.json())
            .then(dataArr =>{
                this.data = dataArr;
                this.questionsArrLength = this.data.length;
            });
    }

    getData(num){
        return (num < this.questionsArrLength)? this.data[num]: false;
    }

    setAnswer(num, answer){
        this.answers.push({num, answer});
    }

    checkTest(){
        this.answers.forEach((el) => {
            if(el.answer == this.data[el.num].right){
                this.analy.right++;
            }else{
                this.analy.wrong++;
            }
        });

        return this.analy;
    }
}