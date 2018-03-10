import React,{Component} from 'react';

import SideMenu from "./SideMenu";


import {Switch, Route, Redirect,Link} from 'react-router-dom';

import {Container,Nav,NavItem,Row,Col,Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge} from 'reactstrap';


import axios from  "axios";
import { bindActionCreators } from 'redux'
import {connect} from "react-redux";

import "./Layout.css"

import {Home} from "../../components/home/home";
import {Detail} from "../../components/details/details";
import Loading from "../images/loading.gif";


class LayoutComponent extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      loading:false
    };

    /*axios.post('http://localhost/yourshopes/yourshope-admin/Login','username=aa&&upassword=aa123',{withCredentials: true})
    .then(function(response){
      console.log('saved successfully')
    });*/

  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentWillReceiveProps(nextProps){
          if(nextProps.statusOfLoading.fetchingStarted){
              this.setState({
                   loading:true
              });
          }else{
            this.setState({
              loading:false
             });
          }
  }



  render() {
    return (
          <div>
                
                             
                                 <Navbar className="fixed-top" expand="md">
                                     <NavbarBrand href="/">reactstrap</NavbarBrand>
                                     <NavbarToggler onClick={this.toggle} />
                                       <Collapse isOpen={this.state.isOpen} navbar>
                                          <Nav className="ml-auto" navbar>                                         
                                                <NavItem>
                                                <Badge color="info">  
                                                  <NavLink className="menuLbl" href="">
                                                      
                                                           Popular Movies
                                                      
                                                  </NavLink>
                                                  </Badge>
                                                </NavItem>
                                                <NavItem>
                                                  <NavLink className="menuLbl" href="">My favorite Movies</NavLink>
                                                </NavItem>                                                
                                          </Nav>
                                          
                                       </Collapse>   
                                 </Navbar>                            
                                         
                              <div id="main">
                                
                                    <Switch>
                                        <Route path="/home" name="home" component={Home}/>  
                                        <Route path="/detail/:id" name="detail" component={Detail} />                                                
                                        <Redirect from="/" to="/home"/>
                                    </Switch>
                               
                              </div>
                              {
                                (this.state.loading) &&
                                   <div className="spinner">
                                        <img src={Loading} alt="logo" />
                                  </div>
                              }
                              

            </div>
    );
  }
}

const layOutMapStateToProps = (state) =>{
  return {
    statusOfLoading:state.statusOfLoading      
  }
}



export const  Layout =  connect(layOutMapStateToProps,{})(LayoutComponent);