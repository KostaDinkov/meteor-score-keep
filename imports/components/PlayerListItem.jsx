import React, { Component, Fragment } from 'react';

class PlayerListItem extends Component {
  render() {
    const id = this.props.data._id;
    const name = this.props.data.name;
    const score = this.props.data.score;
    return (
      <div className='item'>
        <div className='player'>
          <div>
            <h3 className='player__name'>
              {name}
            </h3>
            <p className='player__stats'>
              {score} point(s).
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