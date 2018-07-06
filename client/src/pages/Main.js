import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Results from "../components/Results";
import Wrapper from "../components/Wrapper";
import Search from "../components/Search";
import Saved from "../components/Saved";
import Header from "../components/Header";

class Main extends Component {

    state = {
        //set initial state
        articles : [],
        topic: "",
        startYear: "",
        endYear: "",
        saved: []
    }

    componentDidMount () {
        this.getSaved();
    }

    //handle search topic input
    handleTopicInput = e => {
        this.setState({topic: e.target.value})
    }

    handleStartYearInput = e => {
        this.setState({startYear: e.target.value})
    }

    handleEndYearInput = e => {
        this.setState({endYear: e.target.value})
    }
    
    //handle form submit (search form)
    handleFormSubmit = e => {
        e.preventDefault();
        //empty articles to make room for new??
        this.setState({articles: []})

        API.articleQuery(this.state.topic, this.state.startYear, this.state.endYear)
        .then(res => {
            //console.log(res.data.response.docs)
            const results = res.data.response.docs;
            //clear the form???
            this.setState({
                articles: results,
                topic: "",
                startYear: "",
                endYear: ""
            })
            //console.log(this.state)
        })
    }

    saveButton = e => {
        e.preventDefault();
        //console.log(e.target.id)
        this.state.articles.map((elem) => {
            if(elem._id === e.target.id) {
                //console.log(elem)
                API.saveArticles({
                    title: elem.headline.main,
                    url: elem.web_url,
                    date: Date.now()
                })
                .then(res => {
                    //console.log(res.data)
                    this.state.saved.push(res.data)
                    this.getSaved();
                })
            }
        })
    }

    //get saved articles
    getSaved = () => {
        API.getSaved()
        .then(res => {
            this.setState({saved: res.data})
            //console.log(this.state.saved)
        })
    }

   //delete an article
   handleDelete = (e) => {
       console.log(e.target.id)
       API.deleteArticle(e.target.id)
       .then(res => {
           console.log('successfully removed: ' + res )
           this.getSaved();
       })
   }


    render () {
        return (
            <Wrapper>
        <form className="form" id="searchForm">
	    <div className="form-group">
                <label for="searchInput">Topic</label><br/>
                    <input
                        value={this.state.topic}
                        onChange= {this.handleTopicInput} 
                        name="topic"
                        id="searchInput"
                        type="text" 
                        className="search-query" 
                        placeholder="Topic">
                    </input>
                    <br/>
                <label for="startYearInput">Start Year</label><br/>
                    <input
                        value={this.state.startYear}
                        onChange= {this.handleStartYearInput} 
                        name="startYearInput"
                        id="startYearInput"
                        type="text" 
                        className="search-query" 
                        placeholder="Start Year">
                    </input>
                <br/>
                <label for="endYearInput">End Year</label><br/>
                    <input
                        value={this.state.endYear}
                        onChange= {this.handleEndYearInput} 
                        name="endYearInput"
                        id="endYearInput"
                        type="text" 
                        className="search-query" 
                        placeholder="End Year">
                    </input>
                <br/>
                <button onClick={this.handleFormSubmit} type="submit" className="btn"><span className="glyphicon glyphicon-search"></span></button>
	    </div>
    </form>
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
        
                    <Header/>
                    {this.state.saved.map(article => (
                    <Saved
                        title = {article.title}
                        id ={article._id}
                        handleDelete={this.handleDelete}
                    /> 
                    ))}
            </Wrapper>
        );
    }
}

export default Main;