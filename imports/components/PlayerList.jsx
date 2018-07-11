import React,{Component,Fragment} from 'react';
import Players from '../api/players'

import PlayerListItem from './PlayerListItem';

class PlayerList extends Component{
  render(){
    const players = Players.find().fetch()
    return(
      <Fragment>
        {players.map(p =>
          <PlayerListItem key ={p._id} data ={p}/>
        )}
      </Fragment>
    )
  }
}

export default PlayerList;