const vue = new Vue({
    el : '.vue',
    data : {
        inpData : '',
        apiKey : '58d7638951004aa495513f5703d744f7',
        url : `https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=`,
        newsArr : [],
    },
    methods : {
        getNews : function(){
            fetch(this.fullLink)
                .then(resp => resp.json())
                .then(respData => this.newsArr = respData.articles);
        }
    },
    computed : {
        fullLink : function(){
            return `${this.url}${this.apiKey}&q=${this.inpData}`;
        }
    }
});

