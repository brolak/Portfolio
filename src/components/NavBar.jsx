import React from 'react';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import GitHubIcon from './subcomponents/GitHubIcon';

//tab index converted to title on app bar
const indexToTitle = (value) => {
    switch(value) {
    case 0:
        return "Home"
        break;
    case 1:
        return "Projects"
        break;
    case 2:
        return "Contact"
        break;
    }
} 

//top bar displaying title (also menu?)
const NavBar = (props) => (
	<AppBar
	    		title={indexToTitle(props.slideIndex)}
	    		showMenuIconButton = {false}
	    		zDepth = {0}
	    		iconElementRight={<GitHubIcon />}
	/>
);

export default NavBar;

