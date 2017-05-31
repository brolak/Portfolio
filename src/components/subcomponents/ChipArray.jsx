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

//function for adding avatar image based on chip name
var chipImage = function (value) {
  switch(value) {
    case 'MongoDB':
        return require('../../img/mongo.png');
        break;
    case 'AngularJS':
        return require('../../img/angular.png');
        break;
    case 'Node/Express':
        return require('../../img/node.png');
        break;
    case 'ReactJS':
        return require('../../img/react.svg');
        break;
    case 'Google Chrome':
        return require('../../img/chrome.png');
        break;
    case 'Zendesk API':
        return require('../../img/zendesk.png');
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