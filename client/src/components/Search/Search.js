import React from "react";
import "./Search.css";

const Search = props => (
    <form className="form">
	    <div className="form-group">
                <label for="searchInput">Topic</label><br/>
                    <input
                        value= {props.searchTopic}
                        onChange= {props.handleTopicInput} 
                        name="topic"
                        id="searchInput"
                        type="text" 
                        className="search-query" 
                        placeholder="Topic">
                    </input>
                    <br/>
                <label for="startYearInput">Start Year</label><br/>
                    <input
                        value= {props.startYear}
                        onChange= {props.handleStartYearInput} 
                        name="startYearInput"
                        id="startYearInput"
                        type="text" 
                        className="search-query" 
                        placeholder="Start Year">
                    </input>
                <br/>
                <label for="endYearInput">End Year</label><br/>
                    <input
                        value= {props.endYear}
                        onChange= {props.handleEndYearInput} 
                        name="endYearInput"
                        id="endYearInput"
                        type="text" 
                        className="search-query" 
                        placeholder="End Year">
                    </input>
                <br/>
                <button href="/search" onClick={props.handleFormSubmit} type="submit" className="btn"><span className="glyphicon glyphicon-search"></span></button>
	    </div>
    </form>
);

export default Search;