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


import {Detail} from "../../components/details/details";
import Loading from "../images/loading.gif";

import {Home} from "../../components/home/home";
import {Favourite} from  "../../components/favourite/favourite";

import {listMovieFromFavourite} from "../../actions/moviesActions";


class LayoutComponent extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      loading:false,
      myFavourites:0
    };
    this.getActiveClass = this.getActiveClass.bind(this);

    this.props.listMovieFromFavourite();
   

  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  getActiveClass(val){
    if ((window.location.href).indexOf(val) > 0) {
         return 'menuLblSelected menuLbl';
    } else {
         return 'menuLbl';
    }      
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


          //console.log("in lay out ",nextProps.listMoviesFavourites.payload);
          if(nextProps.listMoviesFavourites && nextProps.listMoviesFavourites.payload){
               this.setState({
                   myFavourites:nextProps.listMoviesFavourites.payload.length
               });
          }
         
          
  }



  render() {
    return (
          <div>
                
                             
                                 <Navbar className="fixed-top" expand="md">
                                     <NavbarBrand href="/">JobUFO</NavbarBrand>
                                     <NavbarToggler onClick={this.toggle} />
                                       <Collapse isOpen={this.state.isOpen} navbar>
                                          <Nav className="ml-auto" navbar>                                         
                                                <NavItem>
                                                
                                                  <Link  to="/" className={ this.getActiveClass("/home")   } href="">
                                                       Popular Movies
                                                  </Link>
                                                 
                                                </NavItem>
                                                <NavItem>
                                                  <Link className={ this.getActiveClass("/favourite")   } to="/favourite">My favourite Movies {this.state.myFavourites}</Link>
                                                </NavItem>                                                
                                          </Nav>
                                          
                                       </Collapse>   
                                 </Navbar>                            
                                         
                              <div id="main">
                                
                                    <Switch>
                                        <Route path="/home" name="home" component={Home}/>  
                                        <Route path="/detail/:id" name="detail" component={Detail} />  
                                        <Route path="/favourite" name="favourite" component={Favourite} />                                             
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
    statusOfLoading:state.statusOfLoading,
    listMoviesFavourites:state.listMoviesFavourites      
  }
}


const layoutDispatchToProps = (dispatch) => {
  return bindActionCreators({
                   listMovieFromFavourite 
           }, dispatch);
}

export const  Layout =  connect(layOutMapStateToProps,layoutDispatchToProps)(LayoutComponent);