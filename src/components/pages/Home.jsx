import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MyAvatar from '../subcomponents/MyAvatar';
import Paper from 'material-ui/Paper';

const style = {
  paper:{
    height: 600,
    width: '95%',
    margin: '2.5%',
    textAlign: 'center',
    display: 'inline-block',
    overflowY: 'hidden',
  },
  card: {
    width: '80%',
    height: 280,
    textAlign: 'center',
    margin: 'auto'
  }
}

const Home = () => (
  <Paper style={style.paper} zDepth={1} >
    <div className="avatar">
      <MyAvatar size={250}/>
    </div>
    <Card style={style.card}>
      <CardTitle title="Mati Borlak" subtitle="Full Stack Developer"/>
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
      </CardActions>
    </Card>
  </Paper>
);

export default Home;