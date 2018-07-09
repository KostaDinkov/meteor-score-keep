import React from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import Players from './../imports/api/players';
import "./main.html";

Meteor.startup(function () {
  Tracker.autorun(function () {
    let players = Players.find().fetch();
    const name = "Percho"
    const Header = (props) => (<h1>Hello, {name}</h1>);
    const PlayerList = (props) => (
      <div>
        {players.map(p =>
          <div key={p._id}>
            <p>{p.name} has {p.score} point(s)</p>
          </div>
        )}
      </div>
    );
    const App = (
      <div>
        <Header />
        <PlayerList/>

      </div>
    )

    ReactDom.render(App, document.getElementById('app'));
  })

})








