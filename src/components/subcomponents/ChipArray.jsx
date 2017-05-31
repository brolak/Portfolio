import React from 'react';
// import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
// import FontIcon from 'material-ui/FontIcon';
// import {blue300, indigo900} from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

//images for chip avatars
const mongoImg = require('../../img/mongo.png');
const angularImg = require('../../img/angular.png');
const nodeImg = require('../../img/node.png');
const reactImg = require('../../img/react.svg');
const chromeImg = require('../../img/chrome.png');
const zendeskImg = require('../../img/zendesk.png');

//function for adding avatar image based on chip name
var chipImage = function (value) {
  switch(value) {
    case 'MongoDB':
        return mongoImg;
        break;
    case 'AngularJS':
        return angularImg;
        break;
    case 'Node/Express':
        return nodeImg
        break;
    case 'ReactJS':
        return reactImg;
        break;
    case 'Google Chrome':
        return chromeImg;
        break;
    case 'Zendesk API':
        return zendeskImg;
        break;
    }
}

const ChipArray = (props) => (
      <div style={styles.wrapper}>
          <Chip style={styles.chip}>
            Mati
          </Chip>
      </div>
)

export default {ChipArray};