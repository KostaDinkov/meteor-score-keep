import Players from './../imports/api/players';
import {Meteor} from 'meteor/meteor';


console.log(Players.find().fetch());
