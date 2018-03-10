import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout} from  "./common/Frame/Layout";
import {connect} from "react-redux";

import axios from "axios";

class AppComponent extends Component {

  constructor(props){
        super(props); 
  }

  componentWillMount(){
    
  }

  render() {
    return (
      <div> 
              <Layout />
      </div>
    );
  }
}

const appComponentMapStateToProps = (state)=>{
    return {
     
    }
}

export const App = connect(appComponentMapStateToProps)(AppComponent) ;
