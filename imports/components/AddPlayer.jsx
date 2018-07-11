import React, { Component } from 'react';

class AddPlayer extends Component {

  handleSubmit = function (event) {
    event.preventDefault();
    let name = event.target.playerName.value;
    if (name) {
      event.target.playerName.value = '';
      Players.insert({
        name: name,
        score: 0
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder='Enter Name' name="playerName" type="text" />
        <button >Add Player</button>
      </form>
    );
  }
}

export default AddPlayer;