import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {MyAvatar} from '../subcomponents/MyAvatar';
import Paper from 'material-ui/Paper';

const style = {
  paper:{
    height: 440,
    width: '95%',
    margin: '2%',
    textAlign: 'center',
    display: 'inline-block',
    overflowY: 'hidden',
  },
  card: {
    width: '80%',
    height: 150,
    textAlign: 'center',
    margin: 'auto'
  }
}

const Home = () => (
  <Paper style={style.paper} zDepth={3} >
    <div className="avatar">
      <MyAvatar size={170}/>
    </div>
    <Card style={style.card}>
      <CardTitle title="Mati Borlak" subtitle="Full Stack Developer (available for hire)"/>
      <CardText>
        "Believe you can and you're halfway there." -Theodore Roosevelt
      </CardText>
      <CardActions>
      </CardActions>
    </Card>
  </Paper>
);

export {Home};