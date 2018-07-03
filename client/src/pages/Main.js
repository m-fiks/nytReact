import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results";
import Wrapper from "../components/Wrapper";
import Search from "../components/Search";

class Main extends Component {

    state = {
        articles : []
    }

    componentDidMount() {
        API.articleQuery()
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
            <Search/>
            {this.state.articles.map(article => (
            <Results
            title = {article.headline.main}
            />
            ))}
            </Wrapper>
        )
    }
}

export default Main;