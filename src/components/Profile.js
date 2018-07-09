import React, { Component } from 'react';
import Profiles from './Cards';
import axios from 'axios';
import { connect } from "react-redux";
import { addProfile } from "../actions/index";

const mapStateToProps = state => {
   return { profiles: state.profiles };
};
const mapDispatchToProps = dispatch => {
  return {
    addProfile: profile => dispatch(addProfile(profile))
  };
};
class Profile extends Component {  
  constructor(props) {
    super(props);    
  }
  componentDidMount() {    
    var th = this;
    if(th.props.profiles.length === 0) {
      console.log('print this')
      this.serverRequest =
        axios.get('./resources/profiles.json')
          .then(function(result) {         
          th.props.addProfile(result.data.profiles);
          });
      }
  }
  render() {
    const {profiles}  = this.props;  
    return (
      <div className="Profile">     
       <Profiles profileList={profiles} />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
