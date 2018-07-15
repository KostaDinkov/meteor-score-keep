import React, { Component } from 'react';

class PlayerListItem extends Component {
  render() {
    const id = this.props.player._id;
    const name = this.props.player.name;
    const score = this.props.player.score;
    const rank = this.props.player.rank;
    const position = this.props.player.position;

    let itemClassName = `item item--position-${rank}`;
    return (
      <div className={itemClassName}>
        <div className='player'>
          <div>
            <h3 className='player__name'>
              {name}
            </h3>
            <p className='player__stats'>
              {position} place - {score} point(s).
          </p>
          </div>
          <div className='player_actions'>
            <button className='button button--round' onClick={() => { Players.update(id, { $inc: { score: 1 } }) }}>+</button>
            <button className='button button--round' onClick={() => { Players.update(id, { $inc: { score: -1 } }) }}>-</button>
            <button className='button button--round' onClick={() => Players.remove(id)}>X</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerListItem;