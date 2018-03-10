import React,{Component} from 'react';

import { bindActionCreators } from 'redux'
import {connect} from "react-redux";
import { Row,Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button ,Container,Form,FormGroup,Label,Input,Badge,InputGroup,InputGroupAddon,InputGroupText,CardHeader,CardFooter  } from 'reactstrap';
import {getMovieDetails,getRecommendation} from "../../actions/moviesActions";
import {img_Url} from "../../constants";

import "./details.css";


const movieDetailsDefault = {
            data:{},
            recommendations:[]
}

class DetailsComponent extends Component {

    constructor(props){
        super(props);
        this.state = Object.assign({},movieDetailsDefault);
        this.goToDetails = this.goToDetails.bind(this);

    }

    goToDetails(id){
       //this.props.history.push("/detail/"+id);
       this.props.getMovieDetails({id:id});
       this.props.getRecommendation({id:id});
    }

    componentWillMount(){
        //console.log(this.props.match.params.id);
        if(!this.props.match.params.id){
            this.props.history.push("/home");
        }else{
            this.props.getMovieDetails({id:this.props.match.params.id});
            this.props.getRecommendation({id:this.props.match.params.id});
        }
    }

    componentWillReceiveProps(nextProps){
        //console.log(nextProps);
        if(nextProps.movieDetails.fetchingSuccess){               
                this.setState({
                    data:nextProps.movieDetails.payload
                },()=>{
                    //console.log("*",this.state);
                });
        }

        if(nextProps.movieRecommendations.fetchingSuccess){
                
                //console.log(nextProps.movieRecommendations);
                this.setState({
                    recommendations:[]
                },()=>{
                    let currList = []

                    let dummyArray = [...this.state.recommendations,...nextProps.movieRecommendations.payload.results];
                    this.setState({
                        recommendations:Object.assign([],[...dummyArray])
                    },()=>{
                        //console.log("movie recommen"+this.state);                   
                    });

                },this)                

        }
    }




    render(){
        return (
           <Container>
               {
                   this.state.data.id && <Row>
                   <Col className="m5" md="8" xs="12" sm="12">
                       <Card>
                           <Row>
                               <Col md="5">
                                  <CardImg top width="100%" src={img_Url+this.state.data.poster_path} alt="Card image cap" />                        
                               </Col>
                               <Col md="7">
                               <CardBody>
                           <CardTitle>{this.state.data.original_title}</CardTitle>
                           <CardSubtitle>{this.state.data.tagline}</CardSubtitle>
                           <CardText>{this.state.data.overview}</CardText>
                            {
                                this.state.data.genres.map(function(geners){
                                    return (
                                        <Badge className="genres" key={"geners"+geners.id} color="info">{geners.name}</Badge>
                                    )
                                })
                            }                            
                            <CardText>Countries : {
                                      this.state.data.production_countries.map(function(countries,index){
                                            return (
                                                <span key={"countries"+index}>{countries.name}</span>
                                            )
                                      })

                            }</CardText>
                            <CardText>Link : {this.state.data.homepage}</CardText>
                           </CardBody>
                               </Col>
                           </Row>
                       </Card>               
                   </Col>
                   
                   <Col className="m5" md="4" xs="12" sm="12">
                       <Card>
                           <CardHeader>Recommended Movies</CardHeader>
                           <CardBody className="recommendConainer">                                
                                    {
                                       (this.state.recommendations.length > 0) ? this.state.recommendations.map(function(vals,index){
                                             return (
                                                <Card key={"recommendations_"+vals.id+index} className="recommendedMovieCard" onClick={ ()=> this.goToDetails(vals.id) }> 
                                                     <CardImg top width="100%" src={img_Url+vals.poster_path} alt="Card image cap" />
                                                        <CardBody>
                                                            <CardTitle>{vals.title}</CardTitle>
                                                        </CardBody>
                                                </Card>
                                             )
                                        },this) :
                                       
                                            
                                               <CardTitle>No Recommendation Available</CardTitle>
                                                     
                                      
                                    }
                                   
                           </CardBody>                          
                       </Card>                   
                   </Col>            
                </Row>    
               }                     
           </Container>          
        )
    }

}

const detailMapStateToProps = (state) =>{
    return {
          movieDetails:state.getMovieDetails,
          movieRecommendations:state.getMovieRecommendations
    }
}

const detailDispatchToProps = (dispatch) => {
  return bindActionCreators({
               getMovieDetails,
               getRecommendation  
           }, dispatch);
}

export const Detail = connect(detailMapStateToProps,detailDispatchToProps)(DetailsComponent);