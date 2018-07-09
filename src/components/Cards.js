import React, { Component }  from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import compose from 'recompose/compose';
import {
  withRouter
} from 'react-router-dom'
import Profile from './Profile';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height:200,
    paddingTop: '56.25%', // 16:9
  },
  FlexCenterH: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center"
  }
};

class Profiles extends Component {
  constructor(props) {
    super(props);   
    this.goToProfile = this.goToProfile.bind(this);
  } 
 
  render() {
  const { classes } = this.props;
  let that = this;
  return (
    <div>
        {this.props.profileList.map(function(data, index) {
           return <Card className={classes.card} key={ index }>
                <CardMedia
                    className={classes.media}
                    image={data.imageurl}
                    title="Contemplative Reptile"
                />
                   <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
          {data.title}
          </Typography>
          <Typography component="p">
            {data.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.FlexCenterH}>         
        <Button  size="small" color="primary" onClick={(e) =>  that.props.history.push(`/profile-details/${data.id}`)}>Read More
  </Button> 
        </CardActions>
            </Card>
        })}      
    </div>
  );
}
goToProfile(data, event) {
  console.log(data);
  //browserHistory.push('/')
}
}


export default compose(
  withRouter,
  withStyles(styles)  
 )(Profiles)

  