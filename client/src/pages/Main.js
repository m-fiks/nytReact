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
        topic: "Cat Cafe",
        startYear: "2012",
        endYear: "2018"
    }

    componentDidMount () {
        API.articleQuery(this.state.topic, this.state.startYear, this.state.endYear)
        .then(res => {
            //console.log(res.data.response.docs)
            const results = res.data.response.docs;
            //console.log(results)
            this.setState({articles: results})
            // results.map((elem) => {
            //     let title = elem.headline.main;
            //     console.log(title);
            //     return title;
            // })
            console.log(this.state.results)
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
        console.log(this.state)
        API.articleQuery(this.state.topic, this.state.startYear, this.state.endYear)
        .then(res => {
            //console.log(res.data.response.docs)
            const results = res.data.response.docs;
            //console.log(results)
            this.setState({articles: results})
            // results.map((elem) => {
            //     let title = elem.headline.main;
            //     console.log(title);
            //     return title;
            // })
            console.log(this.state.results)
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
                    <Link to="/api/saved">
                    <Results
                    title = {article.headline.main}
                    />
                    </Link>
                ))}
            </Wrapper>
        )
    }
}

export default Main;