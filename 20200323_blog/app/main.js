// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App.js';
class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: []
      }
      this.link = 'https://spreadsheets.google.com/feeds/list/17NBI-hzWia-BdvA3p1W2UgYzoBapTc8pMIQDXRPnoY4/od6/public/values?alt=json';
      this.loadMessages();

   }

   loadMessages() {
      fetch(this.link).then(d => d.json()).then(msgs => {
         console.log(msgs);
         const data = msgs.feed.entry.map(el=>{
            return {
               id : el.gsx$id.$t,
               author : el.gsx$author.$t,
               authorimg : el.gsx$authorimg.$t,
               text : el.gsx$text.$t,
               date : el.gsx$date.$t
            }
         });
         console.log(data);
         this.setState({data});
      });
   }

   render() {
      return (<div>
         {this.state.data.map((msg)=><Message data={msg} key={msg.id}/>)}
      </div>);
   }
}

function Message(props) {
   return (<div className="card mb-3 w-2">
      <div className="row no-gutters">
         <div className="col-md-4">
            <img src={props.data.authorimg} className="card-img" alt="author icon" />
          </div>
         <div className="col-md-8">
            <div className="card-body">
               <h5 className="card-title">{props.data.author}</h5>
               <p className="card-text">{props.data.text}</p>
               <p className="card-text"><small className="text-muted">{props.data.date}</small></p>
            </div>
         </div>
      </div>
   </div>);

}

ReactDOM.render(<App />, document.querySelector('#mainApp'));
