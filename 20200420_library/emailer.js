class Emailer{
    static send = (to, subject, text) =>{
        const emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        //Обрезка длины темы письма до 78 символов
        if(subject.length > 78){
            console.log('Subject woas to long. We separated it');
            subject = subject.slice(0, 78);
        }

        const link = `https://script.google.com/macros/s/AKfycbxjy6oYJz9bNkjXPxcWlXQ291yhXiMwf9DjFAK_ATC1nicPlxAl/exec?to=${to}&subj=${subject}&text=${text}`;

        if(!emailRE.test(to)){
            console.log('Error. Wrong email address');
            return 'Error. Wrong email address';
        }

        console.log(`Data was sent to ${to}`);
        return fetch(link, {
            mode : 'no-cors'
        });
    }
}