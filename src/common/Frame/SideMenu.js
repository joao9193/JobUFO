import React,{Component} from 'react';
import {Nav} from "reactstrap"

export default class SideMenu extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
             <div>
                <ul>
                        <li><a className="active" href="#home">Home</a></li>
                        <li>
                            <a href="#news">News</a>
                            <ul className="submenu">
                                    <li><a href="">Tops</a></li>
                                    <li><a href="">Bottoms</a></li>
                                    <li><a href="">Footwear</a></li>
                                </ul>                        
                        </li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About</a></li>
                </ul>
            </div>    
        )
    }
}