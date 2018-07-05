import React, { Component } from "react";
import API from "../utils/API";
import Search from "../components/Search";
import Results from "../components/Results";
import Saved from"../components/Saved";
import Wrapper from "../components/Wrapper";


class SavedPage extends Component {

    state = {
        //set initial state
        articles : [],
        topic: "",
        startYear: "",
        endYear: "",
        saved: [0,1,2,3,5]
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
                        saveButton= { () => {
                            API.saveArticles({ 
                                title: article.headline.main,
                                url: article.web_url,
                                date: article.pub_date
                            })
                            .then(results => {
                                this.state.saved.push(results.data)
                                console.log(this.state.saved)
                            })
                        }}
                    />
                ))}
                
                {this.state.saved.map(savedArt => (
                        //console.log(article)
                        <Saved
                            title={savedArt.title}
                        />
                    ))
                }
        
            </Wrapper>
        );
    }
}

export default SavedPage;