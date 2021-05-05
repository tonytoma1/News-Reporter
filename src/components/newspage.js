import { render } from "@testing-library/react";
import axios from "axios";
import React from "react";

import {Container, Col, Row} from 'react-bootstrap';

import "../css/newspage.css";

export class NewsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topArticles: [],
            sportsNews: [],
            businessNews: [],
            healthNews: [],
            technologyNews: [],
            otherNews: [],
            isLoading: true
        }
       
    }

    componentDidMount() {
        let topArticlesUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=bcfd444953aa43e1ae608f15f17ec3e8";
        let sportsUrl = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=bcfd444953aa43e1ae608f15f17ec3e8";
        let businessUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bcfd444953aa43e1ae608f15f17ec3e8";
        let healthUrl = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=bcfd444953aa43e1ae608f15f17ec3e8";
        let technologyUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=bcfd444953aa43e1ae608f15f17ec3e8";
        
        
        Promise.all([axios.get(topArticlesUrl), axios.get(sportsUrl), axios.get(businessUrl), axios.get(healthUrl),
                    axios.get(technologyUrl)])
                    .then((response) => {
                        this.setState({
                            topArticles: response[0].data.articles,
                            sportsNews: response[1].data.articles,
                            businessNews: response[2].data.articles,
                            healthNews: response[3].data.articles,
                            technologyNews: response[4].data.articles,
                           
                        })

                        console.log(response);
                    })
                    .catch((error) => {

                    })
                    .finally((res => {
                        this.setState({isLoading: false})
                    }))
    }

    render() {
        if(this.state.isLoading) {
            return (
                <h1>Loading...</h1>
            )
        }

        let data = this.state.topArticles.slice(1, this.state.topArticles.length);

        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7">
                        <a href={this.state.topArticles[0].url}>
                            <h1>Breaking news this hour</h1>
                            <img className="img-fluid" src={this.state.topArticles[0].urlToImage}/>
                            <h2>{this.state.topArticles[0].title}</h2>
                            <p>{this.state.topArticles[0].description}</p>
                        </a>
                    </div>

                    <div className="col-md-5">
                        <div className="box">
                                {data.map((article, index) => {
                                return(
                                    <div className="row">
                                            <div className="col">
                                                <a href={article.url}>
                                                    <img className="side-box-image" src={article.urlToImage}/>
                                                </a>
                                            </div>
                                            
                                            <div className="col-8">
                                                <a href={article.url}>
                                                <ul>
                                                    <li>{article.title}</li>
                                                    <li>{article.description}</li>
                                                </ul>
                                                </a>
                                            </div>
                                        
                                        
                                    </div>
                                )
                            })}
                        </div>
                   
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h1>Latest in Business</h1>
                    </div>
                </div>

                <div className="row horizontal-list">
                    
                        {this.state.businessNews.map((article, index) => {
                            return(
                            
                                <div className="col-2">
                                    <a href={article.url}>
                                    <img src={article.urlToImage} height="200" width="200"/>
                                    <h3>{article.title}</h3>
                                    </a>
                                </div>
                            )
                        })}
                    
                </div>

                <div className="row">
                    <h1>Latest in Health</h1>
                </div>
                
                <div className="row horizontal-list">
                    
                    {this.state.healthNews.map((article, index) => {
                        return(
                        
                            <div className="col-2">
                                <a href={article.url}>
                                    <img src={article.urlToImage} height="200" width="200"/>
                                    <h3>{article.title}</h3>
                                </a>
                            </div>
                        
                        )
                    })}
                
                </div>

                <div className="row">
                    <h1>Latest in Technology</h1>
                </div>

                <div className="row horizontal-list">
                    
                    {this.state.technologyNews.map((article, index) => {
                        return(
                        
                            <div className="col-2">
                                <a href={article.url}>
                                    <img src={article.urlToImage} height="200" width="200"/>
                                    <h3>{article.title}</h3>
                                </a>
                            </div>
                        )
                    })}
                
                </div>

                <div className="row">
                   <h1>Latest in Sports</h1>
                </div>

                <div className="row horizontal-list">
                    
                    {this.state.sportsNews.map((article, index) => {
                        return(
                        
                            <div className="col-2">
                                <a href={article.url}>
                                    <img src={article.urlToImage} height="200" width="200"/>
                                    <h3>{article.title}</h3>
                                </a>
                            </div>
                        )
                    })}
                
                </div>

                
               
            </div>
        )
    }
}
