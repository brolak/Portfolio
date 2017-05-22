import React from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: '95%',
  margin: '2.5%',
  textAlign: 'center',
  display: 'inline-block',
};

const Contact = () => (
	<Paper style={style} zDepth={1} >
		This is my contact info
	</Paper>
);

export default Contact;