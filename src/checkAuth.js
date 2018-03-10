import React,{Component} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';


export function requireAuth(Comp){
    
    class Authenticte extends Component{

        componentWillMount() {
            this.checkAuth();
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth();
        }

        checkAuth() {            
           // console.log(this.props);
             if(this.props.auth && this.props.auth.token){
                 
             } else {
                //this.props.history.push("/login"); 
                this.props.history.push("/home"); 
             }          
        }

        render(){
             return(
                   <Comp {...this.props} />
             )
        }
    }  
    
    Authenticte.propTypes  = {
        auth:PropTypes.any
    }

    function mapStateToProps(state){
        //console.log(state);   
        /*return{
            auth:state.loginConnect
        }*/
    }

    return connect(mapStateToProps)(Authenticte);


}