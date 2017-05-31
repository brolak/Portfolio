import React from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import {ChipArray} from '../subcomponents/ChipArray';

const style = {
  height: 440,
  width: '95%',
  margin: '2.5%',
  textAlign: 'center',
  display: 'inline-block',
};

const Contact = () => (
	<Paper style={style} zDepth={2} >
		This is my contact info
	</Paper>
);

export {Contact};