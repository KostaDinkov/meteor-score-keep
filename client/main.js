import React from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import PlayerList from './../imports/components/PlayerList';
import TitleBar from './../imports/components/TitleBar'
import AddPlayer from './../imports/components/AddPlayer'
import "./main.html";

Meteor.startup(() => {
  Tracker.autorun(() => {
    const App = (
      <div>
        <TitleBar title="Score Keep App"/>  
        <PlayerList />
        <AddPlayer />
        
      </div>
    )
    ReactDom.render(App, document.getElementById('app'));
  });
})








