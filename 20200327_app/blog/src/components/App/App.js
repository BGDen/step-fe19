import React from 'react';
import './App.css';
import { Message } from '../Message/Message';

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
              date : el.gsx$date.$t,
              categories : el.gsx$categories.$t.split(', ')
           }
        });
        console.log(data);
        console.log(JSON.stringify(data));
        this.setState({data});
     });
  }

  render() {
     return (<div className='App'>
        {this.state.data.map((msg)=><Message data={msg} key={msg.id}/>)}
     </div>);
  }
}

export default App;
