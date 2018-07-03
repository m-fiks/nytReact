import React from "react";
import "./Search.css";

const Search = () => (
    <form className="form">
	    <div className="form-group">
                <div className="input">
                    <label for="searchInput">Topic</label><br/>
                    <input id="searchInput"type="text" className="search-query" placeholder="Topic"></input>
                </div>
                <div className="input">
                    <label for="startYearInput">Start Year</label><br/>
                    <input id="startYearInput"type="text" className="search-query" placeholder="Start Year"></input>
                </div>
                <div className="input">
                    <label for="endYearInput">End Year</label><br/>
                    <input id="endYearInput"type="text" className="search-query" placeholder="End Year"></input>
                </div>
                <br/>
                <button type="submit" className="btn"><span className="glyphicon glyphicon-search"></span></button>
	    </div>
    </form>
);

export default Search;