import React, { Component } from 'react';
import { connect } from "react-redux";
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {
  withRouter
} from 'react-router-dom'
const styles = {
  FlexCenterH: {
    display: "flex",
    justifyContent: "center"
  },
  profileFlexCenterV: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: "calc(100vh - 120px)"    
  },
  FlexCenterV: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: "calc(100vh - 120px)",    
  },
  media: {
    height:200,
    paddingTop: '56.25%', // 16:9
  },
  root: {
    overflow: 'hidden',
    padding: `15px`,
  },
  wrapper: {
    maxWidth: 400,
  },
  paper: {
    margin: 10,
    padding: 15,
  },
  avatar: {
    width: 150,
    height: 150
  }
};
const mapStateToProps = state => {
  return { profiles: state.profiles };
};
class ProfileDetail extends Component {
  constructor(props) {
    super(props);    
    let paramId = this.props.match.params.id;   
    const {profiles} = this.props;  
    this.singleProfile = profiles.find(x => {return x.id == paramId });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="profile">
      {this.singleProfile ?<div className={classes.profileFlexCenterV}>
      <Paper className={classes.paper}>      
      <Grid container wrap="nowrap" spacing={16}>
        <Grid item>
          <Avatar className={classes.avatar}><img className={classes.avatar} src={"."+this.singleProfile.imageurl}/></Avatar>
        </Grid>
        <Grid item xs>
        <h1>{this.singleProfile.title}</h1> 
        <p><strong></strong></p>
          <Typography>{this.singleProfile.description}</Typography>
        </Grid>
      </Grid>
    </Paper> </div>: <h3 className={classes.FlexCenterV}>Sorry No Data Found</h3>}
      </div>
    );
  }
}
export default compose(
  withRouter,
  withStyles(styles),
  connect(mapStateToProps)
)(ProfileDetail)

