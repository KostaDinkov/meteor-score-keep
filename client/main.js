
import React from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import App from '../imports/components/App'

import "./main.html";

Meteor.startup(() => {
  Tracker.autorun(() => {
    ReactDom.render(<App/>, document.getElementById('app'));
  });
})








