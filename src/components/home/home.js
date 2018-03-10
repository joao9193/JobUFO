import React,{Component} from 'react';

import { bindActionCreators } from 'redux'
import {connect} from "react-redux";
import { Row,Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button ,Container,Form,FormGroup,Label,Input,Badge,InputGroup,InputGroupAddon,InputGroupText  } from 'reactstrap';
import {getAllPopularMovies,getMovieGenre} from "../../actions/moviesActions";


import "./home.css";

//import StarRatingComponent from 'react-star-rating-component';
import {img_Url} from "../../constants";
import FaSearchPlus from 'react-icons/lib/fa/search-plus';


const defaultStateMovieList = {
    page:1,
    searchName:"",
    movieList:[],
    genres:[]
}

class HomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = Object.assign({},defaultStateMovieList);
        this.handleScroll = this.handleScroll.bind(this);
        this.goToDetails = this.goToDetails.bind(this);
        this.searchNameChange = this.searchNameChange.bind(this);
        this.searchByStr = this.searchByStr.bind(this);
    }

    searchNameChange(e){
        this.setState({
            searchName:e.target.value
        })
    }

    searchByStr(){
        if(this.state.searchName.length > 2){
            alert("go");
        }         
    }

    goToDetails(id){
        this.props.history.push("/detail/"+id);
    }

    handleScroll() {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        
        if (windowBottom >= docHeight) {
           console.log("bottom reached");
           //Increment page counting
           if(this.state.page < 1000){               
              this.setState({
                   page: this.state.page + 1
              },()=>{
                   this.props.getAllPopularMovies({page:this.state.page});
              })
           }
                  
        } else {
           console.log("not bottom reached");
        }
      }

     
    
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }

    componentWillMount(){
        this.props.getMovieGenre();
        this.props.getAllPopularMovies({page:this.state.page});
    }

    componentWillUpdate(nextProps,nextState){
        //console.log(nextProps.getGenre);
        
            
    }

    componentWillReceiveProps(nextProps){
  
       //// console.log(nextProps);
        if(nextProps.getGenre.fetchingSuccess){
            let currList = []

            let dummyArray = [...this.state.genres,...nextProps.getGenre.payload.genres];
            this.setState({
                genres:Object.assign([],[...dummyArray]),
            },()=>{
               console.log(this.state);
            });

        }


        if(nextProps.getMovies.fetchingSuccess){
            let currList = []

            let dummyArray = [...this.state.movieList,...nextProps.getMovies.payload.results];
            this.setState({
                movieList:Object.assign([],[...dummyArray]),
                page:nextProps.getMovies.payload.page,
            },()=>{
                console.log("movielist ",this.state);
            });
        }
    }

    render(){
        return (  
                <Container> 
                  <Row>
                      
                      
                      <Col md="8" sm="12" xs="12" className="pd520 " >
                             <Label for="exampleSelectMulti" className="homePageHeading">Popular Movies</Label>
                      </Col>
                      <Col md="4" sm="12" xs="12" className="pd520" >
                                                           
                                <InputGroup>
                                  <Input name="movie_name" value={this.state.searchName} onChange={this.searchNameChange}  placeholder="movie name"/>
                                    <InputGroupAddon addonType="append">
                                    <InputGroupText onClick={this.searchByStr} className={(this.state.searchName.length > 2) ? 'input-group-text-override': null }> <FaSearchPlus /> </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                           
                      </Col>
                                     
                  </Row>
                  <Row>   
                   
                            {
                                this.state.movieList && this.state.movieList.map(function(val,index){
                                      return(
                                        <Col key={index} md="3" xs="12" sm="6" onClick={ ()=> this.goToDetails(val.id) }  > 
                                           <Card className="movieTile">
                                            <CardImg top width="100%" src={img_Url+val.poster_path} alt={val.title} />
                                            <CardBody>
                                                <CardTitle>{val.original_title}  </CardTitle> 
                                                 <div>
                                                        {
                                                          val.genre_ids && val.genre_ids.map(function(genresfilm,index){
                                                           
                                                            return(
                                                                <span key={'genercontainer_'+genresfilm+'_'+index}>{
                                                                        this.state.genres && this.state.genres.map(function(geners,index){
                                                                               if(geners.id == genresfilm){
                                                                                   return (
                                                                                        <span key={'gener_'+geners.id+'_'+index}>
                                                                                          <Badge className="customBadge" color="primary">{geners.name}</Badge>
                                                                                         </span>
                                                                                    )
                                                                               } 
                                                                             
                                                                        },this)

                                                                       }</span>
                                                            ) 
                                                              


                                                          },this)   
                                                       }
                                                 </div>
                                            </CardBody>
                                           </Card>
                                        </Col>
                                        )
                                    },this)
                            }



                            
                    
                  </Row> 
                </Container>  
                
               )
    }

}

const homeMapStateToProps = (state) =>{
    return {
        getMovies:state.getAllPopularMovies,
        getGenre:state.getMoviesGenre      
    }
}

const homeDispatchToProps = (dispatch) => {
  return bindActionCreators({
                getAllPopularMovies,
                getMovieGenre  
           }, dispatch);
}

export const Home = connect(homeMapStateToProps,homeDispatchToProps)(HomeComponent)
