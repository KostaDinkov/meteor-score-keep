import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import PlayerListItem from './PlayerListItem';


class PlayerList extends Component {
  render() {
    const players = this.props.players;

    if (players.length === 0) {
      return (
        <div className='item'>
          <p className='item__message'>Player list is empty.Please add new players.</p>

        </div>
      )
    }
    else {
      return (
        <FlipMove
          easing='cubic-bezier(0,0.7,0.8,0.1)'
          maintainContainerHeight
        >
          {players.map(p =>
            <PlayerListItem key={p._id} player={p} />
          )}
        </FlipMove>)
    }


  }
}

export default PlayerList;