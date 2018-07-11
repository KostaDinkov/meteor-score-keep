import React, { Component, Fragment } from 'react';

class PlayerListItem extends Component {
  render() {
    const id = this.props.data._id;
    const name = this.props.data.name;
    const score = this.props.data.score;
    return (
      <Fragment>
        <p>
          {name} has {score} point(s).
              <button onClick={() => { Players.update(id, { $inc: { score: 1 } }) }}>+</button>
          <button onClick={() => { Players.update(id, { $inc: { score: -1 } }) }}>-</button>
          <button onClick={() => Players.remove(id)}>X</button>
        </p>
      </Fragment>
    );
  }
}

export default PlayerListItem;