//react,mui,tabs,icons,swipeview
import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import SwipeableViews from 'react-swipeable-views';

//pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

//icons
import ActionHome from 'material-ui/svg-icons/action/home';
import NavigationApps from 'material-ui/svg-icons/navigation/apps';
import SocialPerson from 'material-ui/svg-icons/social/person';

const pages = [
	{
		component: <Home />, 
		icon: <ActionHome />,
		value: 0
	},
	{
		component: <Projects />,
		icon: <NavigationApps />,
		value: 1
	},
	{
		component: <Contact />,
		icon: <SocialPerson />,
		value: 2
	}
]

const tabs = () => (
	pages.map((page) => <Tab key={page.value} icon={page.icon} value={page.value} />)
)

const views = () => (
	pages.map((page) => <div key={page.value}>{page.component}</div>)
)

const Display = (props) => (
 <div>
	<Tabs
	  	onChange={props.handleSlide}
    	value={props.slideIndex}
	>
		{tabs()}
    </Tabs>
	<SwipeableViews
	  	index={props.slideIndex}
	  	onChangeIndex={props.handleSlide}
	>
		{views()}
    </SwipeableViews>
</div>
);

export default Display;