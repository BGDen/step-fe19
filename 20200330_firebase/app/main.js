const config = {
    apiKey: "AIzaSyCwJwzh2t49HytGT1HVx7lqO1AXXTNjgkc",
    authDomain: "step-front-test.firebaseapp.com",
    databaseURL: "https://step-front-test.firebaseio.com",
    projectId: "step-front-test",
    storageBucket: "step-front-test.appspot.com",
    messagingSenderId: "314827625672",
    appId: "1:314827625672:web:d145325afdedc409eac1fd"
    };
firebase.initializeApp(config);

// Get a reference to the database service
// const database = firebase.database();

function loadData(){
    // firebase.database().ref('messages').once('value').then(function(snapshot) {
    
    //     console.log(snapshot);
    // });
    const msg1 = firebase.firestore().collection('messages').doc('MGHcZRaL92BxtL1wAafV');
    // const msg1 = firebase.firestore().collection('messages');
    // console.log(msg1);
    msg1.get().then(d=>{
        if(d.exists){
            console.log('Data from firestore: ', d.data());
        }else{
            console.log('No data in firestore');
        }

    });


}


document.querySelector('.btn-load').addEventListener('click', loadData);
document.querySelector('.btn-set').addEventListener('click', () => {
    const data = JSON.parse(document.querySelector('.area-data').value);
    const dbMsg = firebase.firestore().collection('messages').doc('messages');
    dbMsg.set({
        list : data
    });
});