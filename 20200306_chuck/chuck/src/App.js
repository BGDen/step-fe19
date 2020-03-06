import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      jokes : []
    }
  }
  handleClickJoke(){
    fetch('http://api.icndb.com/jokes/random/').then(a=>a.json()).then(d=>{
      if(this.state.jokes.find(el => el.id === d.value.id)){
        console.log('double joke');
        this.handleClickJoke();
        return false;
      }

      const jokes = this.state.jokes.slice();
      console.log(jokes, d);
      jokes.unshift(d.value);
      this.setState({ jokes });
    })
  }
  render(){
    return (
      <div>
        <div>
          <button onClick={()=>this.handleClickJoke()}>Get Joke</button>
        </div>
        <ListOfJokes jokes={this.state.jokes}/>
      </div>
    );
  }
}

function ListOfJokes(props){
  return(
    <div>
      {props.jokes.map(el=><p key={el.id}>{el.joke}</p>)}
    </div>
  )
}

export default App;
