import React, { Component } from 'react';
import Players from './../api/players'

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
      <div className="item">
      <form className = 'form' onSubmit={this.handleSubmit} >
        <input className='form__input' placeholder='Enter Name' name="playerName" type="text" />
        <button className='button' >Add Player</button>
      </form>
      </div>
      
    );
  }
}

export default AddPlayer;