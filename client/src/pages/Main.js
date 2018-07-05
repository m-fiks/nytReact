import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Results from "../components/Results";
import Wrapper from "../components/Wrapper";
import Search from "../components/Search";

class Main extends Component {

    state = {
        //set initial state
        articles : [],
        topic: "",
        startYear: "",
        endYear: "",
        id: ""
    }

    componentDidMount () {
        API.getAll()
        .then(res => {
            console.log(res.data)
            //this.setState({articles: res.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleTopicInput = e => {
        this.setState({topic: e.target.value})
    }

    handleStartYearInput = e => {
        this.setState({startYear: e.target.value})
    }

    handleEndYearInput = e => {
        this.setState({endYear: e.target.value})
    }

    handleFormSubmit = e => {
        e.preventDefault();
        //console.log(this.state)
        API.articleQuery(this.state.topic, this.state.startYear, this.state.endYear)
        .then(res => {
            //console.log(res.data.response.docs)
            const results = res.data.response.docs;
            this.setState({articles: results})
            
            //also save these to db
            results.map(article => {
                API.saveArticles({
                    title: article.headline.main,
                    url:article.web_url,
                    date: article.pub_date
                })
                .then(results => {
                    console.log(results.data._id)
                })
                
            })
        })
    }

    render () {
        return (
            <Wrapper>
                <Search
                    handleTopicInput={this.handleTopicInput}
                    handleStartYearInput={this.handleStartYearInput}
                    handleEndYearInput={this.handleEndYearInput}
                    handleFormSubmit={this.handleFormSubmit}
                />
        
                  {this.state.articles.map(article => (
                      //console.log(article._id)
                      <Results
                        id={article._id}
                        key={article._id}
                        title={article.headline.main}
                        date = {article.pub_date}
                        url = {article.web_url}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default Main;