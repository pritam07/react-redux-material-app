import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import logo from '../logo.svg';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
const styles = {
    root: {
        flexGrow: 1,
      },
      flex: {
        flex: 1,
      },
      menuButton: {
        marginLeft: -12,
        marginRight: 20,
      },
      links: {
          width: "100px",
          color: "#fff"
      }
};
class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };
  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <img src={logo} className="App-logo" alt="logo" />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
             
            </Typography>
            <div className={classes.links}><Link className="link" to="/">Home</Link></div>
            <div className={classes.links}><Link className="link" to="/profiles">Profiles</Link></div>           
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);