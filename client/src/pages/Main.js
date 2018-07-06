import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Results from "../components/Results";
import Wrapper from "../components/Wrapper";
import Search from "../components/Search";
import Saved from "../components/Saved";

class Main extends Component {

    state = {
        //set initial state
        articles : [],
        topic: "",
        startYear: "",
        endYear: "",
        saved: []
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
        })
    }

    saveButton = e => {
        e.preventDefault();
        //console.log(e.target.id)
        this.state.articles.map((elem) => {
            if(elem._id === e.target.id) {
                console.log(elem)
                API.saveArticles({
                    title: elem.headline.main,
                    url: elem.web_url,
                    date: Date.now()
                })
                .then(res => {
                    //console.log(res.data)
                    this.state.saved.push(res.data)
                    //console.log(this.state.saved)
                })
            }
        })
    }

    // renderSaved = () => {
    //     return this.state.saved.map(article => (
    //         <Saved
    //             title = {article.headline.main}
    //         />
    //     ))
    // }

    //get saved articles
    getSaved = () => {
        API.getSaved()
        .then(res => {
            console.log(res.data)
            this.setState({saved: res.data})
            console.log(this.state.saved)
        })
    }

    componentDidMount () {
        this.getSaved();
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
                        saveButton = {this.saveButton}
                    />
                ))}
        
                    {this.state.saved.map(article => (
                    <Saved
                        title = {article.title}
                    /> 
                    ))}
            </Wrapper>
        );
    }
}

export default Main;