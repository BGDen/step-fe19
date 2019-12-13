const v = new Vue({
    el : "#vue__app",
    data : {
        name : 'Dnipro',
        dob : '700 какой-то',
        imgUrl : 'https://vuejs.org/images/logo.png',
        isShowImage : true,
        students : [
            {
                name : 'Денис',
                height : 185
            },
            {
                name : 'Александр',
                height : 193
            },
            {
                name : 'Даниил',
                height : 196
            }
        ]
    },
    methods : {
        clickShowImgBtn : function(){
            this.isShowImage = !this.isShowImage;
        }
    }
});