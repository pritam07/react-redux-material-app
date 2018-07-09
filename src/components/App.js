import React, { Component } from 'react';
import './App.css';
import Header  from './Header';
import Main from './Main';
import { connect } from "react-redux";
import { addProfile } from "../actions/index";
const mapDispatchToProps = dispatch => {
  return {
    addProfile: profile => dispatch(addProfile(profile))
  };
};
const mapStateToProps = state => {
  // return { articles: state.articles };
};
class App extends Component {
  constructor(props){
    super(props);
 } 
  render() {
    return (
      <div className="App">
       <Header/> 
       <Main/>
      </div>
    );
  }
}



export default App;
