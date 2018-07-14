import React, { Component } from 'react';
import PlayerList from './PlayerList';
import TitleBar from './TitleBar'
import AddPlayer from './AddPlayer'
import Players from '../api/players'

class App extends Component {
  render() {
    const players = Players.find().fetch();
    return (
        <div>
          <TitleBar title="Score Keep App" subtitle={"Created by Kosta"}/>  
          <PlayerList players = {players}/>
          <AddPlayer />
        </div>
    );
  }
}

export default App;