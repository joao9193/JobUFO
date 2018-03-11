import React,{Component} from 'react';

import { bindActionCreators } from 'redux'
import {connect} from "react-redux";
import { Row,Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button ,Container,Form,FormGroup,Label,Input,Badge,InputGroup,InputGroupAddon,InputGroupText,CardHeader,CardFooter  } from 'reactstrap';
import {getMovieDetails,getRecommendation,listMovieFromFavourite,removeMovieFromFavourite} from "../../actions/moviesActions";
import {img_Url} from "../../constants";

import 'font-awesome/css/font-awesome.min.css';
import "./favourites.css"

const favouritesDefaultState = {
    datas:[],
    genres:[]
}



class FavouriteComponent extends Component {

    constructor(props){
      super(props);
      this.props.listMovieFromFavourite();
      this.state = Object.assign({},favouritesDefaultState);
      this.removeFromFavourites = this.removeFromFavourites.bind(this);
      this.goToDetails = this.goToDetails.bind(this);
    }

    goToDetails(id){
        this.props.history.push("/detail/"+id);
    }

    removeFromFavourites(index){
             this.props.removeMovieFromFavourite(index);
    }

    componentWillMount(){
    }

    componentWillReceiveProps(nextProps){
        //console.log("favourites ",nextProps.listMoviesFavourites);
        //console.log(nextProps.listMoviesFavourites.payload );
        if(nextProps.listMoviesFavourites && nextProps.listMoviesFavourites.payload){
            //console.log("listMoviesFavourites ",nextProps.listMoviesFavourites.payload);
                this.setState({
                    datas:nextProps.listMoviesFavourites.payload
                })
        }
    }

    render(){
        return(
            <Container>
                    <Container className="searchBar">
                            <Row>
                                <Col md="8" sm="12" xs="12" className="pd520 " >
                                        <Label for="exampleSelectMulti" className="homePageHeading">My Favourites</Label>
                                </Col>
                                <Col md="4" sm="12" xs="12" className="pd520" >
                                                                    
                                            
                                    
                                </Col>     
                            </Row>                    
                    </Container>
                   <Row className="myFavouritesCards">  

                          {
                                (this.state.datas && this.state.datas.length > 0  ) ? this.state.datas.map(function(val,index){
                                      return(
                                        <Col key={index} md="3" xs="12" sm="6"  > 
                                           <Card className="movieTile"  >
                                           <div onClick={ ()=> this.removeFromFavourites(index) }><i className="fa removeBtn fas fa-times-circle"></i></div> 
                                            <CardImg onClick={ ()=> this.goToDetails(val.id) } top width="100%" src={img_Url+val.poster_path} alt={val.title} />
                                            <CardBody onClick={ ()=> this.goToDetails(val.id) }>
                                                <CardTitle>{val.original_title}</CardTitle> 
                                                 <div>
                                                        {
                                                          val.genres && val.genres.map(function(vals,index){
                                                           
                                                            return(
                                                                <span key={'favourite_'+vals+'_'+index}>{
                                                                          <Badge className="customBadge" color="primary">{vals.name}</Badge>
                                                                       }</span>
                                                            )

                                                          },this)   
                                                       }
                                                 </div>
                                            </CardBody>
                                           </Card>
                                        </Col>
                                        )
                                    },this) : <Row className="noFavouritesLbl">
                                                  <Col md="12" sm="12" xs="12" className="pd520 " >
                                                       <Label for="exampleSelectMulti" className="homePageHeading">No Favorites now</Label>
                                                   </Col>
                                              </Row>     
                            }

                           
                   
                   </Row>
            </Container>

        )
    }

}

const favouritesMapStateToProps = (state) =>{
    return {
        listMoviesFavourites:state.listMoviesFavourites,
        removeMovieFromFavourites:state.removeMovieFromFavourites
    }
}

const favouritesDispatchToProps = (dispatch) => {
  return bindActionCreators({
                 listMovieFromFavourite,
                 removeMovieFromFavourite
           }, dispatch);
}

export const Favourite = connect(favouritesMapStateToProps,favouritesDispatchToProps)(FavouriteComponent);