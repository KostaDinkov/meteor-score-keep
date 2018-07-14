import React, { Component, Fragment } from 'react';


import PlayerListItem from './PlayerListItem';

class PlayerList extends Component {
  render() {
    const players = this.props.players;
    if (players.length === 0) {
      return (
        <Fragment>
          <p>Player list is empty.Please add new players.</p>
          {players.map(p =>
            <PlayerListItem key={p._id} data={p} />
          )}
        </Fragment>
      )
    }
    else {
      return (
        <Fragment>
          {players.map(p =>
            <PlayerListItem key={p._id} data={p} />
          )}
        </Fragment>)
    }


  }
}

export default PlayerList;