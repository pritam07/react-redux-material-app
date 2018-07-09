import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
const styles = {
  FlexCenterH: {
    display: "flex",
    justifyContent: "center"
  },
  FlexCenterV: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: "calc(100vh - 120px)"
  },
  media: {
    height:200,
    paddingTop: '56.25%', // 16:9
  },
};
class Home extends Component {  
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <h3 className={classes.FlexCenterV}>
        Home Page
      </h3>
    );
  }
}

export default withStyles(styles)(Home)
