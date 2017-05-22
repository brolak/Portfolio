import React from 'react';
import Avatar from 'material-ui/Avatar';

const myImage = require('../../img/me.jpg');

const MyAvatar = (props) => (
  		<Avatar src={myImage} size={props.size} />
);

export {MyAvatar};