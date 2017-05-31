import React from 'react';

//mui components
import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

//subcomponents
import {GitHubIcon} from '../subcomponents/GitHubIcon';
import {ChipArray} from '../subcomponents/ChipArray';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
  title: {
    
  },
  paper: {
    height: 440,
    width: '95%',
    margin: '2.5%',
    // textAlign: 'center',
    display: 'inline-block',
  }
};

//project images
const notifyImg = require('../../img/notify-me.png');
const movieImg = require('../../img/movie-links.png');
const beerImg = require('../../img/beer_logos.gif');
const pomImg = require('../../img/pomodoro.png');

const projectData = [
  {
    img: notifyImg,
    title: 'Notify-Me',
    github: 'https://github.com/brolak/zenext',
    sub: 'A chrome-extension for advanced Zendesk notifications'
  },
  {
    img: movieImg,
    title: 'Movie Links',
    github: 'https://github.com/brolak/MovieLink',
    sub: 'Interactive movie cast/credit linking social game',
  },
  {
    img: beerImg,
    title: 'The Beer List',
    github: 'https://github.com/brolak/beerlist-angular-start',
    sub: 'A full-stack beer database/API project with user authentication',
  },
  {
    img: pomImg,
    title: 'Pomodoro Clock',
    github: 'https://github.com/brolak/react-clock',
    sub: 'A simple pomodoro clock, with embedded youtube video',
  },
];

const Projects = (props) => (
  <Paper style={styles.paper} zDepth={2}>
   
      <GridList style={styles.gridList} cols={2} cellHeight={300}>
        {projectData.map((tile) => (
          <GridTile
            key={tile.img}
            title={tile.title}
            subtitle={tile.sub}
            actionIcon={<GitHubIcon link={tile.github} />}
            titleStyle={styles.title}
            titleBackground="linear-gradient(to top, #BF360C 0%,#BF360C 70%,rgba(0,0,0,0) 100%)"
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    
  </Paper>
);

export {Projects};