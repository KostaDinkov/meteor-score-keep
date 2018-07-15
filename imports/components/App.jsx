import React, { Component } from 'react';
import PlayerList from './PlayerList';
import TitleBar from './TitleBar'
import AddPlayer from './AddPlayer'
import Players, { calculatePlayerPositions } from '../api/players'

class App extends Component {
  render() {
    const players = Players.find({}, {
      sort: { score: -1 }
    }).fetch();
    const positionedPlayers = calculatePlayerPositions(players);
    return (
      <div>
        <TitleBar title="Score Keep App" subtitle={"Created by Kosta"} />
        <div className='wrapper'>
          <PlayerList players={positionedPlayers} />
          <AddPlayer />
        </div>
      </div>
    );
  }
}

export default App;